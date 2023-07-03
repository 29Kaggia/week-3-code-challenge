//fetch film data
const fetchFilms = () => {
    fetch('${http://localhost:3000/films}', {
        method: `GET`,
        headers: {
            "content-Type" : "application/json",
        }
    })

.then((response) => response.json()
.then(json => {
    json.map(film => {
        console.log(film)
    })
})
)
}

//Request to receive first movie data
fetch('${http://localhost:3000/films/1}')
.then(response => response.json())
.then(movieData => {
    const availableTickets = movieData.capacity-movieData.tickets
})

//display movie details
const posterImage = document.getElementById('poster-img');
const movieTitle = document.getElementById('movie-title');
const movieRuntime = document.getElementById('movie-runtime');
const movieShowtime = document.getElementById('movie-showtime');
const movieTicket = document.getElementById('movie-ticket');
