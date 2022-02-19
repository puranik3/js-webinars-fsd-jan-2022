// List of tracks that have to be played
let track_list = [
  {
    name: "Demo1",
    artist: "Broke For Free",
    image: "https://picsum.photos/640/360",
    path: "songs/sample1.mp3",
  },
  {
    name: "Every Morning",
    artist: "Anton Vlasov",
    image: "https://picsum.photos/320/180",
    path: "songs/every-morning-18304.mp3",
  },
  {
    name: "Relax and Sleep",
    artist: "Anton Vlasov",
    image: "https://picsum.photos/480/270",
    path: "songs/relax-and-sleep-18565.mp3",
  },
  {
    name: "Uplifting Day",
    artist: "Lesfm",
    image: "https://picsum.photos/240/180",
    path: "songs/uplifting-day-15583.mp3",
  },
];

// Step 1: Select all the elements in the HTML page and assign them to a variable
let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

// Step 2: Specify globally used values
let track_index = 0;
let is_playing = false;
let update_timer;

// Step 3 : Create the audio element for the player
let curr_track = document.createElement("audio");

// loadTrack( track_index ) to load a track and set it up
function loadTrack(track_index) {
    clearInterval( update_timer );
    const current_track = track_list[track_index];

    resetValues();

    // load a new track
    curr_track.src = current_track.path;
    curr_track.load();

    track_art.style.backgroundImage = `url( ${current_track.image} )`;
    track_name.textContent = current_track.name;
    track_artist.textContent = current_track.artist;
    now_playing.textContent = `PLAYING ${track_index + 1} OF ${track_list.length}`;

    random_bg_color();

    update_timer = setInterval( seekUpdate, 1000 );
}

// Set up a random background color
function random_bg_color() {
    let red = Math.floor(Math.random() * (256 - 64)) + 64;
    let green = Math.floor(Math.random() * (256 - 64)) + 64;
    let blue = Math.floor(Math.random() * (256 - 64)) + 64;

    let bgColor = `rgb( ${red}, ${green}, ${blue} )`;

    document.body.style.background = bgColor;
}

// Reset all values to their default
function resetValues() {
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
}

// To switch to playing when paused, and vice versa
function playpauseTrack() {
    if( !is_playing ) {
        playTrack();
    } else {
        pauseTrack();
    }
}

function playTrack() {
    curr_track.play();
    is_playing = true;

    playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}

function pauseTrack() {
    curr_track.pause();
    is_playing = false;

    playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}

function nextTrack() {
    if( track_index < track_list.length - 1 ) {
        track_index++;
    } else {
        track_index = 0;
    }

    loadTrack( track_index );
    playTrack();
}

function prevTrack() {
    if( track_index > 0 ) {
        track_index--;
    } else {
        track_index = track_list.length - 1;
    }

    loadTrack( track_index );
    playTrack();
}

function seekTo() {
    let seekto = curr_track.duration * seek_slider.value / 100;
    curr_track.currentTime = seekto;
}

function setVolume() {
    curr_track.volume = volume_slider.value / 100;
}

// update the progress slider and durations as the music plays
function seekUpdate() {
    let seek_position = 0;

    seek_position = ( curr_track.currentTime / curr_track.duration ) * 100;
    seek_slider.value = seek_position;

    let current_minutes = Math.floor( curr_track.currentTime / 60 );
    let current_seconds = Math.floor( curr_track.currentTime - current_minutes * 60 );
    let duration_minutes = Math.floor( curr_track.duration / 60 );
    let duration_seconds = Math.floor( curr_track.duration - duration_minutes * 60 );

    if( current_seconds < 10 ) {
        current_seconds = '0' + current_seconds;
    }
    if( current_minutes < 10 ) {
        current_minutes = '0' + current_minutes;
    }
    if( duration_minutes < 10 ) {
        duration_minutes = '0' + duration_minutes;
    }
    if( duration_seconds < 10 ) {
        duration_seconds = '0' + duration_seconds;
    }

    curr_time.textContent = `${current_minutes}:${current_seconds}`;
    total_duration.textContent = `${duration_minutes}:${duration_seconds}`;
}

// set the ball rolling when the page loads!
loadTrack(track_index);
