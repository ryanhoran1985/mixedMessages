const quoteText = document.querySelector('.quote');
const buttonQuote = document.querySelector('.btn-quote');
const authorElement = document.querySelector('.author');
const speechIcon = document.querySelector('.speech');
const copyIcon = document.querySelector('.copy');

async function randomQuote() {
    buttonQuote.textContent = "loading...";
    const data = await fetch('https://type.fit/api/quotes');
    const result = await data.json();
    const randNum = Math.floor(Math.random() * 16)
    const quoteResult = result[randNum]
    
    quoteText.textContent = quoteResult.text;
    authorElement.textContent = quoteResult.author;
    buttonQuote.textContent = 'New Quote';
}

function speechTxtTalk() {
    let speechText = new SpeechSynthesisUtterance();
    speechText.text = `${quoteText.textContent} By ${authorElement.textContent}`;
    speechText.voice = window.speechSynthesis.getVoices()[0];
    window.speechSynthesis.speak(speechText)
}
copyIcon.addEventListener('click', () => {
    navigator.clipboard.writeText(quoteText.textContent);
})

speechIcon.addEventListener('click', speechTxtTalk)
buttonQuote.addEventListener('click', randomQuote)