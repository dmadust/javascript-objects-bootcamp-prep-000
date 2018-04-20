var playlist = { 
  aviici : "Wake Me Up",
  ladyGaga : "Born This Way",
  beyonce : "Crazy in Love"
};

function updatePlaylist(playlist, artist, title) {
  playlist.artist = title;
  return playlist;
}

function removeFromPlaylist(playlist, artist) {
  delete playlist.artist;
  return playlist;
}