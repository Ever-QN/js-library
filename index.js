let myLibrary = [];

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

// const theHobbit = new Book("The Hobbbit", "J.R.R Tolkien", "295 pages", "not read");
// console.log(theHobbit.info());