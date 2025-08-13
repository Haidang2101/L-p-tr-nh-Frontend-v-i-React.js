var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Book = /** @class */ (function () {
    function Book() {
    }
    return Book;
}());
var textBook = /** @class */ (function (_super) {
    __extends(textBook, _super);
    function textBook() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return textBook;
}(Book));
var Comic = /** @class */ (function (_super) {
    __extends(Comic, _super);
    function Comic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Comic;
}(Book));
// xây dựng lớp generic library
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
    }
    Library.prototype.addBook = function (book) {
        this.books.push(book);
    };
    Library.prototype.getBookById = function (id) {
        return this.books.find(function (book) { return book.id === id; });
    };
    Library.prototype.removeBookById = function (id) {
        var index = this.books.findIndex(function (book) { return book.id === id; });
        if (index !== -1) {
            this.books.splice(index, 1);
        }
    };
    Library.prototype.updateBook = function (id, updatedBook) {
        var index = this.books.findIndex(function (book) { return book.id === id; });
        if (index !== -1) {
            this.books[index] = updatedBook;
        }
    };
    Library.prototype.listBooks = function () {
        return this.books;
    };
    Library.prototype.findBookByTitleOrAuthor = function (searchString) {
        return this.books.filter(function (book) {
            return book.title.includes(searchString) ||
                book.author.includes(searchString);
        });
    };
    Library.prototype.getTotalBook = function () {
        return this.books.length;
    };
    Library.prototype.findBookByYear = function (year) {
        return this.books.filter(function (book) { return book.year === year; });
    };
    return Library;
}());
var comicLibrary = new Library();
comicLibrary.addBook({
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    studio: "J.B. Lippincott & Co."
});
console.log(comicLibrary.listBooks());
