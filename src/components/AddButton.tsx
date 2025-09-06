import React, { useState } from 'react';
import '../styles/AddButton.css';

interface AddButtonProps {
  onAdd: (title: string) => void;
}

const AddButton: React.FC<AddButtonProps> = ({ onAdd }) => {
  const [inputValue, setInputValue] = useState('');

  const handleClick = () => {
    const trimmed = inputValue.trim();
    if (trimmed) {
      onAdd(trimmed);
      setInputValue('');
    }
  };

  return (
    <div className="add-button-wrapper">
      <input
        type="text"
        className="add-input"
        value={inputValue}
        placeholder="Введите название"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        className="add-button"
        type="button"
        onClick={handleClick}
      >
        ДОБАВИТЬ
      </button>
    </div>
  );
};

export default AddButton;
