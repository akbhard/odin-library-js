const myLibrary = []
const container = document.querySelector("#display")

class Book {
    constructor(author, title, numberOfPages, read) {
        this.author = author;
        this.title = title;
        this.numberOfPages = numberOfPages;
        this.read = read;
    }

    get bookDescription(){
        return `Title: ${this.title}\nAuthor: ${this.author}\nNumber of Pages: ${this.numberOfPages}\nRead: ${this.read}`
    }

    createBookCard(){
        const bookCard = document.createElement("div")
        bookCard.classList.add("bookCard")
        bookCard.textContent = this.bookDescription

        const deleteButton = document.createElement("button")
        deleteButton.classList.add("deleteButton")
        deleteButton.textContent = 'Delete book'
        deleteButton.addEventListener("click", () => {
            myLibrary.splice(myLibrary.indexOf(this),1);
            bookCard.remove()
            console.log(myLibrary)
        })

        bookCard.appendChild(deleteButton)

        return bookCard
    }

}

function addBookToLibrary(){    

    const newBook = new Book (
        document.getElementById("author").value,
        document.getElementById("booktitle").value,
        document.getElementById("numberofpages").value,
        document.getElementById("read").checked
    )

    container.appendChild(newBook.createBookCard())
    document.forms['book_submission'].reset()

    myLibrary.push(newBook)
}

const btn = document.getElementById("button")
btn.onclick = addBookToLibrary
