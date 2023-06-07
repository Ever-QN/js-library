class Book {
constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

info() {
    return `${this.title} by ${this.author}, ${this.pages}, ${this.read}`;
}

toggleReadStatus() {
    this.read = this.read === "not read" ? "read" : "not read";
}
}

function addBookToLibrary() {
    formContainer.style.display="block";
}

let myLibrary = [
new Book("book1", "author1", "100", "not read"),
new Book("book2", "author2", "75", "not read"),
new Book("book3", "author3", "50", "read"),
new Book("book4", "author4", "25", "not read")
];

const bookForm = document.getElementById("bookForm");
const formContainer = document.getElementById("formContainer");
bookForm.addEventListener("submit", function(event) {
event.preventDefault();

const titleInput = document.getElementById("titleInput").value;
const authorInput = document.getElementById("authorInput").value;
const pagesInput = document.getElementById("pagesInput").value;
const readInput = document.getElementById("readInput").value;

const bookInput = new Book(titleInput, authorInput, pagesInput, readInput);
myLibrary.push(bookInput);

updateLibrary();
bookForm.reset();
formContainer.style.display = "none";
});

const tableBody = document.querySelector("#libraryTable");

function updateLibrary() {
while (tableBody.rows.length > 1) {
    tableBody.deleteRow(1);
}

myLibrary.forEach(function(book, index) {
    const row = document.createElement("tr");
    const titleCell = document.createElement("td");
    const authorCell = document.createElement("td");
    const pagesCell = document.createElement("td");
    const readCell = document.createElement("td");
    const removeCell = document.createElement("td");
    const removeButton = document.createElement("button");
    const toggleCell = document.createElement("td");
    const toggleButton = document.createElement("button");

    titleCell.textContent = book.title;
    authorCell.textContent = book.author;
    pagesCell.textContent = book.pages;
    readCell.textContent = book.read;

    removeButton.textContent = "Remove";
    removeButton.setAttribute("data-index", index);
    removeButton.addEventListener("click", removeBook);
    removeCell.appendChild(removeButton);

    toggleButton.textContent = book.read === "not read" ? "Read" : "Not Read";
    toggleButton.addEventListener("click", function() {
    book.toggleReadStatus();
    updateLibrary();
    });
    toggleCell.appendChild(toggleButton);

    row.appendChild(titleCell);
    row.appendChild(authorCell);
    row.appendChild(pagesCell);
    row.appendChild(readCell);
    row.appendChild(removeCell);
    row.appendChild(toggleCell);

    tableBody.appendChild(row);
});
}

function removeBook(event) {
const index = event.target.getAttribute("data-index");
myLibrary.splice(index, 1);
updateLibrary();
}

updateLibrary();