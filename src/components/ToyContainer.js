import React from "react";
import ToyCard from "./ToyCard";



function ToyContainer({toysList, handleDelete, handleLike}) {


  // console.log(toysList)
  const toyList = toysList.map((toy) => {
    return <ToyCard 
      key = {toy.id}
      toy = {toy}
      handleDelete={handleDelete}
      handleLike={handleLike}
    />
  })



  return (
    <div id="toy-collection">{toyList}</div>
  );
}

export default ToyContainer;
