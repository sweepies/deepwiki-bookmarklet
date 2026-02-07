javascript: (function () {
  const path = window.location.pathname.split("/");
  if (window.location.hostname === "github.com" && path.length >= 3) {
    const owner = path[1];
    const repo = path[2];
    const url = `https://deepwiki.com/${owner}/${repo}`;
    window.open(url, "_blank", "noopener,noreferrer");
  } else {
    alert("Please use this bookmarklet on a GitHub repository page.");
  }
})();
