const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener("beforeinstallprompt", (event) => {
  window.deferredPrompt = event;

  butInstall.classList.toggle("hidden", false);
});

//TODO: FIX ISSUES WITH INSTALL CLICK EVENT
butInstall.addEventListener("click", async () => {
  const promptEvent = window.deferredPrompt;

  if (!promptEvent) {
    return;
  }
  promptEvent.prompt();
  window.deferredPrompt = null;
  butInstall.classList.toggle("hidden", true);
});

window.addEventListener("appinstalled", (event) => {
  window.deferredPrompt = null;
});