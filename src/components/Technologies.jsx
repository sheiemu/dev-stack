import { useState, useEffect } from "react";
import techData from "../data/technologies.json";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      toast.warn('Already in your stack!', { position: 'bottom-right' });
      return;
    }
    setStack([...stack, tech]);
    toast.success(`${tech.name} added to stack!`, { position: 'bottom-right' });
  };

  const removeFromStack = (id) => {
    setStack(stack.filter(t => t.id !== id));
    toast.error('Removed from stack!', { position: 'bottom-right' });
  };

  const removeAll = () => {
    setStack([]);
    toast.error('Stack cleared!', { position: 'bottom-right' });
  };

  if (loading) {
    return <div style={{textAlign: 'center', padding: '60px', fontSize: '18px', color: '#888'}}>Loading technologies...</div>;
  }

  return (
    <section style={{width: '90%', maxWidth: '1200px', margin: '0 auto', padding: '40px 0'}}>

      <h2 style={{fontSize: '32px', fontWeight: '700', marginBottom: '8px', textAlign: 'center'}}>
        Explore the{' '}
        <span style={{
          background: 'linear-gradient(90deg, #ff8c00, #ff1493, #8b00ff)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>Technologies</span>
      </h2>
      <p style={{color: '#888', marginBottom: '32px', textAlign: 'center'}}>
        Pick one technology per category to build your ideal stack.
      </p>

      <div className="tech-layout">

        <div className="tech-grid">
          {technologies.map(tech => {
            const isAdded = stack.some(t => t.id === tech.id);
            return (
              <div key={tech.id} className="tech-card"
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0px)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)';
                }}
                style={{
                  border: isAdded ? '2px solid deeppink' : '1px solid #eee',
                  borderRadius: '12px',
                  padding: '20px',
                  background: 'white',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  willChange: 'transform'
                }}>

                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                  <img src={tech.icon} alt={tech.name} style={{width: '40px', height: '40px'}} />
                  <span style={{
                    background: '#fff0f5',
                    color: 'deeppink',
                    fontSize: '11px',
                    fontWeight: '600',
                    padding: '3px 10px',
                    borderRadius: '20px'
                  }}>{tech.badge}</span>
                </div>

                <h3 style={{fontSize: '16px', fontWeight: '700', margin: 0}}>{tech.name}</h3>

                <p style={{fontSize: '13px', color: '#666', lineHeight: '1.5', margin: 0}}>{tech.description}</p>

                <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap'}}>
                  <span style={{background: '#f3f4f6', color: '#555', fontSize: '11px', padding: '3px 10px', borderRadius: '20px'}}>{tech.category}</span>
                  <span style={{background: '#f3f4f6', color: '#555', fontSize: '11px', padding: '3px 10px', borderRadius: '20px'}}>{tech.difficulty}</span>
                </div>

                <div style={{fontSize: '13px', color: '#666'}}>⭐ {tech.rating}</div>

                <button
                  onClick={() => addToStack(tech)}
                  disabled={isAdded}
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '8px',
                    border: 'none',
                    background: isAdded ? '#fff0f5' : '#111',
                    color: isAdded ? 'deeppink' : 'white',
                    fontSize: '13px',
                    fontWeight: '600',
                    cursor: isAdded ? 'not-allowed' : 'pointer',
                    marginTop: 'auto'
                  }}
                >
                  {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
                </button>
              </div>
            );
          })}
        </div>

        <div className="stack-sidebar" style={{
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
            <p style={{color: '#bbb', fontSize: '13px', textAlign: 'center', padding: '20px 0'}}>
              No technologies added yet.
            </p>
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
      <ToastContainer />
    </section>
  );
}