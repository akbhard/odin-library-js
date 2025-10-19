// I need a library that will store all my books. This will store the books as objects, not as their entire form.
// It will be an array that I will push all books that are created into the library (array).

const myLibrary = []


// Now I need a way to create a book. The method of creating a book will be using constructors.
// The book constructor will have to take in: author, title, number of pages, whether it’s been read.

function Book(author, title, numberOfPages, read) {
    this.uuid = crypto.randomUUID();
    this.author = author;
    this.title = title;
    this.numberOfPages = numberOfPages;
    this.read = read
}

// Now I need a function to take a newly created book and add it to my library.

function addBookToLibrary () {
    let author = document.getElementById("author").value
    let title = document.getElementById("booktitle").value
    let numberOfPages = document.getElementById("numberofpages").value
    let read = document.getElementById("read").checked

    const newBook = new Book (author, title, numberOfPages, read)

    function createDiv() {
    const container = document.querySelector("#display")

    const bookCard = document.createElement("div")
    bookCard.classList.add("bookCard")
    bookCard.textContent = 
        `Title: ${title}\nAuthor: ${author}\nNumber of Pages: ${numberOfPages}\nRead: ${read}`

    container.appendChild(bookCard)
}

    myLibrary.push(newBook)
    console.log(myLibrary)
    createDiv()
    document.forms['book_submission'].reset()
}


const btn = document.getElementById("button")
btn.onclick = addBookToLibrary

// I now need a function that will take all the books in my library and display them in the HTML file.
// Will most likely need to create a loop that takes the length of the array, iterate through each one.
// For each index, it will create a page/display in the HTML. So will need to create a div in a table?




