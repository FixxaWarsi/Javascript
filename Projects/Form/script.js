// Grab elements from DOM
const userForm = document.getElementById('user-form');
const userIdInput = document.getElementById('user-id');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const ageInput = document.getElementById('age');
const submitBtn = document.getElementById('submit-btn');
const userTableBody = document.getElementById('user-table-body');

// Load users from localStorage or start fresh
let users = JSON.parse(localStorage.getItem('usersList')) || [];
let isEditing = false;

// Function to save and re-render
function saveAndRender() {
    localStorage.setItem('usersList', JSON.stringify(users));
    renderTable();
}

// Render user data inside the HTML table
function renderTable() {
    userTableBody.innerHTML = '';

    if (users.length === 0) {
        userTableBody.innerHTML = `<tr><td colspan="4" class="empty-row">No users registered yet.</td></tr>`;
        return;
    }

    users.forEach((user) => {
        const tr = document.createElement('tr');
        
        tr.innerHTML = `
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.age}</td>
            <td>
                <div class="action-btns">
                    <button class="icon-btn edit-btn" onclick="prepareEdit(${user.id})"><i class="fa-solid fa-pen"></i></button>
                    <button class="icon-btn delete-btn" onclick="deleteUser(${user.id})"><i class="fa-solid fa-trash"></i></button>
                </div>
            </td>
        `;
        userTableBody.appendChild(tr);
    });
}

// Handle Form Submit (Create or Update)
userForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const age = ageInput.value.trim();

    if (!name || !email || !age) return;

    if (isEditing) {
        // Update existing user
        const id = Number(userIdInput.value);
        users = users.map(user => {
            if (user.id === id) {
                return { id, name, email, age };
            }
            return user;
        });

        // Reset edit mode
        isEditing = false;
        submitBtn.textContent = 'Add User';
        userIdInput.value = '';
    } else {
        // Create new user
        const newUser = {
            id: Date.now(),
            name,
            email,
            age
        };
        users.push(newUser);
    }

    userForm.reset();
    saveAndRender();
});

// Prepare data for editing (load values back into the form)
window.prepareEdit = function(id) {
    const userToEdit = users.find(user => user.id === id);
    if (!userToEdit) return;

    userIdInput.value = userToEdit.id;
    nameInput.value = userToEdit.name;
    emailInput.value = userToEdit.email;
    ageInput.value = userToEdit.age;

    isEditing = true;
    submitBtn.textContent = 'Update User';
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Delete user
window.deleteUser = function(id) {
    if (confirm("Are you sure you want to delete this user?")) {
        users = users.filter(user => user.id !== id);
        saveAndRender();
        
        // If we were editing this user, reset the form
        if (isEditing && Number(userIdInput.value) === id) {
            userForm.reset();
            isEditing = false;
            submitBtn.textContent = 'Add User';
        }
    }
};

// Initial run
renderTable();