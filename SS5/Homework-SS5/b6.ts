class Book {
    private title: string;
    private author: string;

    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
    }

    public getInfo(): string {
        return `Title: ${this.title}, Author: ${this.author}`;
    }
}

class Library {
    private books: Book[] = [];

    public addBook(book: Book): void {
        this.books.push(book);
    }

    public showBooks(): void {
        if (this.books.length === 0) {
            console.log("Thư viện chưa có sách nào.");
            return;
        }
        console.log("Danh sách sách trong thư viện:");
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. ${book.getInfo()}`);
        });
    }
}

let book1 = new Book("Dế Mèn Phiêu Lưu Ký", "Tô Hoài");
let book2 = new Book("Harry Potter", "J.K. Rowling");
let book3 = new Book("The Hobbit", "J.R.R. Tolkien");
let book4 = new Book("Sherlock Holmes", "Arthur Conan Doyle");
let book5 = new Book("Lão Hạc", "Nam Cao");

let myLibrary = new Library();

myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);
myLibrary.addBook(book4);
myLibrary.addBook(book5);

myLibrary.showBooks();
