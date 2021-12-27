import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";

// Global Vars
const books = [
  {
    id: 1,
    img: "https://images-eu.ssl-images-amazon.com/images/I/71aFt4%2BOTOL._AC_UL200_SR200,200_.jpg",
    title: "The Alchemist",
    author: "Paulo Coelho",
  },
  {
    id: 2,
    img: "https://images-eu.ssl-images-amazon.com/images/I/41%2BgrDTP2FL._AC_UL200_SR200,200_.jpg",
    title: "DO EPIC SHIT",
    author: "Ankur Warikoo",
  },
  {
    id: 3,
    img: "https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL200_SR200,200_.jpg",
    title: "Ikigai",
    author: "Héctor García",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

const Book = ({ img, title, author }) => {
  // attribute, eventHandler
  // onClick, onMouseOver
  const clickHandler = () => {
    alert("Clicked!");
  };
  const comExample = (author) => {
    alert(author);
  };

  return (
    <article className="book">
      <img src={img} alt="" />
      <h1 onClick={clickHandler}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        example
      </button>
      <button type="button" onClick={() => comExample(author)}>
        Complex Example
      </button>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
