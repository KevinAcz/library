const myLibrary = [];

function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

const theHobbit = new Book('autor', 'titulo', 'paginas', true);
const theHobbit2 = new Book('autor2', 'titulo', 'paginas', true);
myLibrary.push(theHobbit);
myLibrary.push(theHobbit2);

const openModal = document.querySelector('#open-button');

openModal.addEventListener('click', () => {
    modal.showModal()    
});

//TODO: Associate every book to an id
console.log(myLibrary);
const container = document.querySelector('#book-list');
for (const book of myLibrary) {
    console.log(book.author); //inserta contenido de cada instancia del objeto
    let cardContainer = document.createElement('div');
    cardContainer.classList.add('card-container');

    let cardTitle = document.createElement('h1');
    cardContainer.appendChild(cardTitle);

    let cardAuthor = document.createElement('h2');
    cardContainer.appendChild(cardAuthor);

    let cardPages = document.createElement('p');
    cardContainer.appendChild(cardPages);

    let cardRead = document.createElement('p');
    cardContainer.appendChild(cardRead);

    container.appendChild(cardContainer);

    cardTitle.textContent = book.title;
    cardAuthor.textContent = book.author;
    cardPages.textContent = book.pages;
    cardRead.textContent = book.read;
    cardContainer.appendChild(cardTitle);
    cardContainer.appendChild(cardAuthor);
    cardContainer.appendChild(cardPages);
    cardContainer.appendChild(cardRead);
}
function addBookToLibrary() {
    //do stuff here
}