# 🎬 Movie Critic - "Should I Watch It?" 🍿

A modern, responsive web application that helps users discover movies and make informed viewing decisions based on ratings and overview information.

## ✨ Features

- 🔍 **Movie Discovery**: Browse popular movies sorted by popularity
- 🔎 **Search Functionality**: Find specific movies by title
- ⭐ **Rating System**: Color-coded rating system for quick decision making
  - 🟢 Green: 7.5+ (Highly Recommended)
  - 🟠 Orange: 7.0-7.4 (Worth Watching)
  - 🔴 Red: Below 7.0 (Consider Carefully)
- 📝 **Movie Details**: View movie overviews with a smooth hover effect
- 📱 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- 🎨 **Modern UI**: Clean, intuitive interface with visual feedback

## 🛠️ Technologies Used

- 📄 **HTML5**: Structure and semantic markup
- 🎭 **CSS3**: Styling with custom properties, flexbox, and animations
- 💻 **JavaScript**: Dynamic content loading and interaction
- 🌐 **TMDb API**: Movie data source
- 🔣 **Font Awesome**: Icons for enhanced visual elements
- 🔤 **Google Fonts**: Montserrat for typography

## 🔄 How It Works

The application fetches movie data from The Movie Database (TMDb) API and displays it in an intuitive card layout. Users can:

1. 🏠 View popular movies on the homepage
2. 🔍 Search for specific movies using the search bar
3. ⭐ See ratings highlighted by color for quick decision-making
4. 👆 Hover over movie cards to reveal detailed overviews

## 🚀 Setup and Installation

1. 📥 Clone the repository:
   ```
   git clone https://github.com/yourusername/movie-critic.git
   ```

2. 📁 Navigate to the project directory:
   ```
   cd movie-critic
   ```

3. 🔑 Get your API key from [TMDb](https://developers.themoviedb.org/3):
   - Sign up for an account
   - Request an API key
   - Replace `${KEY}` in the script.js file with your actual API key

4. 🌐 Open `index.html` in your browser or use a local server:
   ```
   # Using Python's built-in server
   python -m http.server
   ```

## 📂 Project Structure

```
movie-critic/
├── index.html     # Main HTML structure
├── style.css      # CSS styling
├── script.js      # JavaScript functionality
└── README.md      # Project documentation
```

## 🎨 Customization

You can easily customize the application by modifying the CSS variables in the `:root` selector:

```css
:root {
  --primary-color: #0f1035;
  --secondary-color: #1a1b4b;
  --accent-color: #5d43ff;
  /* Add more variables as needed */
}
```

## 🔮 Future Enhancements

- 📄 Add pagination for browsing more movies
- 🏷️ Implement genre filtering
- 📋 Create a watchlist feature with local storage
- 📺 Add trailer viewing functionality
- 🌓 Implement dark/light theme toggle

## ⚠️ API Usage Note

This project uses the TMDb API for movie data. Please note that you should obtain your own API key for production use. The TMDb API has usage limits and terms of service that should be followed.

## 👏 Credits

- 👨‍💻 Created by Ritesh Kadam
- 🎞️ Movie data provided by [The Movie Database (TMDb)](https://www.themoviedb.org/)
- 🎯 Icons from [Font Awesome](https://fontawesome.com/)
- 🔤 Fonts from [Google Fonts](https://fonts.google.com/)

## 📜 License

This project is released under the MIT License. See the LICENSE file for details.

---

*Note: This project is for educational purposes only. The TMDb API should be used according to their terms of service.* 🎓
