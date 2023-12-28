let movies = [
    {
        date: '2023/06/02',
        name: 'Indiana Jones and the Dial of Destiny',
        image: "images/indiana.jpeg", 
        message: '2023 2h 34m',
        rating: '6.9'
    },
    {
        date: '2023/07/04',
        name: 'No Hard Feelings',
        image: "images/nohardfeeling.jpeg", 
        message: '2023 2h 43m',
        rating: '6.8'
    },
    {
        date: '2023/04/16',
        name: 'Asteroid City',
        image: "images/asteroid city.jpeg", 
        message: '2023 1h 45m',
        rating: '7.1'
    },
    {
        date: '2023/06/06',
        name: 'The Flash',
        image: "images/flash.jpeg", 
        message: '2023 2h 24m',
        rating: '7.2'
    }
];

function filterMovies() {
    let startDate = new Date(document.getElementById('startDate').value);
    let endDate = new Date(document.getElementById('endDate').value);
    let filteredMovies = movies.filter(movie => {
        let movieDate = new Date(movie.date);
        return movieDate >= startDate && movieDate <= endDate;
    });
    displayMovies(filteredMovies);
}

function displayMovies(movies) {
    let moviesDiv = document.getElementById('movies');
    moviesDiv.innerHTML = '';
    movies.forEach((movie, index) => {
        let movieDiv = document.createElement('div');
        movieDiv.classList.add('items');

        let caretType = '';
        let caretValue = 0;

        if (movie.name.includes('Indiana Jones')) {
            caretType = 'up';
            caretValue = 10;
        } else if (movie.name.includes('No Hard Feelings')) {
            caretType = 'up';
            caretValue = 2;
        } else if (movie.name.includes('Asteroid City')) {
            caretType = 'up';
            caretValue = 2;
        } else if (movie.name.includes('The Flash')) {
            caretType = 'down';
            caretValue = 3;
        }

       
        let caretClass = caretType === 'up' ? 'up' : 'down';

        movieDiv.innerHTML = `
            <div class="movie-container">
                <div class="movie-header">
                    <p>${index + 1} (<i class="bi bi-caret-${caretClass}-fill"></i>${caretValue})</p>
                </div>
                <img width=200px src="${movie.image}" alt="${movie.name}">
                <div class="review">
                    <p><i class="bi bi-star-fill star"></i>${movie.rating}&emsp;<i class="bi bi-star"></i>&nbsp;Rate</p>
                    <h4>${movie.name}</h4>
                    <div class="yearTime">
                        <p>${movie.message}</p>
                        <div class="date-box">${new Date(movie.date).toLocaleDateString()}</div>
                    </div>
                </div>
            </div>
        `;
        moviesDiv.appendChild(movieDiv);
    });
}
