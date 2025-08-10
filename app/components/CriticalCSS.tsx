// CSS critique inline pour améliorer le First Contentful Paint
export default function CriticalCSS() {
  return (
    <style jsx>{`
      /* CSS critique pour le rendu initial */
      body {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        line-height: 1.6;
        margin: 0;
        padding: 0;
        color: #1f2937;
      }
      
      /* Header critique */
      header {
        background: #ffffff;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        position: sticky;
        top: 0;
        z-index: 50;
      }
      
      /* Navigation critique */
      .taxi-yellow { background-color: #fbbf24; }
      .taxi-orange { background-color: #f97316; }
      .taxi-blue { background-color: #0ea5e9; }
      
      /* Hero section critique */
      .hero-section {
        background: linear-gradient(135deg, #0ea5e9 0%, #2563eb 100%);
        color: white;
        padding: 3rem 1rem;
        text-align: center;
      }
      
      .hero-title {
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 1rem;
        line-height: 1.2;
      }
      
      /* Boutons critiques */
      .btn-primary {
        background-color: #fbbf24;
        color: #000000;
        padding: 0.75rem 1.5rem;
        border-radius: 0.5rem;
        font-weight: 600;
        text-decoration: none;
        display: inline-block;
        margin: 0.25rem;
      }
      
      .btn-secondary {
        background-color: #2563eb;
        color: #ffffff;
        padding: 0.75rem 1.5rem;
        border-radius: 0.5rem;
        font-weight: 600;
        text-decoration: none;
        display: inline-block;
        margin: 0.25rem;
      }
      
      /* Responsive mobile-first */
      @media (max-width: 768px) {
        .hero-title { font-size: 2rem; }
        .hero-section { padding: 2rem 1rem; }
      }
    `}</style>
  )
}