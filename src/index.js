import React from "react";
import ReactDom from "react-dom";

// CSS
import './index.css'

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image></Image>
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://images-eu.ssl-images-amazon.com/images/I/71aFt4%2BOTOL._AC_UL200_SR200,200_.jpg"
    alt=""
  />
);

const Title = () => <h1>The Alchemist</h1>;
const Author = () => <h4>Paulo Coelho (Author)</h4>;

ReactDom.render(<BookList />, document.getElementById("root"));
