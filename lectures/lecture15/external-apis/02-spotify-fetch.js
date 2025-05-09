// alternative syntax (using "then" instead of async / await):
const showSpotifyResults = (term, type, limit) => {
  const rootURL = "https://www.apitutor.org/spotify/simple/v1/search";
  const endpoint = `${rootURL}?q=${term}&type=${type}&limit=${limit}`;
  fetch(endpoint)
    .then((response) => response.json())
    .then((jsonData) => {
      console.log(`Matches for ${term} + ${type}:`, jsonData);
      for (const track of jsonData) {
        console.log(track.album.img_url);
      }
    });
};

// note that the albums might print before the tracks
// (b/c network request is less expensive):
showSpotifyResults("Chapell Roan", "track", 10);
showSpotifyResults("The Crane Wives", "album", 2);
