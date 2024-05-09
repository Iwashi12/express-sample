console.log("Hello");

window.addEventListener('load', () => {
    let count = 0;
    document.getElementById('plusBtn').addEventListener('click', () => {
        count ++;
        document.getElementById('view').innerHTML = count
    })
})