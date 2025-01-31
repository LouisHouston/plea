import { useState } from "react";

const CustomDropdown = () => {
  const [category, setCategory] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { value: "", label: "Select a category" },
    { value: "food", label: "Food/Drink" },
    { value: "clothing", label: "Handmade Goods" },
    { value: "services", label: "Services" },
  ];

  return (
    <div className="dropdown" onBlur={() => setIsOpen(false)} tabIndex={0}>
      <div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
        {options.find((option) => option.value === category)?.label || "Select a category"}
        <span className="dropdown-arrow">▼</span>
      </div>
      {isOpen && (
        <ul className="dropdown-list">
          {options.map((option) => (
            <li
              key={option.value}
              className="dropdown-item"
              onClick={() => {
                setCategory(option.value);
                setIsOpen(false);
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;