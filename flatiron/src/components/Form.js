import React, { useState } from "react";

function Form({list, setList}) {

  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setList([...list, {date, description, category, amount}]);
    setDate("")
    setDescription("")
    setCategory("")
    setAmount(0)


  // fetch("http://localhost:8001/transactions", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     date,
  //     description,
  //     category,
  //     amount
  //   }
  //   ),
  // })
  //   .then((res) => res.json())
  //   .then((data) => console.log(data));
    
  }



function handleSearch(e) {
  let searchBar = e.target.value.toLowerCase();
  setList(list.filter(item => item.description.toLowerCase().includes(searchBar)))
 

}




  return (

    <form onSubmit={handleSubmit}  >

      <input onKeyUp={handleSearch} className="search input-group mb-3 mx-auto" type="text" name="name" placeholder="Search your recent Transaction"/>

      <div className="details border border-success p-2 border-opacity-10">

     
        <input onChange={(e) => setDate(e.target.value)} type="date" className="input-group-text"value={date}/>
        <input onChange={(e) => setDescription(e.target.value)} type="text" className="input-group-text" value={description} placeholder="description" />
        <input onChange={(e) => setCategory(e.target.value)} type="text" className="input-group-text" value={category} placeholder="entertainment" />
        <input onChange={(e) => setAmount(e.target.value)} type="number" className="input-group-text" value={amount} placeholder="amount" />

        </div>
        <button className="bttn btn  btn-secondary btn-lg mx-auto"  type="submit">Add Transaction</button>
      

      
    </form>
  );
}

export default Form;
