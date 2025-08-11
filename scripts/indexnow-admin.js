#!/usr/bin/env node

/**
 * IndexNow Administration Script
 * Usage: node scripts/indexnow-admin.js [command]
 * 
 * Commands:
 *   submit-all    - Submit all site pages to IndexNow
 *   submit-url    - Submit specific URL(s)
 *   status        - Check IndexNow configuration
 *   help          - Show this help
 */

const https = require('https')

const SITE_URL = 'https://www.taxi-sables-olonne.fr'
const API_ENDPOINT = `${SITE_URL}/api/indexnow`

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  white: '\x1b[37m'
}

function log(message, color = colors.white) {
  console.log(`${color}${message}${colors.reset}`)
}

function makeRequest(method, path, data = null) {
  return new Promise((resolve, reject) => {
    const url = new URL(path, SITE_URL)
    const options = {
      hostname: url.hostname,
      port: 443,
      path: url.pathname + url.search,
      method: method,
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'IndexNow-Admin-Script/1.0'
      }
    }

    const req = https.request(options, (res) => {
      let body = ''
      res.on('data', (chunk) => {
        body += chunk
      })
      res.on('end', () => {
        try {
          const parsed = JSON.parse(body)
          resolve({ status: res.statusCode, data: parsed })
        } catch (e) {
          resolve({ status: res.statusCode, data: body })
        }
      })
    })

    req.on('error', (e) => {
      reject(e)
    })

    if (data) {
      req.write(JSON.stringify(data))
    }

    req.end()
  })
}

async function submitAllPages() {
  log('📡 Submitting all pages to IndexNow...', colors.blue)
  
  try {
    const response = await makeRequest('POST', '/api/indexnow', { all: true })
    
    if (response.status === 200) {
      log('✅ Success!', colors.green)
      log(`Message: ${response.data.message}`, colors.white)
      
      if (response.data.results) {
        log('\nResults per endpoint:', colors.cyan)
        response.data.results.forEach(result => {
          const status = result.success ? '✅' : '❌'
          const endpoint = result.endpoint.replace('https://', '').split('/')[0]
          log(`  ${status} ${endpoint}${result.error ? ` - ${result.error}` : ''}`)
        })
      }
    } else {
      log(`❌ Failed with status ${response.status}`, colors.red)
      log(`Error: ${response.data.error || 'Unknown error'}`, colors.red)
    }
  } catch (error) {
    log(`❌ Request failed: ${error.message}`, colors.red)
  }
}

async function submitUrls(urls) {
  log(`📡 Submitting ${urls.length} URL(s) to IndexNow...`, colors.blue)
  
  try {
    const response = await makeRequest('POST', '/api/indexnow', { urls })
    
    if (response.status === 200) {
      log('✅ Success!', colors.green)
      log(`Message: ${response.data.message}`, colors.white)
      
      if (response.data.results) {
        log('\nResults per endpoint:', colors.cyan)
        response.data.results.forEach(result => {
          const status = result.success ? '✅' : '❌'
          const endpoint = result.endpoint.replace('https://', '').split('/')[0]
          log(`  ${status} ${endpoint}${result.error ? ` - ${result.error}` : ''}`)
        })
      }
    } else {
      log(`❌ Failed with status ${response.status}`, colors.red)
      log(`Error: ${response.data.error || 'Unknown error'}`, colors.red)
    }
  } catch (error) {
    log(`❌ Request failed: ${error.message}`, colors.red)
  }
}

async function showStatus() {
  log('📊 IndexNow Status:', colors.blue)
  
  try {
    const response = await makeRequest('GET', '/api/indexnow')
    
    if (response.status === 200) {
      const data = response.data
      log(`Service: ${data.service}`, colors.white)
      log(`Status: ${data.status}`, colors.green)
      log(`Key: ${data.key}`, colors.white)
      log(`Key Location: ${data.keyLocation}`, colors.white)
      
      log('\nSupported Engines:', colors.cyan)
      data.supportedEngines.forEach(engine => {
        log(`  • ${engine}`, colors.white)
      })
      
      log('\nAPI Usage:', colors.cyan)
      Object.entries(data.usage).forEach(([action, command]) => {
        log(`  ${action}: ${command}`, colors.white)
      })
    } else {
      log(`❌ Failed to get status: ${response.status}`, colors.red)
    }
  } catch (error) {
    log(`❌ Request failed: ${error.message}`, colors.red)
  }
}

function showHelp() {
  log('IndexNow Administration Script', colors.cyan)
  log('============================\n', colors.cyan)
  
  log('Usage:', colors.yellow)
  log('  node scripts/indexnow-admin.js [command] [options]\n', colors.white)
  
  log('Commands:', colors.yellow)
  log('  submit-all                    Submit all site pages', colors.white)
  log('  submit-url <url1> [url2...]   Submit specific URL(s)', colors.white)
  log('  status                        Show IndexNow configuration', colors.white)
  log('  help                          Show this help\n', colors.white)
  
  log('Examples:', colors.yellow)
  log('  node scripts/indexnow-admin.js submit-all', colors.white)
  log('  node scripts/indexnow-admin.js submit-url /tarifs', colors.white)
  log('  node scripts/indexnow-admin.js submit-url https://www.taxi-sables-olonne.fr/contact', colors.white)
  log('  node scripts/indexnow-admin.js status', colors.white)
}

// Main execution
async function main() {
  const command = process.argv[2]
  const args = process.argv.slice(3)

  switch (command) {
    case 'submit-all':
      await submitAllPages()
      break

    case 'submit-url':
      if (args.length === 0) {
        log('❌ Error: No URLs provided', colors.red)
        log('Usage: node scripts/indexnow-admin.js submit-url <url1> [url2...]', colors.yellow)
        process.exit(1)
      }
      await submitUrls(args)
      break

    case 'status':
      await showStatus()
      break

    case 'help':
    case '--help':
    case '-h':
      showHelp()
      break

    default:
      log('❌ Unknown command. Use "help" to see available commands.', colors.red)
      showHelp()
      process.exit(1)
  }
}

main().catch(error => {
  log(`❌ Script error: ${error.message}`, colors.red)
  process.exit(1)
})