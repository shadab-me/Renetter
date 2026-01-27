import React from "react";

const ClientsList = () => {
  // Client Data
  const clients = [
    { id: 1, name: "Leverage Edu", category: "Education", website: "https://leverageedu.com/" },
    { id: 2, name: "Alt Campus", category: "Education", website: "https://altcampus.io/" },
    { id: 3, name: "LPU", category: "Education", website: "https://www.lpu.in/" },
    { id: 4, name: "Scaler", category: "Education", website: "https://www.scaler.com/" },
    { id: 5, name: "Byjus", category: "Education", website: "https://byjus.com/" },
    { id: 6, name: "Vedantu", category: "Education", website: "https://www.vedantu.com/" },
    { id: 7, name: "Paytm", category: "Finance", website: "https://paytm.com/" },
    { id: 8, name: "PhonePe", category: "Finance", website: "https://www.phonepe.com/" },
    { id: 9, name: "RazorPay", category: "Finance", website: "https://razorpay.com/" },
    { id: 10, name: "Groww", category: "Finance", website: "https://groww.in/" },
    { id: 11, name: "Swiggy", category: "Food Delivery", website: "https://www.swiggy.com/" },
    { id: 12, name: "Zomato", category: "Food Delivery", website: "https://www.zomato.com/" },
  ];

  // Render Real Logos as Inline SVGs
  const renderClientLogo = (name) => {
    switch (name) {
      case "Paytm":
        return (
          <svg width="100" height="32" viewBox="0 0 100 32" fill="none" xmlns="http://www.w3.org/2000/svg">
             <text x="50" y="20" dominantBaseline="middle" textAnchor="middle" fontFamily="sans-serif" fontWeight="bold" fontSize="22">
               <tspan fill="#002E6E">Pay</tspan><tspan fill="#00BAF2">tm</tspan>
             </text>
          </svg>
        );
      case "Zomato":
        return (
          <svg width="100" height="32" viewBox="0 0 100 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="50" y="20" dominantBaseline="middle" textAnchor="middle" fontFamily="Georgia, serif" fontWeight="900" fontStyle="italic" fontSize="24" fill="#E23744" letterSpacing="-1px">zomato</text>
          </svg>
        );
      case "Swiggy":
         return (
          <svg width="100" height="32" viewBox="0 0 100 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="50" y="20" dominantBaseline="middle" textAnchor="middle" fontFamily="sans-serif" fontWeight="bold" fontSize="22" fill="#FC8019" letterSpacing="-0.5px">SWIGGY</text>
          </svg>
        );
      case "PhonePe":
        return (
          <svg width="100" height="32" viewBox="0 0 100 32" fill="none" xmlns="http://www.w3.org/2000/svg">
             <rect x="5" y="0" width="90" height="32" rx="4" fill="#5F259F" />
             <text x="50" y="22" dominantBaseline="middle" textAnchor="middle" fontFamily="sans-serif" fontWeight="bold" fontSize="18" fill="white">PhonePe</text>
          </svg>
        );
      case "Leverage Edu":
        return (
           <svg width="120" height="32" viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg">
             <text x="60" y="22" dominantBaseline="middle" textAnchor="middle" fontFamily="sans-serif" fontWeight="bold" fontSize="18"><tspan fill="#2F54EB">Leverage</tspan> <tspan fill="#000000">Edu</tspan></text>
           </svg>
        );
      case "Alt Campus":
        return (
          <svg width="120" height="32" viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="60" y="22" dominantBaseline="middle" textAnchor="middle" fontFamily="monospace" fontWeight="bold" fontSize="18" fill="#FF5733">&lt;AltCampus/&gt;</text>
          </svg>
        );
      case "LPU":
        return (
          <svg width="80" height="32" viewBox="0 0 80 32" fill="none" xmlns="http://www.w3.org/2000/svg">
             <rect x="0" y="0" width="80" height="32" rx="0" fill="#F58220" />
             <text x="40" y="22" dominantBaseline="middle" textAnchor="middle" fontFamily="serif" fontWeight="bold" fontSize="18" fill="white">LPU</text>
          </svg>
        );
      case "Scaler":
        return (
          <svg width="100" height="32" viewBox="0 0 100 32" fill="none" xmlns="http://www.w3.org/2000/svg">
             <text x="50" y="22" dominantBaseline="middle" textAnchor="middle" fontFamily="sans-serif" fontWeight="bold" fontSize="20" fill="#335eea">SCALER</text>
          </svg>
        );
      case "Byjus":
        return (
          <svg width="100" height="32" viewBox="0 0 100 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="50" y="22" dominantBaseline="middle" textAnchor="middle" fontFamily="sans-serif" fontWeight="bold" fontSize="20" fill="#8E44AD">BYJU'S</text>
          </svg>
        );
      case "Vedantu":
        return (
          <svg width="100" height="32" viewBox="0 0 100 32" fill="none" xmlns="http://www.w3.org/2000/svg">
             <text x="50" y="22" dominantBaseline="middle" textAnchor="middle" fontFamily="sans-serif" fontWeight="bold" fontSize="20" fill="#EAB543">Vedantu</text>
          </svg>
        );
       case "RazorPay":
        return (
          <svg width="110" height="32" viewBox="0 0 110 32" fill="none" xmlns="http://www.w3.org/2000/svg">
             <rect x="0" y="0" width="110" height="32" rx="4" fill="#3395ff" />
             <text x="55" y="22" dominantBaseline="middle" textAnchor="middle" fontFamily="sans-serif" fontWeight="bold" fontSize="16" fill="white">Razorpay</text>
          </svg>
        );
        case "Groww":
        return (
          <svg width="100" height="32" viewBox="0 0 100 32" fill="none" xmlns="http://www.w3.org/2000/svg">
             <text x="50" y="22" dominantBaseline="middle" textAnchor="middle" fontFamily="sans-serif" fontWeight="bold" fontSize="20" fill="#00D09C">Groww</text>
          </svg>
        );
      default:
        return <span style={{fontSize: '18px', fontWeight: 'bold'}}>{name}</span>; 
    }
  };

  // Group clients by category
  const groupedClients = clients.reduce((acc, client) => {
    if (!acc[client.category]) {
      acc[client.category] = [];
    }
    acc[client.category].push(client);
    return acc;
  }, {});

  return (
    <div className="client-list-area" style={{ background: '#ffffff', padding: '80px 0' }}>
      <div className="renetter-container">
        
        {Object.entries(groupedClients).map(([category, categoryClients]) => (
          <div key={category} style={{ marginBottom: '80px' }}>
            <h3 style={{ 
              fontSize: '1.5rem', 
              color: '#000', 
              marginBottom: '30px', 
              borderBottom: '2px solid #f3f4f6', 
              paddingBottom: '10px',
              display: 'inline-block'
            }}>
              {category}
            </h3>
            <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' }}>
              {categoryClients.map((client) => (
                <a 
                  key={client.id}
                  href={client.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none' }}
                >
                  <div 
                    className="premium-card" 
                    style={{ 
                      padding: '30px', 
                      background: '#f9fafb', 
                      borderColor: '#e5e7eb',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '100%',
                      minHeight: '120px',
                      boxShadow: 'none'
                    }}
                    onMouseEnter={e => {e.currentTarget.style.background = '#fff'; e.currentTarget.style.borderColor = '#3b82f6'; e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.05)'}}
                    onMouseLeave={e => {e.currentTarget.style.background = '#f9fafb'; e.currentTarget.style.borderColor = '#e5e7eb'; e.currentTarget.style.boxShadow = 'none'}}
                  >
                    <div style={{ transform: 'scale(1.1)' }}>
                      {renderClientLogo(client.name)}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default ClientsList;
