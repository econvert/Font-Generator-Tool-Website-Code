function changeFont(font) {
    document.getElementById('outputText').style.fontFamily = font;
    updateOutput();
}

function toggleBold() {
    const outputText = document.getElementById('outputText');
    outputText.style.fontWeight = (outputText.style.fontWeight === 'bold') ? 'normal' : 'bold';
    updateOutput();
}

function toggleItalic() {
    const outputText = document.getElementById('outputText');
    outputText.style.fontStyle = (outputText.style.fontStyle === 'italic') ? 'normal' : 'italic';
    updateOutput();
}

function updateOutput() {
    const inputText = document.getElementById('inputText').value;
    document.getElementById('outputText').innerHTML = inputText;
}

// Attach event listener to update output on input change
document.getElementById('inputText').addEventListener('input', updateOutput);
