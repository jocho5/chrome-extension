// below may resemble response from API GET request? Note > I need to understand CORS and how to hide/secure API-keys (e.g., RAPID API)
const jokesArr = [
    { joke: "All arrays Chuck Norris declares are of infinite size, because Chuck Norris knows no bounds." },
    { joke: "Chuck Norris writes code that optimizes itself." },
    { joke: "Chuck Norris doesn’t need garbage collection because he doesn’t call .Dispose(), he calls .DropKick()." },
    { joke: "Chuck Norris can write infinite recursion functions…and have them return." },
    { joke: "Chuck Norris can delete the Recycling Bin." },
    { joke: "Chuck Norris doesn't make http requests. He makes http demands." }
];

document.addEventListener('DOMContentLoaded', () => {
    const randomJoke = Math.floor(Math.random() * jokesArr.length);

    // document.getElementById('joke').textContent = jokesArr[randomJoke].joke;

    const img = document.createElement('img');
    img.src = 'Images/cn-thumbs.png'

    document.getElementById('joke').textContent = jokesArr[randomJoke].joke;
    
    document.getElementById('placehere').appendChild(img);

})