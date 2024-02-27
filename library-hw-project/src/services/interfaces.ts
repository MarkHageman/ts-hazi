export namespace LibraryInterfaces {
    export interface Book {
        ISBN: number,
        author: string,
        title: string,
        publisher: string,
        publicationDate: Date,
        pageCount: number,
        inStock: boolean

    }

    export interface LibraryStock {
        addNewBook(book: Book): void,
        listAllBooks(): Book[],
        searchOneBook<T extends number | string>(identifier: T): Book | undefined,
        updateBook<T extends number | string>(identifier: T, updatedFields: Partial<Book>): void,
        deleteFromStock(id: number): string
    }

    /* export interface BorrowerContacts {
        phoneNumber: string,
        email: string,

    } */

    export interface Borrower {
        name: string,
        phoneNumber: string,
        email: string,
        borrowedBooks: BorrowedBook[]

    }

    export interface BorrowedBook {
        bookISBN: Book["ISBN"],
        bookTitle: Book["title"],
        borrowingStartDate: Date,
        borrowingExpireDate: Date

    }
}

