document.addEventListener('DOMContentLoaded', () => {
  // Get DOM elements 
  const noteForm = document.getElementById('noteForm');
  const notesList = document.getElementById('notesList');
  const titleInput = document.getElementById('title');
  const contentInput = document.getElementById('content');
  const noteIdInput = document.getElementById('noteId');
  const submitBtn = document.getElementById('submitBtn');
  const cancelBtn = document.getElementById('cancelBtn');
  let isEditing = false;
  // Function to fetch all notes 
  const fetchNotes = async () => {
    // TODO: Implement fetching notes from the API 
    try {
      const response = await fetch('/api/notes');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const notes = await response.json();
      renderNotes(notes);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  // Function to render notes to the DOM 
  const renderNotes = (notes) => {
    // TODO: Implement rendering notes to the page 
    notesList.innerHTML = '';

    if (notes.length === 0) {
      notesList.innerHTML = '<p>No notes available. Add your first note!</p>';
      return;
    }

    notes.forEach(note => {
      const noteElement = document.createElement('div');
      noteElement.className = 'note';
      noteElement.innerHTML = `
        <h2>${note.title}</h2>
        <p>${note.content}</p>
        <div class="note-actions">
          <button onclick="editNote(${note.id})">Edit</button>
          <button onclick="deleteNote(${note.id})">Delete</button>
        </div>
      `;
      notesList.appendChild(noteElement);
    });
  };

  // Function to handle form submission 
  const handleSubmit = async (event) => {
    // TODO: Implement form submission 

    event.preventDefault(); // Prevent default form submission (which would refresh the page)

    // Get form data
    const title = titleInput.value.trim();
    const content = contentInput.value.trim();

    if (!validateForm(title, content)) {
      return; // Exit if validation fails
    }
    // Create note object
    const noteData = {
      title,
      content,
    };
    // console.log(noteData)

    try {
      let response;
      // Check if we are editing an existing note or creating a new one
      if (isEditing) {
        response = await fetch(`/api/notes/${noteIdInput.value}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(noteData)
        });
      } else {
        response = await fetch('/api/notes', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(noteData)
        });
      }
      
      if (!response.ok) throw new Error('Failed to save note');
      
      // Reset form and refresh notes
      fetchNotes();
      if (isEditing) {
        alert('Note updated successfully!');
      }
      else {
        alert('Note saved successfully!');
      }
      resetForm();
    } catch (error) {
      console.error('Error saving note:', error);
      alert('Failed to save note. Please try again.');
    }


  };

  // validate form data
  const validateForm = (title, content) => {
    // Check if title and content are not empty
    if (!title || !content) {
      alert('Please fill in both title and content fields.');
      return false;
    }
    return true;
  };

  // Function to reset the form
  const resetForm = () => {
    noteForm.reset();
    noteIdInput.value = '';
    isEditing = false;
    submitBtn.textContent = 'Save Note';
    cancelBtn.style.display = 'none';
  };

  // Function to handle note editing
  window.editNote = async (id) => {
    try {
      const response = await fetch(`/api/notes/${id}`);
      if (!response.ok) throw new Error('Failed to fetch note');
      
      const note = await response.json();
      titleInput.value = note.title;
      contentInput.value = note.content;
      noteIdInput.value = note.id;
      isEditing = true;
      submitBtn.textContent = 'Update Note';
      cancelBtn.style.display = 'inline-block';
    } catch (error) {
      console.error('Error fetching note:', error);
      alert('Failed to edit note. Please try again.');
    }
  };

  // Function to handle note deletion
  window.deleteNote = async (id) => {
    if (confirm('Are you sure you want to delete this note?')) {
      try {
        const response = await fetch(`/api/notes/${id}`, {
          method: 'DELETE'
        });
        if (!response.ok) throw new Error('Failed to delete note');
        
        fetchNotes();
        alert('Note deleted successfully!');
      } catch (error) {
        console.error('Error deleting note:', error);
        alert('Failed to delete note. Please try again.');
      }
    }
  };

  // Add event listeners 
  noteForm.addEventListener('submit', handleSubmit);
  cancelBtn.addEventListener('click', resetForm);
  // Initial fetch 
  fetchNotes();
}); 