
const {
    addBookHandler,
    getAllBooksHandler,
    getBookByIdHandler,
    editBookByIdHandler,
    deleteBookByIdHandler,
} = require('./handler');


const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: addBookHandler,

    },
    {
        method: 'GET',
        path: '/books',
        handler: getAllBooksHandler,
    },
    {
        method: 'GET',
        path: '/books/{name}',
        handler: getBookByIdName,
    },
    {
        method: 'GET',
        path: '/books/{readingStatus}',
        handler: getBookByIdReading,
    },
    {
        method: 'GET',
        path: '/books/{finishedStatus}',
        handler: getBookByIdFinished,
    },
    {
        method: 'PUT',
        path: '/books/{bookId}',
        handler: editBookByIdHandler,
    },
    {
        method: 'DELETE',
        path: '/books/{bookId}',
        handler: deleteBookByIdHandler,
    },
];

module.exports = routes;
