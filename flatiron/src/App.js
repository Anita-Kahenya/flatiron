
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header'; 
import Form from './components/Form';
import Table from './components/Table';
import Search from './components/Search';

function App() {

  const [list, setList] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('http://localhost:8001/transactions?q=' + search)
    .then(res => res.json())
    .then(data => setList(data))
  }, [search])

  function handleSearch(e) {

    setSearch(e.target.value);
  }


  return (
    <div className="App ">
   <Header />
   <Search  handleSearch={handleSearch} />
   <Form list={list} setList={setList}/>
   <Table list={list} />
    </div>
  );
}

export default App;
