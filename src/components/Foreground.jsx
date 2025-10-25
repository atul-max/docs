import React, { useState, useRef } from "react";
import Card from "./card";

function Foreground() {
  const ref = useRef(null);
  const [cards, setCards] = useState([
    {
      id: 1,
      desc: "Getting Started with Documentation",
      filesize: "1.2mb",
      close: false,
      tag: { isOpen: true, text: "Quick Start", tagColor: "blue" },
      createdAt: "2025-10-25",
      category: "guides",
      icon: "📚",
    },
    {
      id: 2,
      desc: "API Reference Documentation",
      filesize: "2.8mb",
      close: true,
      tag: { isOpen: true, text: "Reference", tagColor: "purple" },
      createdAt: "2025-10-24",
      category: "api",
      icon: "🔧",
    },
    {
      id: 3,
      desc: "Best Practices & Examples",
      filesize: "1.5mb",
      close: true,
      tag: { isOpen: true, text: "Examples", tagColor: "green" },
      createdAt: "2025-10-23",
      category: "examples",
      icon: "💡",
    },
    {
      id: 4,
      desc: "Security Guidelines & Updates",
      filesize: "0.9mb",
      close: true,
      tag: { isOpen: true, text: "Security", tagColor: "red" },
      createdAt: "2025-10-22",
      category: "security",
      icon: "🔒",
    },
  ]);

  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Filter cards based on category and search term
  const filteredCards = cards.filter((card) => {
    const matchesFilter = filter === "all" || card.category === filter;
    const matchesSearch = card.desc
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // Handle card removal
  const handleRemoveCard = (id) => {
    setCards((prevCards) => prevCards.filter((card) => card.id !== id));
  };

  // Handle card tag click
  const handleTagClick = (id) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id
          ? { ...card, tag: { ...card.tag, isOpen: !card.tag.isOpen } }
          : card
      )
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-zinc-900 to-black relative">
      {/* Fixed Background Text */}
      <div className="fixed inset-0 flex items-center justify-center z-[1] pointer-events-none opacity-10">
        <h1 className="text-[20vw] font-bold text-white whitespace-nowrap select-none">
          DOCS HUB
        </h1>
      </div>

      <div className="sticky top-0 z-[4] w-full py-6 bg-gradient-to-b from-black via-black/95 to-transparent">
        <div className="container mx-auto px-4 max-w-7xl relative z-[2]">
          <h1 className="text-4xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              Documentation Hub
            </span>
          </h1>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-3xl mx-auto">
            <div className="relative flex-grow max-w-2xl w-full">
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-zinc-800/50 border border-zinc-700/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-gray-200 placeholder-gray-500 transition-all hover:bg-zinc-800/70"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <svg
                className="absolute left-3 top-3.5 h-5 w-5 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>

            <select
              className="w-full sm:w-48 px-4 py-3 rounded-xl bg-zinc-800/50 border border-zinc-700/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-gray-200 cursor-pointer transition-all hover:bg-zinc-800/70"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              style={{
                WebkitAppearance: "none",
                MozAppearance: "none",
                backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%239CA3AF' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 1rem center",
                backgroundSize: "1em",
              }}
            >
              <option value="all" style={{ backgroundColor: "#18181B" }}>
                All Documentation
              </option>
              <option value="guides" style={{ backgroundColor: "#18181B" }}>
                Quick Start Guides
              </option>
              <option value="api" style={{ backgroundColor: "#18181B" }}>
                API Reference
              </option>
              <option value="examples" style={{ backgroundColor: "#18181B" }}>
                Examples
              </option>
              <option value="security" style={{ backgroundColor: "#18181B" }}>
                Security
              </option>
            </select>
          </div>
        </div>
      </div>

      <div className="relative z-[2]">
        <div
          ref={ref}
          className="container mx-auto px-4 py-8 flex gap-8 flex-wrap justify-center items-start"
        >
          {filteredCards.map((item) => (
            <Card
              key={item.id}
              data={item}
              reference={ref}
              onRemove={() => handleRemoveCard(item.id)}
              onTagClick={() => handleTagClick(item.id)}
            />
          ))}
          {filteredCards.length === 0 && (
            <div className="w-full text-center text-gray-400 mt-20 font-medium">
              No documentation found matching your criteria
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Foreground;