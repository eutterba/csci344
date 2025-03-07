// your function here
function showTrack() {
  const track = `
    <section class="track">
        <img src="https://i.scdn.co/image/ab67616d0000b273f6e31941d10e4819d290af41">
        <div>
            <h3>When the Sun Hits</h3>
            <p>Slowdive</p>
            <p>Souvlaki</p>
        </div>
    </section>`;
  const myElement = document.querySelector("#track-list");
  myElement.insertAdjacentHTML("beforeend", track);
}
