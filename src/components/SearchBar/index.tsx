import React from 'react';

const SearchBar: React.FC = () => {
  return (
    <div className="container mx-auto mt-4 px-8 pb-4">
      <input
        className="w-full rounded-lg px-4 py-2"
        placeholder="O que você está buscando?"
      />
    </div>
  );
};

export default SearchBar;
