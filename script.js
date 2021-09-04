let myLibrary = [book1];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function displayBook(myLibrary) {
  //displays books in card format
}

function addBookToLibrary() {
  // do stuff here
}

const book1 = new Book(
  "The Hobbit",
  "J.R.R. Tolkien",
  "295",
  "not already read"
);
