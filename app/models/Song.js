export default class Song {
    constructor(song) {
        this.title = song.trackName
        //Change 250x250 if you want a larger image
        this.albumArt = song.artworkUrl60.replace(/60x60/g, "50x50")
        this.artist = song.artistName
        this.collection = song.collectionName
        this.price = song.collectionPrice
        this.preview = song.previewUrl
    }
    get templateSong() {
        return `<div class="col-3 offset-1 songbox" onclick="app.controllers.itunesCtrl.loadPlayer('${this.preview}')" onmouseover="">
    <p class="pryc"><img src=" ${this.albumArt}" alt="">  $ ${this.price}</p>
    <h5>${this.title}</h5>
    <p>${this.artist}</p>
    <p>${this.collection}</p>
</div>
    `
    }

    get templatePlayer() {
        return `
    <source src="${this.preview}" type="audio/ogg">
    <source src="${this.preview}" type="audio/mpeg">
    `
    }
}

