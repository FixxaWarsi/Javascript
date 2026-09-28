const postsGrid = document.getElementById('posts-grid');
const searchInput = document.getElementById('search-input');
const categoryFilter = document.getElementById('category-filter');

const openModalBtn = document.getElementById('open-modal-btn');
const closeModalBtn = document.getElementById('close-modal-btn');
const modalOverlay = document.getElementById('modal-overlay');
const blogForm = document.getElementById('blog-form');
const postContentArea = document.getElementById('post-content');

const readModalOverlay = document.getElementById('read-modal-overlay');
const closeReadBtn = document.getElementById('close-read-btn');
const readImageContainer = document.getElementById('read-image-container');
const readCategory = document.getElementById('read-category');
const readTitle = document.getElementById('read-title');
const readDate = document.getElementById('read-date');
const readBody = document.getElementById('read-body');

// Load blog posts from LocalStorage or default sample post
let posts = JSON.parse(localStorage.getItem('blogPosts')) || [
    { 
        id: 1, 
        title: "Getting Started with Modern JavaScript", 
        category: "Tech", 
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
        content: "JavaScript has evolved tremendously over the past few years with ES6+ features like arrow functions, destructuring, and advanced array methods making development much smoother.", 
        date: "Sep 28, 2026" 
    }
];

let searchQuery = '';
let selectedCategory = 'all';

function saveAndRender() {
    localStorage.setItem('blogPosts', JSON.stringify(posts));
    renderPosts();
}

function renderPosts() {
    postsGrid.innerHTML = '';

    const filtered = posts.filter(post => {
        const matchesCat = selectedCategory === 'all' || post.category === selectedCategory;
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                              post.content.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCat && matchesSearch;
    });

    if (filtered.length === 0) {
        postsGrid.innerHTML = `<div class="no-posts">No blog posts found.</div>`;
        return;
    }

    filtered.forEach(post => {
        const card = document.createElement('div');
        card.className = 'post-card';
        
        let imgHtml = post.image ? `<img src="${post.image}" class="card-img-thumb" alt="Post Image">` : '';

        card.innerHTML = `
            <div onclick="openReadModal(${post.id})" style="display:flex; flex-direction:column; flex:1;">
                ${imgHtml}
                <div class="post-card-body">
                    <span class="post-category">${post.category}</span>
                    <h3 class="post-title">${post.title}</h3>
                    <p class="post-snippet">${post.content.replace(/<[^>]*>?/gm, '')}</p>
                </div>
            </div>
            <div class="post-footer">
                <span>${post.date}</span>
                <button class="delete-post-btn" onclick="deletePost(event, ${post.id})"><i class="fa-solid fa-trash"></i></button>
            </div>
        `;
        postsGrid.appendChild(card);
    });
}

// Formatting Tool logic for textarea (Bold, Italic, Underline)
window.formatText = function(style) {
    const start = postContentArea.selectionStart;
    const end = postContentArea.selectionEnd;
    const selectedText = postContentArea.value.substring(start, end);
    
    if (!selectedText) return;

    let replacement = '';
    if (style === 'bold') replacement = `<strong>${selectedText}</strong>`;
    if (style === 'italic') replacement = `<em>${selectedText}</em>`;
    if (style === 'underline') replacement = `<u>${selectedText}</u>`;

    postContentArea.value = postContentArea.value.substring(0, start) + replacement + postContentArea.value.substring(end);
};

// Modal handling
openModalBtn.addEventListener('click', () => modalOverlay.style.display = 'flex');
closeModalBtn.addEventListener('click', () => modalOverlay.style.display = 'none');
modalOverlay.addEventListener('click', (e) => { if (e.target === modalOverlay) modalOverlay.style.display = 'none'; });

closeReadBtn.addEventListener('click', () => readModalOverlay.style.display = 'none');
readModalOverlay.addEventListener('click', (e) => { if (e.target === readModalOverlay) readModalOverlay.style.display = 'none'; });

// Create Post
blogForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('post-title').value.trim();
    const category = document.getElementById('post-category').value;
    const image = document.getElementById('post-image').value.trim();
    const content = document.getElementById('post-content').value.trim();

    if (!title || !content) return;

    const newPost = {
        id: Date.now(),
        title,
        category,
        image,
        content,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    };

    posts.unshift(newPost);
    blogForm.reset();
    modalOverlay.style.display = 'none';
    saveAndRender();
});

// Open Read Modal
window.openReadModal = function(id) {
    const post = posts.find(p => p.id === id);
    if (!post) return;

    readImageContainer.innerHTML = post.image ? `<img src="${post.image}" alt="Post cover image">` : '';
    readCategory.textContent = post.category;
    readTitle.textContent = post.title;
    readDate.textContent = post.date;
    readBody.innerHTML = post.content; // Renders HTML formatting safely

    readModalOverlay.style.display = 'flex';
};

// Delete Post
window.deletePost = function(e, id) {
    e.stopPropagation();
    if (confirm("Delete this post?")) {
        posts = posts.filter(p => p.id !== id);
        saveAndRender();
    }
};

// Filters
searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.trim();
    renderPosts();
});

categoryFilter.addEventListener('change', (e) => {
    selectedCategory = e.target.value;
    renderPosts();
});

// Initial load
renderPosts();