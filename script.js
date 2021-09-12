const addBtn = document.querySelector(".btn");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const book1 = new Book(
  "The Hobbit",
  "J.R.R. Tolkien",
  "295",
  "not already read"
);

let myLibrary = [book1];

displayBook();

function displayBook() {
  const display = document.getElementsByClassName("grid-container");
  const books = document.querySelectorAll(".book");
  //books.forEach((book) => displayBook.removeChild(book));

  for (let i = 0; i < myLibrary.length; i++) {
    addBookToLibrary(myLibrary[i]);
  }
}

function addBookToLibrary(item) {
  const library = document.querySelector(".grid-container");
  const bookDiv = document.createElement("section");
  const titleDiv = document.createElement("section");
  const authorDiv = document.createElement("div");
  const pagesDiv = document.createElement("div");
  const readDiv = document.createElement("div");

  bookDiv.classList.add("book", myLibrary.indexOf(item));

  titleDiv.textContent = item.title;
  titleDiv.classList.add("title");
  bookDiv.appendChild(titleDiv);

  authorDiv.textContent = item.author;
  authorDiv.classList.add("author");
  bookDiv.appendChild(authorDiv);

  pagesDiv.textContent = item.pages;
  pagesDiv.classList.add("pages");
  bookDiv.appendChild(pagesDiv);

  readDiv.textContent = item.read;
  readDiv.classList.add("read");
  bookDiv.appendChild(readDiv);

  library.appendChild(bookDiv);
}

function newBook() {}

//ddBtn.addEventListener("click", addBookToLibrary);
