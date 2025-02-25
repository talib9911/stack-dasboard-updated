import { useState, useRef, useEffect } from "react";
import downarrow from "../../Assets/Images/downarrow1.svg";

const CustomDropdown = ({ options, selected, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} style={{ position: "relative", width: "140px" }}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderRadius: "4px",
          height: "36px",
          border: "1px solid rgba(213, 213, 213, 1)",
          padding: "10px",
          background: "rgba(252, 253, 253, 1)",
          cursor: "pointer",
          position: "relative",
          zIndex: 10,
        }}
      >
        <span style={{ fontSize: "12px", color: "rgba(43, 48, 52, 0.8)" }}>
          {selected}
        </span>

        <img
          src={downarrow}
          style={{
            width: "12px",
            height: "12px",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "0.3s",
          }}
        />
      </div>

      {isOpen && (
        <ul
          style={{
            position: "absolute",
            top: "40px",
            left: "0",
            width: "100%",
            background: "#fff",
            border: "1px solid rgba(213, 213, 213, 1)",
            borderRadius: "4px",
            zIndex: 100,
          }}
        >
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => {
                onSelect(option);
                setIsOpen(false);
              }}
              style={{ padding: "8px", cursor: "pointer" }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Dropdown = ({ selected, onSelect }) => {
  return <CustomDropdown options={["October", "November", "December"]} selected={selected} onSelect={onSelect} />;
};

export default Dropdown;
