;(function() {
  "use strict";

  require("BaseController").init({
    siteName: "Google Play Music",
    playPause: "[data-id=play-pause]",
    playNext: "[data-id=forward]",
    playPrev: "[data-id=rewind]",
    like: ".rating-container [data-rating='5']",
    dislike: ".rating-container [data-rating='1']",

    playState: "[data-id=play-pause].playing",
    song: "#player-song-title",
    artist: "#player-artist",
    album: ".player-album"
  });
})();
