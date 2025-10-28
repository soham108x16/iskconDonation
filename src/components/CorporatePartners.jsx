import React from "react";

const partners = [
  { name: "Microsoft", logo: "https://img.shields.io/badge/Microsoft-0078D4?style=for-the-badge&logo=microsoft&logoColor=white" },
  { name: "JSW", logo: "https://via.placeholder.com/120x60/1E40AF/white?text=JSW" },
  { name: "Skoda", logo: "https://via.placeholder.com/120x60/4ADE80/white?text=SKODA" },
  { name: "SBI", logo: "https://via.placeholder.com/120x60/2563EB/white?text=SBI" },
];

const CorporatePartners = () => {
  return (
    <section className="bg-gray-50 py-12 text-center">
      <h2 className="text-2xl font-bold mb-6">Our Corporate Partners</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {partners.map((p, i) => (
          <img key={i} src={p.logo} alt={p.name} className="h-14 object-contain" />
        ))}
      </div>
    </section>
  );
};

export default CorporatePartners;
