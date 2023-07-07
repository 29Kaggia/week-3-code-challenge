document.addEventListener('DOMContentLoaded', function(){
    fetchData()
})
//to fetch data from json file
function fetchData(){
    fetch(`http://localhost:3000/films`)
    .then(res => res.json())
    .then(data => {
        displayTitles(data)
    })
}

//to display movie titles
function displayTitles(movie){
    let titles = document.getElementById('films')
    movie.forEach(movie =>{
        let titleList = document.createElement('li')
        titleList.classList = 'movie_list'
        titleList.innerText = movie.title
        titles.appendChild(titleList)
        titleList.addEventListener('click', function(){
            fetchInfo(movie)
        })
    })
}

//to fetch information about the movie
function fetchInfo(movie){
    fetch(`http://localhost:3000/films/${movie.id}`)
    .then(res => res.json())
    .then(data => {
        displayInfo(data)
    })
}

function displayInfo(movie){
    document.querySelector('#title').innerText = movie.title
    document.querySelector('#description').innerText = `Description: ${movie.description}`
    document.querySelector('#runtime span').innerText = `Runtime: ${movie.runtime}`
    document.querySelector('#capacity span').innerText = `Capacity: ${movie.capacity}`
    document.querySelector('#showtime span').innerText = `Showtime: ${movie.showtime}`
    document.querySelector('#tickets span').innerText = `Tickets: ${movie.tickets_sold}`
    document.querySelector('#images').setAttribute('src', movie.poster)
    let btn = document.getElementById('buy_ticket')
    btn.addEventListener('click', buyTicket)
}

function buyTicket(){
    let tickets= document.getElementById('available');
    let availableTickets = parseInt(tickets.textContent.split(' ')[2]);
    if (availableTickets > 0) {
        availableTickets--;
        tickets.textContent = `Available Tickets: ${availableTickets}`;
      } else {
        alert('Sorry, the showing is sold out!')
      }
    }
