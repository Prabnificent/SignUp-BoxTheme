import React, { useState } from "react";
import "./Box.css";
import Modal from "./Modal";
import { useTheme } from "../ThemeContext";

function Box({ viewType }) {
  const { isDarkMode } = useTheme();
  const [boxes, setBoxes] = useState(["Box 1", "Box 2", "Box 3"]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentBoxIndex, setCurrentBoxIndex] = useState(null);

  const openModal = (index) => {
    setCurrentBoxIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleEnter = (newLabel) => {
    setBoxes((prevBoxes) =>
      prevBoxes.map((label, idx) =>
        idx === currentBoxIndex ? newLabel : label
      )
    );
    closeModal();
  };

  const handleLabelChange = (newLabel) => {
    setBoxes((prevBoxes) =>
      prevBoxes.map((label, idx) =>
        idx === currentBoxIndex ? newLabel : label
      )
    );
    closeModal();
  };

  return (
    <div className={`box-container ${viewType}`}>
      {boxes.map((label, index) => (
        <div
          key={index}
          className={`box ${isDarkMode ? "dark-mode" : ""}`}
          onClick={() => openModal(index)}
        >
          <span className="box-label">{label}</span>
        </div>
      ))}
      {isModalOpen && (
        <Modal
          closeModal={closeModal}
          handleLabelChange={handleLabelChange}
          currentLabel={boxes[currentBoxIndex]}
          onEnter={handleEnter}
        />
      )}
    </div>
  );
}

export default Box;
