import React from 'react';
import '../header/header.scss'

function header({data, setData, search, setSearch, searchData, setSearchData}) {

  const handleSearch = () => {
    if (search.length !== 0) {
      const found = data.filter((info) => info.firstName.includes(search));
      setSearchData(found);
      if (found.length === 0) {
        window.alert("NOT FOUND");
      }
    }
    if (search.length === 0) {
      window.alert("NOT FOUND");
    }
  };
  return (
    <div className='header'>
        <input type="text" /> 
        <button onClick={handleSearch}>Search</button>
        <button>Reset</button>
    </div>
  )
}

export default header