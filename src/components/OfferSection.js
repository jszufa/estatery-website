import Card from "./Card";
import { useState } from "react";
import "./OfferSection.css";
import CardCarousel from "./CardCarousel";

function OfferSection() {
  const [activeTab, setActiveTab] = useState("houses");

  const housesData = [
    {
      image: `${process.env.PUBLIC_URL}/images/house-1.jpeg`,
      title: "Palm Harbor",
      price: "$3,440",
      address: "2699 Green Valley, Highland Lake, FL",
    },
    {
      image: `${process.env.PUBLIC_URL}/images/house-2.jpeg`,
      title: "St. Crystal",
      price: "$6,550",
      address: "210 US Highway, Highland Lake, FL",
    },
    {
      image: `${process.env.PUBLIC_URL}/images/house-3.jpeg`,
      title: "Faulkner Ave",
      price: "$4,950",
      address: "909 Woodland St, Michigan, IN",
    },
  ];

  const apartmentsData = [
    {
      image: `${process.env.PUBLIC_URL}/images/appartments-1.jpeg`,
      title: "Tarpon Bay",
      price: "$2,140",
      address: "103 Lake Shores, Michigan, IN",
    },
    {
      image: `${process.env.PUBLIC_URL}/images/appartments-2.jpeg`,
      title: "Cove Red",
      price: "$1,440",
      address: "243 Curlew Road, Palm Harbor, TX",
    },
    {
      image: `${process.env.PUBLIC_URL}/images/appartments-3.jpeg`,
      title: "Beverley Springfield",
      price: "$3,850",
      address: "2821 Lake Sevilla, Palm Harbor, TX",
    },
  ];

  return (
    <section className="offer-section">
      <header>
        <div className="tab-buttons">
          <button
            className={`tab-button ${activeTab === "houses" ? "active" : ""}`}
            onClick={() => setActiveTab("houses")}
          >
            Houses
          </button>
          <button
            className={`tab-button ${
              activeTab === "apartments" ? "active" : ""
            }`}
            onClick={() => setActiveTab("apartments")}
          >
            Apartments
          </button>
        </div>
        <h2>We make it easy for houses and apartments.</h2>
        <p>
          Whether it’s selling your current home, getting financing, or buying a
          new home, we make it easy and efficient. The best part? you’ll save a
          bunch of money and time with our services.
        </p>
      </header>

      <div className="tab-content">
        {activeTab === "houses" && <CardCarousel cardsData={housesData} />}
        {activeTab === "apartments" && (
          <CardCarousel cardsData={apartmentsData} />
        )}
      </div>
    </section>
  );
}

export default OfferSection;
