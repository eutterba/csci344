// your function here
function changeClass(theme) {
  const bod = document.querySelector("body");
  if (bod.className != theme) {
    bod.className = `${theme}`;
  } else {
    bod.className = "";
  }
}
