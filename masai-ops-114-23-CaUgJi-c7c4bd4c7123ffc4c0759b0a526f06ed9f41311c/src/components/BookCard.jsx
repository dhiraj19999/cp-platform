export default function BookCard({title,src,alt,author,price,year}) {
  return (
    <div data-testid='book-card'>
        <img src={src} alt={alt} />
        <b><div data-testid='book-card-title'>{title}<span>({year})</span></div></b>
        <div data-testid='book-card-author'>{author}</div>
        <div data-testid='book-card-price'>{price}</div>
    </div>
  )
}

