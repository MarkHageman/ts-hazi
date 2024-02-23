interface Book {
    ISBN: number,
    author: string,
    title: string,
    publisher: string,
    publicationDate: Date,
    pageCount: number,
    inStock: boolean

}

interface LibraryStock {
    books: Book[],
    //crud
    addNewBook(book: Book): void,
    listAllBooks(): Book[],
    searchOneBook<T extends number | string>(identifier: T): Book | undefined,
    updateBook<T extends number | string>(identifier: T, updatedBook: Book): void,
    deleteFromStock(id: number): string
}

interface BorrowerContacts {
    phoneNumber: string,
    email: string,

}

interface Borrower {
    name: string,
    borrowedBooks: BorrowedBook[],
    borrowerContacts: BorrowerContacts

}

interface BorrowedBook {
    bookISBN: Book["ISBN"],
    bookTitle: Book["title"],
    borrowingStartDate: Date,
    borrowingExpireDate: Date

}