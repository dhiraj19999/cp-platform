import React from "react";
import nonfiction from '../nonfiction.json'
import BookCard from "./BookCard";
export default function NonFiction() {
  console.log(nonfiction);
  return (
    <div data-testid='books-nonfiction'>
      <h1 data-testid='books-container-title'>{'Non-Fiction Books'}</h1>

      <div className="books-container">
        {/* Display all Non-Fiction books here */}
        {nonfiction.map((item)=>{
          return <div>
          <BookCard
         title={item.title}
          src={item.img}
          alt={item.title}
           author={item.author}
           price={item.price}
           year={item.year}
         />
           </div>
          

        })}
      </div>
    </div>
  );
}
