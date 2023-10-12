const shortBtn = document.getElementById("short-it");
const reloadBtn = document.getElementById("reload");

shortBtn.addEventListener("click", shortUrl);

// let originalUrl;
function shortUrl() {
  let originalUrl = document.getElementById("originalUrl").value;

  let apiUrl ="https://tinyurl.com/api-create.php?url=" + encodeURIComponent(originalUrl);

  shortenedUrlTextarea = document.getElementById("ShortendUrl");

  fetch(apiUrl).then(response => response.text()).then(data => {
      shortenedUrlTextarea.value = data;
    }).catch(error => {
      shortenedUrlTextarea.value = "Sorry, Unable to Short Your Url...";
    });
}

reloadBtn.addEventListener('click', () => {
    location.reload();
});