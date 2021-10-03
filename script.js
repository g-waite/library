const addBtn = document.querySelector(".add-book-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const rmButton = document.querySelector(".remove-btn");
const form = document.forms[0];
document.getElementById("overlay").style.display = "none";

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const book1 = new Book("The Hobbit", "J.R.R. Tolkien", "295", "false");
const book2 = new Book("Mistborn", "Brandon Sanderson", "390", "true");

let myLibrary = [book1, book2];

displayBook();

//shows grid of books
function displayBook() {
  const display = document.getElementById("grid-container");
  console.log(display);
  const books = document.querySelectorAll(".book");
  books.forEach((book) => display.removeChild(book));

  for (let i = 0; i < myLibrary.length; i++) {
    addBookToLibrary(myLibrary[i]);
  }
}

//creates new book cards to display
function addBookToLibrary(item) {
  const library = document.querySelector(".grid-container");
  const bookDiv = document.createElement("section");
  const titleDiv = document.createElement("section");
  const authorDiv = document.createElement("div");
  const pagesDiv = document.createElement("div");
  const readDiv = document.createElement("div");
  const rmButton = document.createElement("button");
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

  rmButton.textContent = "Remove";
  rmButton.classList.add("remove-button");
  bookDiv.appendChild(rmButton);

  library.appendChild(bookDiv);
}
//Adds a new book via the form and inserts it into the library.
function newBook() {
  document.getElementById("overlay").style.display = "block";

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(this);

    let title = formData.get("title");
    let author = formData.get("author");
    let pages = formData.get("pages");
    let read = formData.get("read") == "true" ? "true" : "false";

    const book = new Book(title, author, pages, read);

    myLibrary.push(book);

    displayBook();

    console.log(myLibrary);
  });
}

function rmBook() {}

//closes the form window
function cancelForm() {
  document.getElementById("overlay").style.display = "none";
}

addBtn.addEventListener("click", newBook);
cancelBtn.addEventListener("click", cancelForm);
rmButton.addEventListener("click", rmBook);
