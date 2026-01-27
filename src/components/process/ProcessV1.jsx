import React from "react";

const ProcessV1 = ({ processClass }) => {
  const processSteps = [
    {
      id: 1,
      number: "01",
      title: "Discovery",
      description: "We dive deep into your requirements, understanding your business goals, target audience, and technical needs to define a clear roadmap."
    },
    {
      id: 2,
      number: "02",
      title: "Strategy",
      description: "We create a comprehensive technical strategy and architectural blueprint that ensures scalability, security, and performance."
    },
    {
      id: 3,
      number: "03",
      title: "Development",
      description: "Our expert team builds your solution using agile methodologies, ensuring rapid delivery, code quality, and continuous feedback loops."
    },
    {
      id: 4,
      number: "04",
      title: "Launch",
      description: "We deploy your solution with a seamless transition plan and provide ongoing support to ensure everything runs perfectly."
    }
  ];

  return (
    <div className={`process-area ${processClass}`} style={{ padding: '40px 0' }}>
      <div className="container">
        {/* Header removed as it's often redundant in Services page context, or we can make it optional. 
            For now, I'll keep the grid straightforward so the parent component controls the section title if needed.
            If used standalone, it serves as the process list.
        */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '30px' }}>
          {processSteps.map((step) => (
            <div 
              key={step.id} 
              className="premium-card"
              style={{ 
                padding: '40px 30px', 
                background: '#fff', 
                borderRadius: '24px', 
                border: '1px solid #e5e7eb',
                position: 'relative',
                overflow: 'hidden',
                zIndex: 1,
                boxShadow: 'none',
                minHeight: '300px', // Uniform height
                display: 'flex',
                flexDirection: 'column'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.borderColor = '#3b82f6';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.05)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#e5e7eb';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Large Number Background */}
              <div style={{ 
                fontSize: '6rem', 
                fontWeight: '900', 
                color: '#f3f4f6', 
                position: 'absolute', 
                top: '-20px', 
                right: '-10px', 
                zIndex: -1,
                fontFamily: 'Inter, sans-serif'
              }}>
                {step.number}
              </div>

              <div style={{ 
                width: '60px', 
                height: '60px', 
                background: 'rgba(59, 130, 246, 0.1)', 
                borderRadius: '16px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: '#3b82f6',
                fontWeight: 'bold',
                fontSize: '1.25rem',
                marginBottom: '24px'
              }}>
                {step.number}
              </div>

              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: '700', 
                marginBottom: '16px', 
                color: '#111827',
                fontFamily: 'Inter, sans-serif'
              }}>
                {step.title}
              </h3>
              
              <p style={{ 
                color: '#6b7280', 
                lineHeight: '1.6', 
                fontSize: '1rem',
                flexGrow: 1
              }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessV1;
