const validateNote = (noteData) => {
    const errors = [];

    // Title validation
    if (!noteData.title || noteData.title.trim() === '') {
        errors.push('Title is required');
    } else if (noteData.title.length > 100) {
        errors.push('Title must be less than 100 characters');
    }

    // Content validation
    if (!noteData.content || noteData.content.trim() === '') {
        errors.push('Content is required');
    } else if (noteData.content.length > 1000) {
        errors.push('Content must be less than 1000 characters');
    }

    return {
        isValid: errors.length === 0,
        errors
    };
};

module.exports = {
    validateNote
};