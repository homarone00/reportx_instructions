(function () {
  const button = document.querySelector("[data-share-button]");

  if (!button) {
    return;
  }

  const originalText = button.textContent;

  async function copyPageLink() {
    const url = window.location.href;

    try {
      await navigator.clipboard.writeText(url);
      button.textContent = "Link copied";
    } catch (error) {
      button.textContent = "Copy failed";
    }

    window.setTimeout(() => {
      button.textContent = originalText;
    }, 1800);
  }

  button.addEventListener("click", copyPageLink);
})();
