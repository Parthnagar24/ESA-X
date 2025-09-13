let selectedModel = null;

// Model selection with red border
function selectModel(model) {
    selectedModel = model;

    document.querySelectorAll('.model-box').forEach(box => {
        box.classList.remove('selected');
    });

    document.getElementById(model).classList.add('selected');

    // Change images based on model
    const raw = document.getElementById('rawImage');
    const segmented = document.getElementById('segmentedImage');
    const bounded = document.getElementById('boundedImage');

    if(model === 'moon') {
        raw.src = 'images/images1.jpg';
        segmented.src = 'images/images2.jpg';
        bounded.src = 'images/images3.jpg';
    } else if(model === 'mars') {
        raw.src = 'images/images4.jpg';
        segmented.src = 'images/images5.jpg';
        bounded.src = 'images/images6.jpg';
    } else if(model === 'mercury') {
        raw.src = 'images/images7.jpg';
        segmented.src = 'images/images1.jpg';
        bounded.src = 'images/images2.jpg';
    }

    addChatMessage(`Selected Model: ${model}`);
}

// Upload image dynamically
function uploadImage(event) {
    const raw = document.getElementById('rawImage');
    raw.src = URL.createObjectURL(event.target.files[0]);
    addChatMessage('New image uploaded');
}

// Upload button click
function uploadImageButton() {
    const input = document.getElementById('uploadImage');
    if(input.files.length > 0) {
        const raw = document.getElementById('rawImage');
        raw.src = URL.createObjectURL(input.files[0]);
        addChatMessage('Image uploaded via button');
    }
}

// Chat box update
function addChatMessage(message) {
    const chatBox = document.getElementById('chatBox');
    const p = document.createElement('p');
    p.textContent = message;
    chatBox.appendChild(p);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Send chat message
function sendMessage() {
    const input = document.getElementById('chatMessage');
    if(input.value.trim() !== '') {
        addChatMessage(`You: ${input.value}`);
        // Here you can integrate model reply logic
        addChatMessage(`Model: Response for "${input.value}"`);
        input.value = '';
    }
}
