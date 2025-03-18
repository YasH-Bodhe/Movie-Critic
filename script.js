// For educational purposes only - DO NOT USE in production
// Request your own key for free: https://developers.themoviedb.org/3
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${KEY}&page=1`;
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=`;

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");
const loading = document.getElementById("loading");

// Get rating color class based on vote average
const getClassByRate = (vote) => {
  if (vote >= 7.5) return "green";
  else if (vote >= 7) return "orange";
  else return "red";
};

// Show loading spinner
const showLoading = () => {
  loading.style.display = "flex";
  main.style.display = "none";
};

// Hide loading spinner
const hideLoading = () => {
  loading.style.display = "none";
  main.style.display = "flex";
};

// Display movies in the DOM
const showMovies = (movies) => {
  main.innerHTML = "";
  
  if (movies.length === 0) {
    main.innerHTML = `
      <div class="no-results">
        <i class="fas fa-sad-tear"></i>
        <h2>No movies found</h2>
        <p>Try a different search term</p>
      </div>
    `;
    return;
  }
  
  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview, release_date } = movie;
    
    // Skip movies without posters
    if (!poster_path) return;
    
    const movieElement = document.createElement("div");
    movieElement.classList.add("movie");
    
    // Format release date
    const year = release_date ? new Date(release_date).getFullYear() : "";
    
    // Format vote average to one decimal place
    const formattedVote = vote_average.toFixed(1);
    
    movieElement.innerHTML = `
      <img
        src="${IMG_PATH + poster_path}"
        alt="${title}"
        onerror="this.src='https://via.placeholder.com/300x450?text=No+Image+Available'"
      />
      <div class="movie-info">
        <h3>${title} ${year ? `(${year})` : ""}</h3>
        <span class="${getClassByRate(vote_average)}">${formattedVote}</span>
      </div>
      <div class="overview">
        <h3>Overview</h3>
        <p>${overview || "No overview available for this movie."}</p>
      </div>
    `;
    main.appendChild(movieElement);
  });
};

// Fetch movies from API
const getMovies = async (url) => {
  showLoading();
  try {
    const res = await fetch(url);
    const data = await res.json();
    hideLoading();
    showMovies(data.results);
  } catch (error) {
    hideLoading();
    main.innerHTML = `
      <div class="error">
        <i class="fas fa-exclamation-triangle"></i>
        <h2>Something went wrong</h2>
        <p>Please try again later</p>
      </div>
    `;
    console.error("Error fetching movies:", error);
  }
};

// Initialize with popular movies
getMovies(API_URL);

// Search form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = search.value.trim();
  if (searchTerm) {
    getMovies(SEARCH_API + encodeURIComponent(searchTerm));
    search.value = "";
  } else {
    getMovies(API_URL);
  }
});

// Add smooth scrolling to top when searching
form.addEventListener("submit", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Add additional CSS for error and no results states
const style = document.createElement("style");
style.textContent = `
  .loader-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
  }
  
  .error, .no-results {
    text-align: center;
    padding: 3rem;
    margin: 2rem auto;
    max-width: 600px;
    color: var(--text-color);
  }
  
  .error i, .no-results i {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: var(--accent-color);
  }
  
  .error h2, .no-results h2 {
    margin-bottom: 1rem;
  }
`;
document.head.appendChild(style);