
const register_Form = $('#registerForm');

function loadUsers() {
    $.get('/get-users', renderTable);
}

function renderTable(users) {
    const rows = users.map(user => `
    <tr>
      <td>${user.name}</td>
      <td>${user.email}</td>

      <td>
      <button onclick="deleteUser(${user.id})" class="btn btn-danger btn-sm">Delete</button>
      <button onclick="editUser(${user.id}, '${user.name}', '${user.email}')" class="btn btn-primary btn-sm">Edit</button>
      </td>
    </tr>
  `);
    $('#userTable').html(rows.join(''));
}

$('#registerForm').on('submit', function (e) {
   e.preventDefault();
  const data = {
    name: this.name.value,
    email: this.email.value
  };

  const editingId = this.dataset.editingId;

  if (editingId) {
  $.ajax({
    url: '/edit-user/' + editingId,
    type: 'PUT',
    contentType: 'application/json',
    data: JSON.stringify(data),
    success: () => {
      loadUsers();
      $('#registerForm')[0].reset();
      delete document.getElementById('registerForm').dataset.editingId;
    }
  });
} else {
    // Add new user
    $.post('/register', data, () => {
      loadUsers();
      this.reset();
    });
  }
});

function deleteUser(id) {
    $.ajax({
        url: '/delete-user/' + id,
        type: 'DELETE',
        success: loadUsers
    });
}

function editUser(id, name, email) {
  register_Form.find('input[name="name"]').val(name);
  register_Form.find('input[name="email"]').val(email);
  register_Form[0].dataset.editingId = id;
}


$('#searchBox').on('input', function () {
    const q = $(this).val();
    if (q.trim() === '') {
        loadUsers();
    } else {
        $.get('/search?q=' + q, renderTable);
    }
});

$(document).ready(loadUsers);

