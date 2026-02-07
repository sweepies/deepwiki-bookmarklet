javascript: (function () {
  const path = window.location.pathname.split("/");
  if (window.location.hostname === "github.com" && path.length >= 3) {
    const owner = path[1];
    const repo = path[2];
    window.location.href = `https://deepwiki.com/${owner}/${repo}`;
  } else {
    alert("Please use this bookmarklet on a GitHub repository page.");
  }
})();
