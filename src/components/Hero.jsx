export default function Hero() {
  return (
    <section style={{
      width: '90%',
      maxWidth: '1200px',
      margin: '60px auto',
    }}>
      {/* Desktop layout */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '40px',
        flexWrap: 'wrap'
      }}>
        
        {/* Left Content */}
        <div style={{flex: '1', minWidth: '280px'}}>
          <h1 style={{fontSize: '48px', fontWeight: '700', lineHeight: '1.2', color: '#111'}}>
            Build Your Ideal{" "}
            <span style={{
              background: 'linear-gradient(90deg, #ff8c00, #ff1493, #8b00ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Development Stack
            </span>
          </h1>

          <p style={{marginTop: '20px', color: '#666', fontSize: '16px', lineHeight: '1.6'}}>
            Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
          </p>

          <div style={{display: 'flex', gap: '15px', marginTop: '28px', flexWrap: 'wrap'}}>
            <button style={{
              background: 'linear-gradient(90deg, #ff8c00, #ff1493, #8b00ff)',
              border: 'none',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '25px',
              fontSize: '14px',
              cursor: 'pointer',
              fontWeight: '600'
            }}>
              Explore Technologies
            </button>
            <button style={{
              background: 'white',
              border: '1px solid #ddd',
              color: '#333',
              padding: '12px 24px',
              borderRadius: '25px',
              fontSize: '14px',
              cursor: 'pointer',
              fontWeight: '500'
            }}>
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div style={{flex: '1', minWidth: '280px', display: 'flex', justifyContent: 'center'}}>
          <img src="/banner-stack.png" alt="Dev Stack Banner" style={{width: '100%', maxWidth: '520px'}} />
        </div>

      </div>
    </section>
  );
}