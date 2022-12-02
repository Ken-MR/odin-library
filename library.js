let myLibrary = [];
let unreadBooks = 0;
let readBooks = 0;
let bookTotal = 0;

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;

    this.info = function() {
        let read;
        if (readStatus === "Read") {
            read = "has been read";
        }
        else {
            read = "has not been read";
        }
        return `${title} is a book by ${author}. It is ${pages} long and ${read}`
    };

}

function addBookToLibrary() {
    myLibrary.push(new Book(`${title.value}`, `${author.value}`, pages.value, `${readStatus.value}`));
    console.log(myLibrary);

    let table = document.getElementById('list');
    let row = table.insertRow(table.length);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);

    cell1.innerHTML = `${title.value}`;
    cell2.innerHTML = `${author.value}`;
    cell3.innerHTML = `${pages.value}`;
    cell4.innerHTML = `<button>${readStatus.value}</button>`;
    cell5.innerHTML = `<button>Delete</button>`;

    cell3.setAttribute('style', 'text-align: center');
    cell4.setAttribute('style', 'text-align: center');
    cell5.setAttribute('style', 'text-align: center');

}

/*myLibrary.push(new Book('The Lord of the Rings', 'J R R Tolkien', 1008, 'Read'));
myLibrary.push(new Book('A Game of Thrones', 'George R R Martin', 807, 'Read'));
myLibrary.push(new Book('Leviathan Wakes', 'James S A Corey', 561, 'Read'));*/

console.log(myLibrary);
