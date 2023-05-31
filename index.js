let myLibrary = [
    { title: "book1", author: "author1", pages: "100", read: "not read"},
    { title: "book2", author: "author2", pages: "75", read: "not read"},
    { title: "book3", author: "author3", pages: "50", read: "read"},
    { title: "book4", author: "author4", pages: "25", read: "not read"}
];

function Book(title, author, pages, read) {
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.read = read
  this.info = function() {
    return this.title + " by " + this.author + ", " + this.pages + ", " + this.read;
  }
}

const bookForm = document.getElementById("bookForm");
const formContainer = document.getElementById("formContainer");
bookForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let titleInput = document.getElementById("titleInput").value;
    let authorInput = document.getElementById("authorInput").value;
    let pagesInput = document.getElementById("pagesInput").value;
    let readInput = document.getElementById("readInput").value;

    let bookInput = {
        title: titleInput,
        author: authorInput,
        pages: pagesInput,
        read: readInput
    };

    myLibrary.push(bookInput);
    console.log(myLibrary);
    updateLibrary();

    bookForm.reset();
    formContainer.style.display="none";
})

function addBookToLibrary() {
    formContainer.style.display="block";
}

const tableBody = document.querySelector("#libraryTable")

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
        toggleButton.textContent = book.read ? "read" : "not read";
        book.toggleReadStatus = function () {
            this.read = this.read === "not read" ? "read" : "not read";
        }
        toggleButton.addEventListener("click", function() {
            book.toggleReadStatus();
            updateLibrary();
        })
        toggleCell.appendChild(toggleButton);
        row.appendChild(titleCell);
        row.appendChild(authorCell);
        row.appendChild(pagesCell);
        row.appendChild(readCell);
        row.appendChild(removeCell);
        row.appendChild(toggleCell);
        tableBody.appendChild(row);
    })
}

function removeBook(event) {
    let index = event.target.getAttribute("data-index");
    myLibrary.splice(index, 1);
    updateLibrary();
}

updateLibrary();

// const theHobbit = new Book("The Hobbbit", "J.R.R Tolkien", "295 pages", "not read");
// console.log(theHobbit.info());