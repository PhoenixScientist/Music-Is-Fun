import ItunesService from "./itunes-service.js";
//Private
const itunesService = new ItunesService()

function drawSongs() {
  //changes button back to GET MUSIC once songs are loaded
  document.querySelector('#get-music-button').textContent = 'GET MUSIC'
  //console.log(itunesService.Songs)
  //need to get the songs
  let songs = itunesService.Songs
  // need to create a template variable
  let template = ''
  //iterate over the songs array and for each song add some html to the template variable
  for (let i = 0; i < songs.length; i++) {
    let song = songs[i]
    template += song.templateSong
  }
  // assign the template as the innerHTML of an element on the DOM
  document.getElementById('song-holder').innerHTML = template
}


//PUBLIC
class ItunesController {
  constructor() {
    //BE SURE TO REGISTER YOUR SUBSCRIBERS!!!!!!!
    itunesService.addSubscriber("songs", drawSongs)

  }


  //DO NOT MODIFY THIS METHOD
  getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    //changes the button to loading while songs load
    document.querySelector('#get-music-button').textContent = 'LOADING....'
    itunesService.getMusicByArtist(artist)
  }

  loadPlayer(preview) {
    document.getElementById('playerHere').innerHTML = `
    <audio controls>
    <source src="${preview}" type="audio/mpeg" />
            Your browser does not support the audio element.
        </audio>
    `
  }
}


export default ItunesController