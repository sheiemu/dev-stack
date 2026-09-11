import { useState, useEffect } from "react";
import techData from "../data/technologies.json";

export default function Technologies() {
  const [technologies, setTechnologies] = useState([]);
  const [stack, setStack] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTechnologies(techData);
    setLoading(false);
  }, []);

  

  const addToStack = (tech) => {
    const already = stack.find(t => t.id === tech.id);
    if (already) {
      alert('Already in your stack!');
      return;
    }
    setStack([...stack, tech]);
  };

  const removeFromStack = (id) => {
    setStack(stack.filter(t => t.id !== id));
  };

  const removeAll = () => {
    setStack([]);
  };

  if (loading) {
    return <div style={{textAlign: 'center', padding: '60px', fontSize: '18px', color: '#888'}}>Loading technologies...</div>;
  }

  return (
    <section style={{width: '90%', maxWidth: '1200px', margin: '0 auto', padding: '40px 0'}}>
    
      
      {/* Section Heading */}
      <h2 style={{fontSize: '32px', fontWeight: '700', marginBottom: '8px'}}>
        Explore the{' '}
        <span style={{
          background: 'linear-gradient(90deg, #ff8c00, #ff1493, #8b00ff)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>Technologies</span>
      </h2>
      <p style={{color: '#888', marginBottom: '32px'}}>Pick one technology per category to build your ideal stack.</p>

      {/* Main Layout */}
      <div style={{display: 'flex', gap: '24px', alignItems: 'flex-start'}}>
        
        {/* Cards Grid */}
        <div style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px'
        }}>
          {technologies.map(tech => (
            <div key={tech.id} style={{
              border: '1px solid #eee',
              borderRadius: '12px',
              padding: '20px',
              background: 'white',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
            }}>
              {/* Badge */}
              <span style={{
                background: '#fff0f5',
                color: 'deeppink',
                fontSize: '11px',
                fontWeight: '600',
                padding: '3px 10px',
                borderRadius: '20px'
              }}>{tech.badge}</span>

              {/* Icon & Name */}
              <div style={{display: 'flex', alignItems: 'center', gap: '10px', margin: '12px 0'}}>
                <img src={tech.icon} alt={tech.name} style={{width: '36px', height: '36px'}} />
                <h3 style={{fontSize: '16px', fontWeight: '700'}}>{tech.name}</h3>
              </div>

              {/* Description */}
              <p style={{fontSize: '13px', color: '#666', lineHeight: '1.5', marginBottom: '12px'}}>{tech.description}</p>

              {/* Category & Difficulty */}
              <div style={{display: 'flex', gap: '8px', marginBottom: '12px', flexWrap: 'wrap'}}>
                <span style={{background: '#f3f4f6', color: '#555', fontSize: '11px', padding: '3px 10px', borderRadius: '20px'}}>{tech.category}</span>
                <span style={{background: '#f3f4f6', color: '#555', fontSize: '11px', padding: '3px 10px', borderRadius: '20px'}}>{tech.difficulty}</span>
              </div>

              {/* Rating */}
              <div style={{fontSize: '13px', color: '#666', marginBottom: '14px'}}>⭐ {tech.rating}</div>

              {/* Add to Stack Button */}
              <button
                onClick={() => addToStack(tech)}
                disabled={stack.find(t => t.id === tech.id)}
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '8px',
                  border: 'none',
                  background: stack.find(t => t.id === tech.id) ? '#e5e7eb' : '#111',
                  color: stack.find(t => t.id === tech.id) ? '#999' : 'white',
                  fontSize: '13px',
                  fontWeight: '600',
                  cursor: stack.find(t => t.id === tech.id) ? 'not-allowed' : 'pointer'
                }}
              >
                {stack.find(t => t.id === tech.id) ? '✓ Added to Stack' : 'Add to Stack'}
              </button>
            </div>
          ))}
        </div>

        {/* Your Stack Sidebar */}
        <div style={{
          width: '260px',
          minWidth: '260px',
          border: '1px solid #eee',
          borderRadius: '12px',
          padding: '20px',
          background: 'white',
          boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
          position: 'sticky',
          top: '80px'
        }}>
          <h3 style={{fontSize: '16px', fontWeight: '700', marginBottom: '4px'}}>Your Stack</h3>
          <p style={{fontSize: '13px', color: '#888', marginBottom: '16px'}}>{stack.length} Technology Selected</p>

          {stack.length === 0 ? (
            <p style={{color: '#bbb', fontSize: '13px', textAlign: 'center', padding: '20px 0'}}>No technologies added yet.</p>
          ) : (
            <>
              {stack.map(tech => (
                <div key={tech.id} style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 0',
                  borderBottom: '1px solid #f3f4f6'
                }}>
                  <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                    <img src={tech.icon} alt={tech.name} style={{width: '28px', height: '28px'}} />
                    <div>
                      <p style={{fontSize: '13px', fontWeight: '600', margin: 0}}>{tech.name}</p>
                      <p style={{fontSize: '11px', color: '#888', margin: 0}}>{tech.category}</p>
                    </div>
                  </div>
                  <button onClick={() => removeFromStack(tech.id)} style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: '#999',
                    fontSize: '16px'
                  }}>✕</button>
                </div>
              ))}

              <button onClick={removeAll} style={{
                width: '100%',
                marginTop: '16px',
                padding: '10px',
                borderRadius: '8px',
                border: 'none',
                background: '#fff0f5',
                color: 'deeppink',
                fontSize: '13px',
                fontWeight: '600',
                cursor: 'pointer'
              }}>Remove All</button>
            </>
          )}
        </div>

      </div>
    </section>
  );
}