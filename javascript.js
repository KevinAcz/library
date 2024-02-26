const myLibrary = [];
//TODO:
//ADD BUTTON TO DELETE CARD (USE ID TO IDENTIFY IT)
//
function Book( author, title, pages, read) {

    // this.id = id;
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;

}

const submit = document.querySelector('#submit');
submit.addEventListener('click', () => {
    modal.close();
})

    
// let id = 1;
function submitForm(event) {

    event.preventDefault();

    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('#read').checked;

    let newBook = new Book(author, title, pages, read);
    myLibrary.push(newBook);
    showCards();

    console.log(myLibrary);
}

//cuando se aprete el boton deleteButton, segun el dataset que tenga
//elimina el indice del array en myLibrary y actualiza showCards()

const openModal = document.querySelector('#open-button');

openModal.addEventListener('click', () => {
    modal.showModal()    
});


let i = 0;
let container = document.querySelector('#book-list');

//LOOP IN EVERY INSTANCE OF THE OBJECT
function showCards() {
    container.innerHTML = '';
    for (const book of myLibrary) {
    
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

        let deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        deleteButton.dataset.id = i;

        cardContainer.appendChild(deleteButton);
        

        container.appendChild(cardContainer);

        cardTitle.textContent = book.title;
        cardAuthor.textContent = book.author;
        cardPages.textContent = book.pages;
        cardRead.textContent = book.read;
        deleteButton.textContent = 'Delete';

        deleteButton.addEventListener('click', () => {
            console.log(deleteButton.dataset.id)
        })
    }
    i += 1;
}

// function deleteBook(idToDelete) {
//     myLibrary.splice(idToDelete, 1);
// }

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