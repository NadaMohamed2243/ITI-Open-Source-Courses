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
    try {
      const response = await fetch('/api/notes');
      if (!response.ok) throw new Error('Failed to fetch notes');
      return await response.json();
    } catch (error) {
      console.error('Error fetching notes:', error);
      alert('Failed to load notes. Please try again.');
      return [];
    }
  };
  
  // Function to render notes to the DOM
  const renderNotes = (notes) => {
    notesList.innerHTML = '';
    
    if (notes.length === 0) {
      notesList.innerHTML = '<p>No notes available. Add your first note!</p>';
      return;
    }
    
    notes.forEach(note => {
      const noteElement = document.createElement('div');
      noteElement.className = 'note';
      noteElement.innerHTML = `
        <h3>${note.title}</h3>
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
    event.preventDefault();
    
    const noteData = {
      title: titleInput.value,
      content: contentInput.value
    };
    
    try {
      let response;
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
      resetForm();
      const notes = await fetchNotes();
      renderNotes(notes);
    } catch (error) {
      console.error('Error saving note:', error);
      alert('Failed to save note. Please try again.');
    }
  };

  // Function to reset the form
  const resetForm = () => {
    noteForm.reset();
    noteIdInput.value = '';
    isEditing = false;
    submitBtn.textContent = 'Save Note';
    cancelBtn.style.display = 'none';
  };

  // Function to edit a note
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

  // Function to delete a note
  window.deleteNote = async (id) => {
    if (!confirm('Are you sure you want to delete this note?')) return;
    
    try {
      const response = await fetch(`/api/notes/${id}`, {
        method: 'DELETE'
      });
      
      if (!response.ok) throw new Error('Failed to delete note');
      
      // Refresh notes
      const notes = await fetchNotes();
      renderNotes(notes);
    } catch (error) {
      console.error('Error deleting note:', error);
      alert('Failed to delete note. Please try again.');
    }
  };

  // Add event listeners
  noteForm.addEventListener('submit', handleSubmit);
  cancelBtn.addEventListener('click', resetForm);
  
  // Initial fetch
  fetchNotes().then(renderNotes);
});