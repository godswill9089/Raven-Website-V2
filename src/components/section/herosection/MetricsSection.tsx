import React from "react";
import "../../../styles/herosection/HeroSection.css";
import { useIcon } from "../../hooks/useIcon";

const MetricsSection: React.FC = () => {
  const { users, guard, strike } = useIcon();

  const metrics = [
    {
      id: 1,
      icon: users,
      count: "400K+",
      label: "CUSTOMERS",
      textColor: "#0B8376",
    },
    {
      id: 2,
      icon: guard,
      count: "200+",
      label: "BUSINESSES",
      textColor: "#755AE2",
    },
    {
      id: 3,
      icon: strike,
      count: "100K+",
      label: "TRANSACTIONS",
      textColor: "#EA872D",
    },
  ];

  return (
    <div className="metrics-section">
      <div className="metrics-title">
        <h2>Mindblowing</h2>
        <h2>Metrics</h2>
      </div>
      <div className="metrics-cards">
        {metrics.map((metric) => (
          <div key={metric.id} className="metric-card">
            <div className="icon-container">
              <img src={metric.icon} alt={`${metric.label} icon`} />
            </div>
            <div className="metric-info">
              <h3>{metric.count}</h3>
              <p style={{ color: metric.textColor }}>{metric.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MetricsSection;
