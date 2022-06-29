import { useState } from 'react'

interface Props {
  onNewCategory: (category: string) => void;
}

const AddCategory = ({ onNewCategory }: Props) => {

  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(target.value);
  }

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const value = inputValue.trim();

    if (value.length <= 1) return;
    
    onNewCategory(value);
    setInputValue('');
  }

  return (
    <form onSubmit={onSubmit} aria-label="form">
      <input 
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  )
}

export default AddCategory