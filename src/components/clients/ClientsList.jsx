import React from "react";

const ClientsList = () => {
  // Define client data with inline SVG logos instead of image paths
  const clients = [
    {
      id: 1,
      name: "Leverage Edu",
      category: "Education",
      website: "https://leverageedu.com/",
      logoColor: "#3367D6", // Blue
    },
    {
      id: 2,
      name: "Alt Campus",
      category: "Education",
      website: "https://altcampus.io/",
      logoColor: "#FF5733", // Orange
    },
    {
      id: 3,
      name: "LPU",
      category: "Education",
      website: "https://www.lpu.in/",
      logoColor: "#4CAF50", // Green
    },
    {
      id: 4,
      name: "Scaler",
      category: "Education",
      website: "https://www.scaler.com/",
      logoColor: "#9C27B0", // Purple
    },
    {
      id: 5,
      name: "Byjus",
      category: "Education",
      website: "https://byjus.com/",
      logoColor: "#2196F3", // Light Blue
    },
    {
      id: 6,
      name: "Vedantu",
      category: "Education",
      website: "https://www.vedantu.com/",
      logoColor: "#E91E63", // Pink
    },
    {
      id: 7,
      name: "Paytm",
      category: "Finance",
      website: "https://paytm.com/",
      logoColor: "#00BCD4", // Cyan
    },
    {
      id: 8,
      name: "PhonePe",
      category: "Finance",
      website: "https://www.phonepe.com/",
      logoColor: "#673AB7", // Deep Purple
    },
    {
      id: 9,
      name: "RazorPay",
      category: "Finance",
      website: "https://razorpay.com/",
      logoColor: "#3F51B5", // Indigo
    },
    {
      id: 10,
      name: "Groww",
      category: "Finance",
      website: "https://groww.in/",
      logoColor: "#009688", // Teal
    },
    {
      id: 11,
      name: "Swiggy",
      category: "Food Delivery",
      website: "https://www.swiggy.com/",
      logoColor: "#FF9800", // Orange
    },
    {
      id: 12,
      name: "Zomato",
      category: "Food Delivery",
      website: "https://www.zomato.com/",
      logoColor: "#F44336", // Red
    },
  ];

  // Function to generate SVG logo based on company name and color
  const generateLogo = (name, color) => {
    // Extract initials from company name
    const initials = name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);

    // Create a lighter shade of the main color for background
    const lighterColor = color;

    // Generate a random pattern ID to ensure uniqueness
    const patternId = `pattern-${Math.random().toString(36).substring(2, 10)}`;

    return (
      <svg
        width="160"
        height="100"
        viewBox="0 0 160 100"
        xmlns="http://www.w3.org/2000/svg"
        style={{ maxWidth: "100%", height: "auto" }}
      >
        {/* Define a pattern for the background */}
        <defs>
          <pattern
            id={patternId}
            patternUnits="userSpaceOnUse"
            width="20"
            height="20"
            patternTransform="rotate(45)"
          >
            <rect
              width="20"
              height="20"
              fill={lighterColor}
              fillOpacity="0.05"
            />
            <circle cx="10" cy="10" r="2" fill={color} fillOpacity="0.1" />
          </pattern>
        </defs>

        {/* Background with pattern */}
        <rect width="160" height="100" rx="10" fill={`url(#${patternId})`} />

        {/* Logo outline */}
        <rect x="30" y="15" width="100" height="70" rx="8" fill="white" />

        {/* Colored rectangle behind text */}
        <rect
          x="35"
          y="20"
          width="90"
          height="60"
          rx="5"
          fill={color}
          fillOpacity="0.1"
        />

        {/* Circle with Initials */}
        <circle cx="80" cy="45" r="25" fill={color} />
        <text
          x="80"
          y="45"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="24"
          fontWeight="bold"
          fill="white"
          letterSpacing="1"
        >
          {initials}
        </text>

        {/* Company Name */}
        <text
          x="80"
          y="85"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="12"
          fontWeight="bold"
          fill={color}
        >
          {name}
        </text>

        {/* Decorative elements */}
        <circle cx="35" cy="20" r="2" fill={color} />
        <circle cx="125" cy="20" r="2" fill={color} />
        <circle cx="35" cy="80" r="2" fill={color} />
        <circle cx="125" cy="80" r="2" fill={color} />
      </svg>
    );
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
    <div className="client-list-area default-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="site-heading text-center">
              <h5 className="sub-title">Trusted By Industry Leaders</h5>
              <h2 className="title">Companies That Trust Us</h2>
              <p className="mt-4">
                We're proud to have earned the trust of these industry-leading
                companies. Our partnerships enable us to deliver exceptional
                digital solutions across various sectors.
              </p>
            </div>
          </div>
        </div>

        {Object.entries(groupedClients).map(([category, categoryClients]) => (
          <div className="client-category-section mt-5" key={category}>
            <h3 className="category-title">{category}</h3>
            <div className="row clients-row">
              {categoryClients.map((client) => (
                <div
                  className="col-lg-3 col-md-4 col-sm-6 mb-4"
                  key={client.id}
                >
                  <a
                    href={client.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="client-item-link"
                  >
                    <div className="client-item">
                      <div className="client-logo">
                        {generateLogo(client.name, client.logoColor)}
                      </div>
                      <h4 className="client-name">{client.name}</h4>
                      <div className="client-website">Visit Website</div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="row mt-5">
          <div className="col-lg-10 offset-lg-1">
            <div className="client-testimonial-highlight text-center">
              <h3>What Our Clients Say</h3>
              <p className="mt-4">
                "Working with this team has been transformative for our
                business. Their technical expertise, combined with their deep
                understanding of our needs, delivered solutions that exceeded
                our expectations. They're truly partners in our success."
              </p>
              <div className="mt-3">
                <strong>Rahul Verma</strong> — Senior Team Lead, Leverage Edu
              </div>
              <div className="mt-4">
                <a href="/contact" className="btn btn-light animation">
                  Become Our Client <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsList;
