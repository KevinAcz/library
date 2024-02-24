const myLibrary = [];
//TODO:
//ADD BUTTON TO DELETE CARD (USE ID TO IDENTIFY IT)
//
function Book(id, author, title, pages, read) {

    this.id = id;
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;

}

const submit = document.querySelector('#submit');
submit.addEventListener('click', () => {
    modal.close();
})

    
let id = 1;
function submitForm(event) {

    event.preventDefault();

    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('#read').checked;

    
    let newBook = new Book(id, author, title, pages, read);
    myLibrary.push(newBook);

    let container = document.querySelector('#book-list');

    let cardContainer = document.createElement('div');
    cardContainer.classList.add('card-container');

    let cardId = document.createElement('h1');
    cardContainer.appendChild(cardId);
    let cardTitle = document.createElement('h1');
    cardContainer.appendChild(cardTitle);

    let cardAuthor = document.createElement('h2');
    cardContainer.appendChild(cardAuthor);

    let cardPages = document.createElement('p');
    cardContainer.appendChild(cardPages);

    let cardRead = document.createElement('p');
    cardContainer.appendChild(cardRead);

    container.appendChild(cardContainer);

    cardId.textContent = id;
    id += 1;
    cardTitle.textContent = title;
    cardAuthor.textContent = author;
    cardPages.textContent = pages;
    cardRead.textContent = read;
    cardContainer.appendChild(cardTitle);
    cardContainer.appendChild(cardAuthor);
    cardContainer.appendChild(cardPages);
    cardContainer.appendChild(cardRead);
    console.log(myLibrary)
}

const openModal = document.querySelector('#open-button');

openModal.addEventListener('click', () => {
    modal.showModal()    
});

let container = document.querySelector('#book-list');


// LOOP IN EVERY INSTANCE OF THE OBJECT
// for (const book of myLibrary) {
//     console.log(book.author); //inserta contenido de cada instancia del objeto
//     let cardContainer = document.createElement('div');
//     cardContainer.classList.add('card-container');

//     let cardTitle = document.createElement('h1');
//     cardContainer.appendChild(cardTitle);

//     let cardAuthor = document.createElement('h2');
//     cardContainer.appendChild(cardAuthor);

//     let cardPages = document.createElement('p');
//     cardContainer.appendChild(cardPages);

//     let cardRead = document.createElement('p');
//     cardContainer.appendChild(cardRead);

//     container.appendChild(cardContainer);

//     cardTitle.textContent = book.title;
//     cardAuthor.textContent = book.author;
//     cardPages.textContent = book.pages;
//     cardRead.textContent = book.read;
//     cardContainer.appendChild(cardTitle);
//     cardContainer.appendChild(cardAuthor);
//     cardContainer.appendChild(cardPages);
//     cardContainer.appendChild(cardRead);
// }

//TODO: Associate every book to an id
// console.log(myLibrary);

function addBookToLibrary() {
    //do stuff here
}