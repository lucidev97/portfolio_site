// Add custom JavaScript here
function runTypingEffect(){
    const text = ' Je suis Abdoul Karim Kane'
    const typingElement = document.getElementById('typing-text')
    const typingDelay = 100;
    typeText(text,typingElement,typingDelay)
}

function typeText(text,typingElement,typingDelay){
    for (let i=0; i < text.length;i++){
        setTimeout(() => {
            typingElement.textContent += text.charAt(i);
        },typingDelay *  i);
    }
}

document.addEventListener('DOMContentLoaded',runTypingEffect)
 