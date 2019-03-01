"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sum(a, b) {
    return a + b;
}
exports.sum = sum;
function minus(a, b) {
    return a - b;
}
exports.minus = minus;
function printAge(a) {
    console.log(a.age);
}
exports.printAge = printAge;
function printBookInfo(book) {
    console.log(book.name, book.author, book.isbn);
}
function printBookListInfo(books) {
    books.forEach(function (book) {
        printBookInfo(book);
    });
}
function printAffanBooksInfo(books) {
    books.forEach(function (book) {
        printBookInfo(book);
    });
}
