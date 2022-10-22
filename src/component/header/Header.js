import React from 'react';
import '../header/header.scss'

function header({handleSearch, search, setSearch, handleReset}) {


  return (
    <div className='header'>
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} /> 
        <button onClick={handleSearch}>Search</button>
        <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default header