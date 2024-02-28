const myLibrary = [];
//TODO:
//CHANGE ITS READ STATUS ACCORDING TO ITS ID"
//
function Book( author, title, pages, read) {

    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;

}

const submit = document.querySelector('#submit');
submit.addEventListener('click', () => {
    modal.close();
})

    
let i = 0;
function submitForm(event) {

    event.preventDefault();

    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('#read').checked;

    let newBook = new Book(author, title, pages, read);
    myLibrary.push(newBook);
    showCards();
    i += 1;

    console.log(myLibrary);
}

//cuando se aprete el boton deleteButton, segun el dataset que tenga
//elimina el indice del array en myLibrary y actualiza showCards()

const openModal = document.querySelector('#open-button');

openModal.addEventListener('click', () => {
    modal.showModal()    
});

let container = document.querySelector('#book-list');

//LOOP IN EVERY INSTANCE OF THE OBJECT
function showCards() {
    container.innerHTML = '';
    myLibrary.forEach((book, index) => {
    
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

        let buttonsContainer = document.createElement('div');
        buttonsContainer.classList.add('buttons-container');
        cardContainer.appendChild(buttonsContainer);

        let deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        deleteButton.dataset.id = index; // Use the index as the ID

        buttonsContainer.appendChild(deleteButton);

        let readButton = document.createElement('button');
        readButton.classList.add('read-button');
        buttonsContainer.appendChild(readButton);
        
        container.appendChild(cardContainer);

        cardTitle.textContent = book.title;
        cardAuthor.textContent = book.author;
        cardPages.textContent = book.pages+ ' pages';
        if (book.read) {
            cardRead.textContent = 'Already read'
        } else {
            cardRead.textContent = 'Not read yet'
        }
        deleteButton.textContent = 'Delete';
        readButton.textContent = 'Read status'

        deleteButton.addEventListener('click', () => {
            myLibrary.splice(index, 1);
            showCards();
        })
        readButton.addEventListener('click', () => {
            myLibrary[index].read = !(myLibrary[index].read);
            showCards();
        })
    });
}



// const deleteButtons = document.querySelectorAll('.delete-button');

// function getId() {
// deleteButtons.forEach(button => {

//     button.addEventListener('click', () => {
//         console.log(button.dataset.id);
//     });

// });
// }


//TODO: Associate every book to an id
console.log(myLibrary);