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

function addBookToLibrary() {
  // do stuff here
}


const tableBody = document.querySelector("#libraryTable")

myLibrary.forEach(book => {
    const row = document.createElement("tr");
    const titleCell = document.createElement("td");
    const authorCell = document.createElement("td");
    const pagesCell = document.createElement("td");
    const readCell = document.createElement("td");
    titleCell.textContent = book.title;
    authorCell.textContent = book.author;
    pagesCell.textContent = book.pages;
    readCell.textContent = book.read;
    row.appendChild(titleCell);
    row.appendChild(authorCell);
    row.appendChild(pagesCell);
    row.appendChild(readCell);
    tableBody.appendChild(row);
})

// const theHobbit = new Book("The Hobbbit", "J.R.R Tolkien", "295 pages", "not read");
// console.log(theHobbit.info());