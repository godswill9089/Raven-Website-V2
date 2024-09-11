import React from "react";
import "../../../../styles/servicessection/ServicesSection.css";
import { useIcon } from "../../../hooks/useIcon";

const ServicesSection = () => {
  const { icon1, icon2, icon3, icon4, icon5, icon6 } = useIcon();

  const services = [
    {
      image: icon1,
      title: "Finalytics",
      description:
        "How much money do you have tied up in all those accounts you barely use? You won’t have to log in and out of different banking apps. Finalytics makes it all happen right here on the Raven App.",
    },
    {
      image: icon2,
      title: "Virtual & Physical Cards",
      description:
        "Instant access to your funds no matter the balance. More merchants, more coverage with online and mobile payment options available everywhere.",
    },
    {
      image: icon3,
      title: "Loans",
      description:
        "You can request short-term loans and get money in minutes. With less than a 5% default rate, this allows you to build your credit score and use the money however you like.",
    },
    {
      image: icon4,
      title: "Savings",
      description:
        "Tune your savings plan to your desired style and earn up to 15% interest per year on your savings. Feel free to compare our rates to other savings accounts.",
    },
    {
      image: icon5,
      title: "Transfers",
      description:
        "Enjoy free money transfers between Raven users (no limits on number of transfers) and bank accounts; get up to 30 free transfers per month when you send to other banks.",
    },
    {
      image: icon6,
      title: "Business Banking",
      description:
        "Payroll, employee pay slips, superannuation, and more. Raven business banking gives you the tools to streamline your business transactions and provides a wider range of services.",
    },
  ];

  return (
    <section className="services-section">
      <h2 className="services-heading">OUR SERVICES</h2>
      <h1 className="services-main-heading">
        No need to visit your branch.
        <br />
        All services are at your fingertips.
      </h1>
      <p className="services-description">
        We use the Latest High Powered Technology to provide and secure
        Innovative new banking, but in all, <br />
        we stand for Convenience, Affordability, and Reliability.
      </p>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.image} alt="" className="service-icon" />
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
