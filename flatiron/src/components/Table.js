import React from 'react';

function Table({list}) {

  // The Handle Delete Function to be used to delete Items in the Table 

  function handleDelete(id) {
   
// The delete Fetch Function to delete Items in the Table  

    fetch(`http://localhost:8001/transactions/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then(response => response.json())
    .then(data => document.location.reload())
  }

  const sortedList = list.sort((a, b) => (a.description > b.description ? 1 : -1))
  
   


    return (
        <table className="table table-striped table-hover">
  <thead>
    <tr>
      <th scope="col">Date</th>
      <th scope="col">Description</th>
      <th scope="col">Category</th>
      <th scope="col">Amount</th>
      <th scope="col">Delete</th>

    </tr>
  </thead>
  <tbody>

    {/* Maping Items in the Table  */}
  {
   

   sortedList.map(item => (
    <tr key={item.id}>
      <td>{item.date}</td>
      <td>{item.description}</td>
      <td>{item.category}</td>
      <td>{item.amount}</td>
      <td>
      <button onClick={ ()=> handleDelete(item.id)} className="btn btn-primary">Delete</button>
      </td>

    </tr>
    ))
  }
   
  </tbody>
</table>
    )
}

export default Table;