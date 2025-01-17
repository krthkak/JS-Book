const books = [
    {
      author: "Harper Lee",
      title: "To Kill a Mockingbird",
      year: 1960
    },
    {
      author: "George Orwell",
      title: "1984",
      year: 1949
    }
  ];

console.log('start');
refreshDisplay();
function Book(author,title,year) {
    // the constructor...
    this.author = author;
    this.title = title;
    this.year = year;
    this.info = function(){
        returm `The book ${this.title} by ${this.autor} was published in the year ${this.year}`;
    }
}

function addBookToLibrary() {
    let author = document.querySelector('#author').value;
    let title = document.querySelector('#title').value;
    let year = document.querySelector('#year').value;
    let book = new Book(author,title,year)
    books.push(book);
    refreshDisplay();
    let form = document.querySelector('#bookForm');
    form.style.display = 'none';
}

function openAddBookModal(){
    let form = document.querySelector('#bookForm');
    form.style.display = 'flex';
    form.classList.add('form-display');
    let body = document.querySelector('body');
}

function refreshDisplay(){
    const container = document.querySelector(".container");

    books.forEach(item => {
        // Create a card element
        const card = document.createElement('div');
        card.className = 'card';
      
        // Populate card content
        card.innerHTML = `
          <h2>Title : ${item.title}</h2>
          <p>author: ${item.author}</p>
          <p>year: ${item.year}</p>
        `;
      
        // Append card to the container
        container.appendChild(card);
      });
}

 