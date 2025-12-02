export interface Book {
  id: number;
  title: string;
  author: string;
  cover: string;
  status: 'reading' | 'read' | 'read-later';
  rating?: string; // e.g., "3/5", "4/5"
}

export const LIBRARY_BOOKS: Book[] = [
  {
    id: 1,
    title: "The Alchemist",
    author: "Paulo Coelho",
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1483412266i/865.jpg",
    status: "reading",
  },
  {
    id: 2,
    title: "Can't Hurt Me: Master Your Mind and Defy the Odds",
    author: "David Goggins",
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1536184191i/41721428.jpg",
    status: "reading",
  },
  {
    id: 3,
    title: "A Thousand Splendid Suns",
    author: "Khaled Hosseini",
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1345958969i/128029.jpg",
    status: "read-later",
    rating: "4/5",
  },
  {
    id: 4,
    title: "Jonathan Livingston Seagull",
    author: "Richard Bach",
    cover: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1432222358i/71728.jpg",
    status: "read",
    rating: "4/5",
  },
  {
    id: 5,
    title: "Never Split the Difference",
    author: "Chris Voss",
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1460910517i/26156469.jpg",
    status: "read",
    rating: "3/5",
  },
  {
    id: 8,
    title: "The Almanack of Naval Ravikant",
    author: "Eric Jorgenson",
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1598011736i/54898389.jpg",
    status: "read",
    rating: "3.5/5",
  },
  {
    id: 9,
    title: "When Breath Becomes Air",
    author: "Paul Kalanithi",
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1492677644i/25899336.jpg",
    status: "read",
    rating: "4.5/5",
  },
  {
    id: 12,
    title: "Atomic Habits",
    author: "James Clear",
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1655988385i/40121378.jpg",
    status: "read-later",
  },
  {
    id: 13,
    title: "The 48 Laws of Power",
    author: "Robert Greene",
    cover: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1694722764i/1303.jpg",
    status: "read-later",
  },
  {
    id: 14,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1703329310i/23692271.jpg",
    status: "read-later",
  },
];

export const LIBRARY_META = {
  title: "Library",
  subtitle: "Books I'm reading and have read lately.",
  totalRead: LIBRARY_BOOKS.filter(book => book.status === 'read').length,
  totalReading: LIBRARY_BOOKS.filter(book => book.status === 'reading').length,
  totalReadLater: LIBRARY_BOOKS.filter(book => book.status === 'read-later').length,
  totalBooks: LIBRARY_BOOKS.length,
};
