import React from 'react';

function Search({handleSearch}) {

    // function handleSearch(e) {
    //     let searchBar = e.target.value.toLowerCase();
    //     setList(list.filter(item => item.description.toLowerCase().includes(searchBar)))

    // }
   
    return (
        <div>
        <input onChange={handleSearch} className="search input-group mb-3 mx-auto" type="text" name="name" placeholder="Search your recent Transaction"/>
        </div>
    )
}

export default Search;