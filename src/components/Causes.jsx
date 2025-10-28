import React from "react";
import { Utensils, Leaf, Users, BookOpen, Heart } from "lucide-react";
import ffl from "../assets/ffl.png"; 
import mdm from "../assets/dmd.png"; 
import cc from "../assets/cow_care.png"; 
import yi from "../assets/youth_impowerment.jpg"; 

const causes = [
  { id: 1, title: "Food Distribution", desc: "Help us serve hot nutritious meals", icon: <Utensils className="w-8 h-8 text-white" />, img: ffl },
  { id: 2, title: "Cow Care", desc: "Support and protect cows", icon: <Leaf className="w-8 h-8 text-white" />, img: cc },
  { id: 3, title: "Anti-Addiction", desc: "Help youth live a better life", icon: <Users className="w-8 h-8 text-white" />, img: "https://..." },
  { id: 4, title: "Youth Empowerment", desc: "Education and skills training", icon: <BookOpen className="w-8 h-8 text-white" />, img: yi },
  { id: 5, title: "Mid-Day Meal", desc: "Nutritious food for children", icon: <Heart className="w-8 h-8 text-white" />, img: mdm },
];

const Causes = () => {
  return (
    <section className="py-16 bg-yellow-50">
      <h2 className="text-3xl font-bold text-center mb-12">Our Causes</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {causes.map((cause) => (
          <div
            key={cause.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
          >
            <img
              src={cause.img}
              alt={cause.title}
              className="w-full h-70 object-cover"
            />
            <div className="p-6 flex-1 flex flex-col">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 flex items-center justify-center mb-4">
                {cause.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{cause.title}</h3>
              <p className="text-gray-600 flex-1">{cause.desc}</p>
            </div>
            <div className="p-6 pt-0">
              <button onClick={() => alert(`Donate to ${cause.title}`)}
               className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white py-3 rounded-full font-semibold shadow-md hover:from-pink-600 hover:to-pink-700 transition-all">
                Donate Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Causes;
