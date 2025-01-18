let index = 0

const books = [
    {
        id:++index,
      author: "Harper Lee",
      title: "To Kill a Mockingbird",
      year: 1960,
      read:false
    },
    {
        id:++index,
      author: "George Orwell",
      title: "1984",
      year: 1949,
      read:true
    }
  ];

console.log('start');
refreshDisplay(books);
function Book(author,title,year,read) {
    // the constructor...
    this.id = ++index,
    this.author = author;
    this.title = title;
    this.year = year;
    this.read = read;
    this.info = function(){
        return `The book ${this.title} by ${this.autor} was published in the year ${this.year}`;
    }
}

function addBookToLibrary() {
    let author = document.querySelector('#author').value;
    let title = document.querySelector('#title').value;
    let year = document.querySelector('#year').value;
    let read = document.querySelector('#read').checked;
    let book = new Book(author,title,year,read)
    books.push(book);
    refreshDisplay([book]);
    let overlay = document.querySelector('#overlay');
    overlay.classList.toggle('active');
}

function openAddBookModal(){
    let form = document.querySelector('#bookForm');
    form.style.display = 'flex';
    form.classList.add('form-display');
    let overlay = document.querySelector('#overlay');
    overlay.classList.toggle('active');
}

function refreshDisplay(books){
    const container = document.querySelector(".container");

    books.forEach(item => {
        // Create a card element
        const card = document.createElement('div');
        card.className = 'card';
        card.setAttribute('data-id',item.id);
        const button = document.createElement('button');
        button.innerText = "Remove Book"
        button.setAttribute('type','button');
        button.setAttribute('data-id',item.id);

        button.addEventListener('click',function(event){
            removeBook(event.target.dataset.id)
        })

        const readCheckbox = document.createElement('input');
        readCheckbox.setAttribute('type','checkbox');
        readCheckbox.setAttribute('data-id',item.id);
        readCheckbox.checked = item.read;

        readCheckbox.addEventListener('click',function(event){
            updateReadStatus(event.target.dataset.id);
        })


      
        // Populate card content
        card.innerHTML = `
          <h2>Title : ${item.title}</h2>
          <p>author: ${item.author}</p>
          <p>year: ${item.year}</p>
          Read : 
        `;

        card.appendChild(readCheckbox);
        card.appendChild(button);
      
        // Append card to the container
        container.appendChild(card);
      });
}

function removeBook(id){
    let index = books.findIndex(item=>(item.id==id));
    books.splice(index,1);
    removeChild(id);
}

function removeChild(id){
    const container = document.querySelector(".container");
    let childToRemove = '';
    for(item of container.children){
        if(item.dataset.id == id){
            childToRemove = item;
            break
        } 
    }
    if(childToRemove)
        container.removeChild(childToRemove);

}

function updateReadStatus(id){
    for(item of books){
        if(item.id == id){
            item.read = !item.read;
            break
        } 
    }
}

 