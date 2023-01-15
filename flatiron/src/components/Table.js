import React from 'react';

function Table({list}) {

  function handleDelete(e) {
    e.preventDefault();
    const remove = e.target
    remove.parentElement.parentElement.remove()

    fetch("http://localhost:8001/transactions", {
      method: "DELETE",
      headers: {}
    })
  }
  
   


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
  {
  list.map(item => (
    <tr key={item.id}>
      <td>{item.date}</td>
      <td>{item.description}</td>
      <td>{item.category}</td>
      <td>{item.amount}</td>
      <td>
      <button onClick={handleDelete} className="btn btn-primary">Delete</button>

      </td>

    </tr>
    ))
  }
   
  </tbody>
</table>
    )
}

export default Table;