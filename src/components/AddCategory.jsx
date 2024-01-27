import { useState } from "react";

export const AddCategory = ({ onAddCaregories }) => {
  const [inputValue, setInputValue] = useState("Minecraft");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = ( event ) => {
    event.preventDefault();
    if(inputValue.trim().length < 1) return;
    onAddCaregories(inputValue.trim());
    // onAddCaregories( categories => [inputValue, ...categories])
    setInputValue('');
    
  };

  return (
    <form onSubmit = { onSubmit }>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={(event) => {
          onInputChange(event);
        }}
      />
    </form>
  );
};
