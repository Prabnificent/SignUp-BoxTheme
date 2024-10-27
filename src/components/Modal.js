import React, { useEffect, useState } from "react";
import "./Modal.css";

const Modal = ({ box, closeModal, onEnter }) => {
  const [inputValue, setInputValue] = useState(box);
  console.log(inputValue);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [closeModal]);

  const handleInputKeyDown = (event) => {
    if (event.key === "Enter") {
      onEnter(inputValue);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleInputKeyDown}
        />
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
