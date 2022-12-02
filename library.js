let myLibrary = [];
let unreadBooks = 0;
let readBooks = 0;
let bookTotal = 0;

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;

    this.info = function() {
        let read;
        if (status === "Read") {
            read = "has been read";
        }
        else {
            read = "has not been read";
        }
        return `${title} is a book by ${author}. It is ${pages} long and ${read}`
    };

}

myLibrary.push(new Book('The Lord of the Rings', 'J R R Tolkien', 1008, 'Read'));
myLibrary.push(new Book('A Game of Thrones', 'George R R Martin', 807, 'Read'));
myLibrary.push(new Book('Leviathan Wakes', 'James S A Corey', 561, 'Read'));

console.log(myLibrary);