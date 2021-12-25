import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";

// Global Vars
const books = [
  {
    img: "https://images-eu.ssl-images-amazon.com/images/I/71aFt4%2BOTOL._AC_UL200_SR200,200_.jpg",
    title: "The Alchemist",
    author: "Paulo Coelho",
  },
  {
    img: "https://images-eu.ssl-images-amazon.com/images/I/41%2BgrDTP2FL._AC_UL200_SR200,200_.jpg",
    title: "DO EPIC SHIT",
    author: "Ankur Warikoo",
  },
];

const names = ["john", "peter", "susan"];
const newName = names.map((name) => {
  return <h1>{name}</h1>
});
console.log(newName);

function BookList() {
  return <section className="booklist">{newName}</section>;
}

const Book = (props) => {
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
