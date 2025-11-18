class Book {
    constructor(author, title, numberOfPages, read) {
        this.author = author;
        this.title = title;
        this.numberOfPages = numberOfPages;
        this.read = read;
    }

    // get bookDescription(){
    //     return `Title: ${title}\nAuthor: ${author}\nNumber of Pages: ${numberOfPages}\nRead: ${read}`
    // }

    createBookCard(){
        const bookCard = document.createElement("div")
        bookCard.classList.add("bookCard")
        // bookCard.textContent = this.bookDescription
    }
}

const myLibrary = []
const container = document.querySelector("#display")

function addBookToLibrary(){    
    const newBook = new Book (
        document.getElementById("author").value,
        document.getElementById("booktitle").value,
        document.getElementById("numberofpages").value,
        document.getElementById("read").checked
    )

    container.appendChild(newBook.createBookCard())

    myLibrary.push(newBook)
    document.forms['book_submission'].reset()
    console.log(myLibrary)

}

const btn = document.getElementById("button")
btn.onclick = addBookToLibrary
