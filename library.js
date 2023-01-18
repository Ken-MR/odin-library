/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
let myLibrary = [];
let unreadBooks = 0;
let readBooks = 0;
let bookTotal = 0;

class Book {
    constructor ({title, author, pages, readStatus}) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.readStatus = readStatus;
        this.id = myLibrary.length;
    }

    info () {
        let read;
        if (this.readStatus === "Read") {
            read = "has been read";
        }
        else {
            read = "has not been read";
        }
        return `${this.title} is a book by ${this.author}. It is ${this.pages} long and ${read}`
    }

}

function addBookToLibrary() {
    myLibrary.push(new Book({title: `${title.value}`, author: `${author.value}`, pages: `${pages.value}`, readStatus: `${readStatus.value}`}));

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
    cell4.innerHTML = `<button onclick=toggleStatus(this)>${readStatus.value}</button>`;
    cell5.innerHTML = `<button onclick=deleteBookFromLibrary(this)>Delete</button>`;
    
    cell1.classList.add('cell1');
    cell2.classList.add('cell2');
    cell3.classList.add('cell3');
    cell4.classList.add('cell4');
    cell5.classList.add('cell5');

    let child4 = cell4.children[0];
    child4.classList.add(`${readStatus.value}`);

    let child5 = cell5.children[0];
    child5.classList.add('Unread');

    tracking(readStatus.value);
}

function deleteBookFromLibrary(id) {
    let index = id.parentNode.parentNode.rowIndex;
    let readStatus = myLibrary[index - 1].readStatus;
    tracking(readStatus, true);

    let table = id.parentNode.parentNode.parentNode;
    let row = id.parentNode.parentNode.rowIndex;
    table.deleteRow(row);

    myLibrary.splice(row-1, 1);
    myLibrary.forEach(e => e.id = myLibrary.indexOf(e));
}

function deleteLibrary () {
    let table = document.getElementById('list');
    let rowCount = table.rows.length;
    for (let i = rowCount-1; i > 0; i--) {
        table.deleteRow(i);
    }
    myLibrary = [];

    unreadBooks = 0;
    readBooks = 0;
    bookTotal = 0;

    updateTracking();
    return;
}

function toggleStatus (id) {
    let index = id.parentNode.parentNode.rowIndex;
    let readStatus = myLibrary[index - 1].readStatus;
    console.log(index);
    if (readStatus === 'Read') {
        myLibrary[index - 1].readStatus = 'Unread';
        id.innerHTML = 'Unread';
        unreadBooks++;
        readBooks--;
        id.classList.remove('Read');
        id.classList.add('Unread');
    }
    else {
        myLibrary[index - 1].readStatus = 'Read';
        id.innerHTML = 'Read';
        unreadBooks--;
        readBooks++;
        id.classList.remove('Unread')
        id.classList.add('Read');
    }
    updateTracking();
}

function tracking (status, erase = undefined) {
    if (erase) {
        if (status === 'Read') {
            readBooks--;
            bookTotal--;
        }
        else {
            unreadBooks--;
            bookTotal--;
        }
    }
    else {
        if (status === 'Read') {
            readBooks++;
            bookTotal++;
        }
        else {
            unreadBooks++;
            bookTotal++;
        }
    }
    updateTracking();
    return;
}

function updateTracking () {
    let read = document.getElementById('booksRead');
    let unread = document.getElementById('booksUnread');
    let total = document.getElementById('booksTotal');
    read.innerHTML = `Books Read: ${readBooks}`;
    unread.innerHTML = `Books Unread: ${unreadBooks}`;
    total.innerHTML = `Books Total: ${bookTotal}`;
    return;
}