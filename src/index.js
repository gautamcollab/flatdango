// Your code here


const loadPage = async () => {
    let req = await fetch('http://localhost:3000/films')
    let res = await req.json() 
    res.forEach((element) => {
        let poster = document.getElementById('poster')
        let movieTitle = document.getElementById('title')
        let info = document.getElementById('film-info')
        let showTime = document.getElementById('showtime')
        let ticket = document.getElementById('ticket-num')
        let runtime = document.getElementById('runtime')
        runtime.innerHTML = element.runtime
        ticket.innerHTML = element.tickets_sold
        showTime.innerHTML = element.showtime
        movieTitle.innerHTML = element.title
        info.innerHTML = element.description
        poster.setAttribute('src',element.poster)


        let sidebar = document.getElementById('sidebar')
        sidebar.appendChild(title)

        let button = document.getElementById('buy-ticket')
        button.addEventListener('click',() => {
            ticket.innerText = --ticket.innerText
        })

        
    })
}
loadPage()