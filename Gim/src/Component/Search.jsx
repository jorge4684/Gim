import  { useState } from 'react';
import { CiSearch } from "react-icons/ci";

const SearchComponent = () => {
  // Estado para almacenar el texto de búsqueda
  const [searchTerm, setSearchTerm] = useState('');
  
  // Datos de ejemplo para buscar
  const data = [
/*     'React',
    'JavaScript',
    'TypeScript',
    'Node.js',
    'GraphQL',
    'CSS',
    'HTML' */
  ];

  // Función para manejar el cambio en el campo de búsqueda
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filtrar los datos basados en el texto de búsqueda
  const filteredData = data.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className=''>
      <input
        type="text"
        placeholder="Buscar..."
        value={searchTerm}
        onChange={handleSearchChange}
         className='hidden sm:flex rounded-lg w-96 h-8 font-semibold text-zinc-950 relative'
         
      />
      <CiSearch className='hidden sm:flex absolute top-8 ml-[350px] text-red-600'/>
      <ul>
        {filteredData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchComponent;
