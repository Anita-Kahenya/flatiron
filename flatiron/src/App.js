
import React, { useState, } from 'react';
import './App.css';
import Header from './components/Header'; 
import Form from './components/Form';
import Table from './components/Table';

function App() {

  const [list, setList] = useState([]);

  // useEffect(() => {
  //   fetch('http://localhost:8001/transactions')
  //   .then(res => res.json())
  //   .then(data => setList(data))
  // }, [])


  return (
    <div className="App ">
   <Header />
   <Form list={list} setList={setList}/>
   <Table list={list} />
    </div>
  );
}

export default App;
