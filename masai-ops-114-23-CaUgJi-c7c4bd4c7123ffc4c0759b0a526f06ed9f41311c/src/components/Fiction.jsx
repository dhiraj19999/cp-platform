import BookCard from './BookCard';
import fiction from '../fiction.json'
export default function Fiction() {
  return (
    <div data-testid='books-fiction'>
      <h1 data-testid='books-container-title'>{'Fictional Books'}</h1>

      <div className="books-container">
        {/* Map all Fictional Books here */}
        {fiction.map((item)=>{
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
