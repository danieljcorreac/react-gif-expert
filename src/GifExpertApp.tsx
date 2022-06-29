import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

const GifExpertApp = () => {
  
  const [categories, setCategories] = useState<string[]>(['One Punch']);
  
  const onAddCategory = (category: string) => {
    setCategories([category, ...categories.filter(e => e !== category)]);
  }

  return (
    <>
      {/* <h1>{import.meta.env.VITE_APP_TITLE}</h1> */}
      <h1>GifExpertApp</h1>

      <AddCategory 
        onNewCategory={onAddCategory}
      />

      {
        categories.map(category => (
          <GifGrid 
            key={category} 
            category={category}
          />
        ))
      }

    </>
  );
};

export default GifExpertApp;
