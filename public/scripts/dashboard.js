const scrollContainer = document.querySelector('.hero');
console.log(scrollContainer)
scrollContainer.addEventListener('wheel', (event) => {
    event.preventDefault(); // Prevent the default vertical scroll
    scrollContainer.scrollLeft += event.deltaY; // Scroll horizontally
});