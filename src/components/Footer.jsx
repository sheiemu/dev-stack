export default function Footer() {
  return (
    <footer style={{background: '#fff', color: '#444', marginTop: '80px', borderTop: '1px solid #eee'}}>
      
      {/* Main Footer */}
      <div className="footer-main" style={{
        width: '90%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '60px 0 40px',
        display: 'flex',
        gap: '60px',
        flexWrap: 'wrap'
      }}>

        {/* Brand Block */}
        <div style={{flex: 2, minWidth: '200px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px'}}>
            <img src="/logo-text.png" alt="Dev Stack" style={{width: '100px', height: 'auto'}} />
          </div>
          <p style={{fontSize: '13px', lineHeight: '1.7', color: '#888', maxWidth: '260px'}}>
            Curated tools, technologies, and resources for developers building modern software.
          </p>
          <div className="footer-social" style={{display: 'flex', gap: '16px', marginTop: '20px', alignItems: 'center', justifyContent: 'center'}}>
            <a href="#" style={{color: '#444', textDecoration: 'none', fontSize: '13px', fontWeight: '600'}}>GitHub</a>
            <span style={{color: '#888'}}>•</span>
            <a href="#" style={{color: '#444', textDecoration: 'none', fontSize: '13px', fontWeight: '600'}}>Twitter</a>
            <span style={{color: '#888'}}>•</span>
            <a href="#" style={{color: '#444', textDecoration: 'none', fontSize: '13px', fontWeight: '600'}}>LinkedIn</a>
          </div>
        </div>

        {/* Product Links */}
        <div className="footer-links" style={{flex: 1, minWidth: '120px'}}>
          <h4 style={{color: '#111', fontSize: '12px', fontWeight: '700', marginBottom: '16px', letterSpacing: '1px', textTransform: 'uppercase'}}>Product</h4>
          <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
            <a href="#" style={{color: '#888', textDecoration: 'none', fontSize: '13px'}}>Home</a>
            <a href="#" style={{color: '#888', textDecoration: 'none', fontSize: '13px'}}>Technologies</a>
            <a href="#" style={{color: '#888', textDecoration: 'none', fontSize: '13px'}}>Projects</a>
          </div>
        </div>

        {/* Company Links */}
        <div className="footer-links" style={{flex: 1, minWidth: '120px'}}>
          <h4 style={{color: '#111', fontSize: '12px', fontWeight: '700', marginBottom: '16px', letterSpacing: '1px', textTransform: 'uppercase'}}>Company</h4>
          <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
            <a href="#" style={{color: '#888', textDecoration: 'none', fontSize: '13px'}}>About</a>
            <a href="#" style={{color: '#888', textDecoration: 'none', fontSize: '13px'}}>Contact</a>
            <a href="#" style={{color: '#888', textDecoration: 'none', fontSize: '13px'}}>Careers</a>
          </div>
        </div>

        {/* Legal Links */}
        <div className="footer-links" style={{flex: 1, minWidth: '120px'}}>
          <h4 style={{color: '#111', fontSize: '12px', fontWeight: '700', marginBottom: '16px', letterSpacing: '1px', textTransform: 'uppercase'}}>Legal</h4>
          <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
            <a href="#" style={{color: '#888', textDecoration: 'none', fontSize: '13px'}}>Privacy Policy</a>
            <a href="#" style={{color: '#888', textDecoration: 'none', fontSize: '13px'}}>Terms of Service</a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div style={{borderTop: '1px solid #eee', padding: '20px 0'}}>
        <div style={{
          width: '90%',
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '10px'
        }}>
          <p style={{fontSize: '12px', color: '#888'}}>© 2026 Dev Stack. All rights reserved.</p>
          <div style={{display: 'flex', gap: '20px'}}>
            <a href="#" style={{color: '#888', textDecoration: 'none', fontSize: '12px'}}>Privacy</a>
            <a href="#" style={{color: '#888', textDecoration: 'none', fontSize: '12px'}}>Terms</a>
          </div>
        </div>
      </div>

    </footer>
  );
}