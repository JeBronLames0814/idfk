document.addEventListener("DOMContentLoaded", function() {
    const input = document.getElementById("input");
    const counter = document.getElementById("counter");
    
    input.addEventListener("input", function() {
        const remainingChars = 1000 - input.value.length;
        counter.textContent = `Characters remaining: ${remainingChars}`;
    });
});
