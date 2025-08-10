var Book = /** @class */ (function () {
    function Book(title, author, id) {
        this.title = title;
        this.author = author;
        this.id = id;
    }
    Book.prototype.getTitle = function () {
        return this.title;
    };
    Book.prototype.setTitle = function (title) {
        this.title = title;
    };
    Book.prototype.getAuthor = function () {
        return this.author;
    };
    Book.prototype.setAuthor = function (author) {
        this.author = author;
    };
    Book.prototype.getId = function () {
        return this.id;
    };
    return Book;
}());
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
    }
    Library.prototype.addBook = function (book) {
        this.books.push(book);
    };
    Library.prototype.viewBooks = function () {
        this.books.forEach(function (book) {
            console.log("ID: ".concat(book.getId(), ", T\u00EAn s\u00E1ch: ").concat(book.getTitle(), ", T\u00E1c gi\u1EA3: ").concat(book.getAuthor()));
        });
    };
    Library.prototype.updateBook = function (id, newTitle, newAuthor) {
        var book = this.books.find(function (b) { return b.getId() === id; });
        if (book) {
            book.setTitle(newTitle);
            book.setAuthor(newAuthor);
        }
        else {
            console.log("S\u00E1ch v\u1EDBi ID ".concat(id, " kh\u00F4ng t\u00ECm th\u1EA5y."));
        }
    };
    return Library;
}());
var book1 = new Book("Dế Mèn Phiêu Lưu Ký", "Tô Hoài", 1);
var book2 = new Book("Harry Potter", "J.K. Rowling", 2);
var book3 = new Book("The Hobbit", "J.R.R. Tolkien", 3);
var book4 = new Book("Sherlock Holmes", "Arthur Conan Doyle", 4);
var book5 = new Book("Lão Hạc", "Nam Cao", 5);
var library = new Library();
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
