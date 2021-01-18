import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toysList, setToysList] = useState([]);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }


  useEffect(() => {
    fetch(`http://localhost:3001/toys`)
    .then(response => response.json())
    .then(data => {
      setToysList(data);
    })
  },[])

  // console.log(toysList)

function submitToy(formData){
  // console.log(formData)
  fetch(`http://localhost:3001/toys`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
      body: JSON.stringify(formData),
    })
  .then(response => response.json())
  .then(data => {
    setToysList([...toysList, data])
    handleClick();
  })
}

function handleDelete(id){
  fetch(`http://localhost:3001/toys/${id}`, {
    method: 'DELETE'})
  .then(response => response.json())
  .then(data => {
    const updatedToysList = toysList.filter((toy) => toy.id !== id)
    setToysList(updatedToysList)
  })
}

function handleLike(id, newLikes){
  fetch(`http://localhost:3001/toys/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
      body: JSON.stringify({likes: newLikes}),
    })
  .then(response => response.json())
  .then(updatedToy => {

    const updatedToysList = toysList.map((toy)=> toy.id ===id ? updatedToy:toy )
    setToysList(updatedToysList)
  })



}



  return (
    <>
      <Header />
      {showForm ? <ToyForm submitToy={submitToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer 
        toysList={toysList} 
        handleDelete={handleDelete}
        handleLike={handleLike}
      />
    </>
  );
}

export default App;
