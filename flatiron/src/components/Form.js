import React, { useState } from "react";

function Form({list, setList}) {

  // The useState Hook 

  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState(0);

  // The Hundle Submit Function to be used in onSubmit form 

  const handleSubmit = (e) => {
    e.preventDefault();
    setList([...list, {date, description, category, amount}]);
    setDate("")
    setDescription("")
    setCategory("")
    setAmount(0)

// The POST Request Function 

  fetch("http://localhost:8001/transactions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      date,
      description,
      category,
      amount
    }
    ),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
    
  }


  return (

    <form onSubmit={handleSubmit}  >


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
