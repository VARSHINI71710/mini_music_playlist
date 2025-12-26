const songs = [
  {
    title: "Monica",
    artist: "Pooja Hedge, Soubin Shahir",
    src: "songs/monica.mp3",
    cover: "images/Screenshot 2025-12-24 154350.png"
  },
  {
    title: "Singari Video Song - Dude",
    artist: "Pradeep Ranganathan, Mamitha Baiju",
    src: "songs/Singari Video Song _ Dude _ Pradeep Ranganathan, Mamitha Baiju _ @SaiAbhyankkar _ Keerthiswaran.mp3",
    cover: "images/Screenshot 2025-12-24 154413.png"
  }
];

const audio = document.getElementById("audio");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const playlist = document.getElementById("playlist");

songs.forEach(song => {
  const div = document.createElement("div");
  div.className = "song";
  div.innerText = song.title;

  div.onclick = () => playSong(song);
  playlist.appendChild(div);
});

function playSong(song) {
  title.innerText = song.title;
  artist.innerText = song.artist;
  audio.src = song.src;
  audio.play();
}