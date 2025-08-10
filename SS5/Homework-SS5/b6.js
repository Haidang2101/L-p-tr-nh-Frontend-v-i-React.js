var Book = /** @class */ (function () {
    function Book(title, author) {
        this.title = title;
        this.author = author;
    }
    Book.prototype.getInfo = function () {
        return "Title: ".concat(this.title, ", Author: ").concat(this.author);
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
    Library.prototype.showBooks = function () {
        if (this.books.length === 0) {
            console.log("Thư viện chưa có sách nào.");
            return;
        }
        console.log("Danh sách sách trong thư viện:");
        this.books.forEach(function (book, index) {
            console.log("".concat(index + 1, ". ").concat(book.getInfo()));
        });
    };
    return Library;
}());
var book1 = new Book("Dế Mèn Phiêu Lưu Ký", "Tô Hoài");
var book2 = new Book("Harry Potter", "J.K. Rowling");
var book3 = new Book("The Hobbit", "J.R.R. Tolkien");
var book4 = new Book("Sherlock Holmes", "Arthur Conan Doyle");
var book5 = new Book("Lão Hạc", "Nam Cao");
var myLibrary = new Library();
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);
myLibrary.addBook(book4);
myLibrary.addBook(book5);
myLibrary.showBooks();
