class Book {
    private title: string;
    private author: string;
    private id: number;

    constructor(title: string, author: string, id: number) {
        this.title = title;
        this.author = author;
        this.id = id;
    }

    getTitle(): string {
        return this.title;
    }
    setTitle(title: string): void {
        this.title = title;
    }
    getAuthor(): string {
        return this.author;
    }
    setAuthor(author: string): void {
        this.author = author;
    }
    getId(): number {
        return this.id;
    }
}
class Library {
    private books: Book[] = [];

    addBook(book: Book): void {
        this.books.push(book);
    }

    viewBooks(): void {
        this.books.forEach(book => {
            console.log(`ID: ${book.getId()}, Tên sách: ${book.getTitle()}, Tác giả: ${book.getAuthor()}`);
        });
    }

    updateBook(id: number, newTitle: string, newAuthor: string): void {
        const book = this.books.find(b => b.getId() === id);
        if (book) {
            book.setTitle(newTitle);
            book.setAuthor(newAuthor);
        } else {
            console.log(`Sách với ID ${id} không tìm thấy.`);
        }
    }
}
let book1 = new Book("Dế Mèn Phiêu Lưu Ký", "Tô Hoài", 1);
let book2 = new Book("Harry Potter", "J.K. Rowling", 2);
let book3 = new Book("The Hobbit", "J.R.R. Tolkien", 3);
let book4 = new Book("Sherlock Holmes", "Arthur Conan Doyle", 4);
let book5 = new Book("Lão Hạc", "Nam Cao", 5);
let library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);
console.log("Danh sách sách trong thư viện:");
library.viewBooks();
library.updateBook(3, "lord of the ring - Updated", "J.R.R. Tolkien - Updated");
library.updateBook(4, "thép đã tôi như thế đấy - Updated", "Nikolai A.Ostrovsky - Updated");
console.log("Danh sách sách trong thư viện sau khi cập nhật:");
library.viewBooks();