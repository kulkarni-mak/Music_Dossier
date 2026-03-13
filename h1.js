const audio = document.getElementById("audio");
const playBtn = document.getElementById("playBtn");
const songName = document.getElementById("songName");
const songSinger = document.getElementById("songSinger");
const songMovie = document.getElementById("songMovie");
const songDesc = document.getElementById("songDesc");
const moviePoster = document.getElementById("moviePoster");
const downloadLink = document.getElementById("downloadLink");
const songButtons = document.querySelectorAll(".song-btn");

let isPlaying = false;

playBtn.addEventListener("click", () => {
  if (!isPlaying) {
    audio.play();
    playBtn.innerHTML = "⏸";
    isPlaying = true;
  } else {
    audio.pause();
    playBtn.innerHTML = "▶";
    isPlaying = false;
  }
});

const songs = {

  "Bijuria": {
    file: "Bijuria Sunny Sanskari Ki Tulsi Kumari 320 Kbps.mp3",
    singer: "Sonu Nigam",
    movie: "Sunny Sanskari Ki Tulsi Kumari (2023)",
    desc: "A festive energetic song celebrating traditional rhythm with modern vibes.",
    poster: "sunny.jpg"
  },

  "Panwadi": {
    file: "Panwadi Sunny Sanskari Ki Tulsi Kumari 320 Kbps.mp3",
    singer: "Khesari Lal Yadav",
    movie: "Sunny Sanskari Ki Tulsi Kumari (2023)",
    desc: "A vibrant dance track blending folk beats and commercial style.",
    poster: "sunny.jpg"
  },

  "Ishq Jalakar": {
    file: "Ishq Jalakar Dhurandhar 320 Kbps.mp3",
    singer: "Shashwat Sachdev",
    movie: "Dhurandhar (2023)",
    desc: "A romantic track expressing intensity of love and sacrifice.",
    poster: "dhurandhar.jpg"
  },

  "Title Track Dhurandhar": {
    file: "Title Track Dhurandhar 320 Kbps.mp3",
    singer: "Hanumankind",
    movie: "Dhurandhar (2023)",
    desc: "Powerful title anthem reflecting courage and ambition.",
    poster: "dhurandhar.jpg"
  },

  "Raanjhan": {
    file: "Raanjhan Do Patti 320 Kbps.mp3",
    singer: "Parampara Tandon",
    movie: "Do Patti (2023)",
    desc: "A soulful melody expressing longing and emotional depth.",
    poster: "dopatti.jpg"
  },

  "Slow Motion Angreza": {
    file: "Slow Motion Angreza Bhaag Milkha Bhaag 320 Kbps.mp3",
    singer: "Shankar-Ehsaan-Loy",
    movie: "Bhaag Milkha Bhaag (2013)",
    desc: "A high-energy Punjabi styled celebratory song.",
    poster: "milkha.jpg"
  },

  "Maston Ka Jhund": {
    file: "Maston Ka Jhund Bhaag Milkha Bhaag 320 Kbps.mp3",
    singer: "Divya Kumar",
    movie: "Bhaag Milkha Bhaag (2013)",
    desc: "An energetic anthem celebrating determination and youth.",
    poster: "milkha.jpg"
  },

  "Title Track Saiyaara": {
    file: "Title Track Saiyaara 320 Kbps.mp3",
    singer: "Faheem Abdullah",
    movie: "Saiyaara (2022)",
    desc: "A romantic melody highlighting emotional connection.",
    poster: "saiyaara.jpg"
  }
};

songButtons.forEach(button => {
  button.addEventListener("click", () => {

    const data = songs[button.innerText];

    audio.src = data.file;
    downloadLink.href = data.file;

    songName.innerText = button.innerText;
    songSinger.innerText = "Singer: " + data.singer;
    songMovie.innerText = "Movie: " + data.movie;
    songDesc.innerText = data.desc;

    moviePoster.src = data.poster;

    audio.play();
    playBtn.innerHTML = "⏸";
    isPlaying = true;

  });
});