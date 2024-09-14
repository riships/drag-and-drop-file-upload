document.addEventListener('DOMContentLoaded', () => {
    const parent = document.querySelector('#parentElem');
    const fileInput = document.getElementById('fileInput');
    const fileName = document.getElementById('fileName');
    const fileLabel = document.getElementById('fileLabel');
    const childElem = document.getElementById('child');
    const removeBtn = document.getElementById('removeBtn');

    function handleFileUpload(file) {
        if (file) {
            fileName.textContent = `Selected File: ${file.name}`;
            fileName.style.display = 'block';
            fileLabel.style.display = 'none';
            childElem.style.display = 'none';
            removeBtn.style.display = 'block';
        }
    }

    function fileUpload(event) {
        event.preventDefault();
        const file = fileInput.files[0];
        handleFileUpload(file);
    }

    fileInput.addEventListener('change', fileUpload);

    parent.addEventListener('dragover', (event) => {
        event.preventDefault(); // Prevent default to allow drop
        parent.classList.add('drag-over'); // Add a class for styling during drag
    });

    parent.addEventListener('dragleave', () => {
        parent.classList.remove('drag-over'); // Remove class when dragging leaves
    });

    parent.addEventListener('drop', (event) => {
        event.preventDefault(); // Prevent default behavior
        parent.classList.remove('drag-over'); // Remove class after drop
        const file = event.dataTransfer.files[0];
        handleFileUpload(file);
    });

    removeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        fileInput.value = '';
        fileLabel.style.display = 'block';
        childElem.style.display = 'block';
        fileName.style.display = 'none';
        removeBtn.style.display = 'none';
    });
});
