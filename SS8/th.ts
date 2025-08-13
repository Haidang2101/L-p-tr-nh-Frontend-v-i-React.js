class Book {
    id: number;
    title: string;
    author: string;
    year: number;
}

class textBook extends Book {
    grade: string;
}

class Comic extends Book {
    studio: string;
}

// xây dựng lớp generic library
class Library<T extends Book> {
    books: T[] = [];

    addBook(book: T): void {
        this.books.push(book);
    }

    getBookById(id: number): T | undefined {
        return this.books.find(book => book.id === id);
    }

    removeBookById(id: number): void {
        const index = this.books.findIndex(book => book.id === id);
        if (index !== -1) {
            this.books.splice(index, 1);
        }
    }

    updateBook(id: number, updatedBook: T): void {
        const index = this.books.findIndex(book => book.id === id);
        if (index !== -1) {
            this.books[index] = updatedBook;
        }
    }

    listBooks(): T[] {
        return this.books;
    }

    findBookByTitleOrAuthor(searchString: string): T[] {
        return this.books.filter(
            book =>
                book.title.includes(searchString) ||
                book.author.includes(searchString)
        );
    }

    getTotalBook(): number {
        return this.books.length;
    }

    findBookByYear(year: number): T[] {
        return this.books.filter(book => book.year === year);
    }
}

let comicLibrary = new Library<Comic>();
comicLibrary.addBook({
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    studio: "J.B. Lippincott & Co."
});

console.log(comicLibrary.listBooks());
