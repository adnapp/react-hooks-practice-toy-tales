import React from "react";

function ToyCard({toy, handleDelete, handleLike}) {
const {id, name, image, likes} = toy

  function onDelete(){
    handleDelete(id)
  }

  function onLike(e){
    const newLikes = likes+1
    console.log("id", id)
    console.log("likes",newLikes)
    handleLike(parseInt(id), newLikes)
  }



  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button onClick={onLike} className="like-btn">Like {"<3"}</button>
      <button onClick={onDelete} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
