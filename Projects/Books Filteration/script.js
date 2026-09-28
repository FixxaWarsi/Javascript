// Mock Book Dataset
const books = [
    { id: 1, title: "The Pragmatic Programmer", author: "Andrew Hunt & David Thomas", category: "Tech", price: "$42.00" },
    { id: 2, title: "Atomic Habits", author: "James Clear", category: "Self-Help", price: "$24.50" },
    { id: 3, title: "Dune", author: "Frank Herbert", category: "Sci-Fi", price: "$18.99" },
    { id: 4, title: "Clean Code", author: "Robert C. Martin", category: "Tech", price: "$35.00" },
    { id: 5, title: "To Kill a Mockingbird", author: "Harper Lee", category: "Fiction", price: "$14.99" },
    { id: 6, title: "The Alchemist", author: "Paulo Coelho", category: "Fiction", price: "$16.00" },
    { id: 7, title: "Deep Work", author: "Cal Newport", category: "Self-Help", price: "$21.00" },
    { id: 8, title: "Neuromancer", author: "William Gibson", category: "Sci-Fi", price: "$15.50" }
];

const searchInput = document.getElementById('search-input');
const categoryContainer = document.getElementById('category-container');
const booksGrid = document.getElementById('books-grid');

// Load favorites from localStorage
let favorites = JSON.parse(localStorage.getItem('bookFavorites')) || [];
let activeCategory = 'all';
let searchQuery = '';

function renderBooks() {
    booksGrid.innerHTML = '';

    // Filter logic
    const filtered = books.filter(book => {
        const matchesCategory = activeCategory === 'all' || book.category === activeCategory;
        const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                              book.author.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
        booksGrid.innerHTML = `<div class="no-results">No books found matching your criteria.</div>`;
        return;
    }

    filtered.forEach(book => {
        const isFav = favorites.includes(book.id);
        const card = document.createElement('div');
        card.className = 'book-card';

        card.innerHTML = `
            <div class="book-content">
                <span class="book-category">${book.category}</span>
                <h3 class="book-title">${book.title}</h3>
                <p class="book-author">by ${book.author}</p>
            </div>
            <div class="book-footer">
                <span class="book-price">${book.price}</span>
                <button class="fav-btn ${isFav ? 'favorited' : ''}" onclick="toggleFavorite(${book.id})">
                    <i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
                </button>
            </div>
        `;
        booksGrid.appendChild(card);
    });
}

// Search event listener
searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.trim();
    renderBooks();
});

// Category pills event listener
categoryContainer.addEventListener('click', (e) => {
    if (!e.target.classList.contains('pill')) return;

    document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
    e.target.classList.add('active');

    activeCategory = e.target.getAttribute('data-category');
    renderBooks();
});

// Toggle favorite bookmark function
window.toggleFavorite = function(id) {
    if (favorites.includes(id)) {
        favorites = favorites.filter(favId => favId !== id);
    } else {
        favorites.push(id);
    }

    localStorage.setItem('bookFavorites', JSON.stringify(favorites));
    renderBooks();
};

// Initial load
renderBooks();