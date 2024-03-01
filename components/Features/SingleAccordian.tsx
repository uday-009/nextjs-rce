"use client";
import React, { useState } from "react";

type AccordionItemProps = {
  item: {
    id: number;
    title: string;
    content: string[];
  };
};

const AccordionItem: React.FC<AccordionItemProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordion-item ${isOpen ? "open" : ""} w-full`} key={item.id}>
      <div
        className="accordion-header  hover:bg-primary hover:bg-opacity-80 hover:text-white dark:hover:bg-primary dark:hover:bg-opacity-80 dark:hover:text-white"
        onClick={handleToggle}
      >
        <h2 className="accordion-title">{item.title}</h2>
        <div className={`accordion-icon ${isOpen ? "open" : ""}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </div>
      {isOpen && (
        <div className="accordion-content bg-gray-light dark:bg-opacity-10 text-left py-8 px-4">
            {item.content.map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
