const words = document.querySelectorAll('.cd-words-wrapper b');
    let currentWordIndex = 0;
    
    function showNextWord() {
        const currentWord = words[currentWordIndex];
        const nextWord = words[(currentWordIndex + 1) % words.length];
        
        currentWord.classList.remove('is-visible');
        currentWord.classList.add('is-hidden');
        
        nextWord.classList.add('is-visible');
        
        currentWordIndex = (currentWordIndex + 1) % words.length;
    }
    
    // Start the word transition every 2 seconds
    setInterval(showNextWord, 2000);