import App from "./App.svelte";

let app;

function start() {
  const target = document.getElementById("app");

  if (!target) return;

  target.innerHTML = "";

  app = new App({ target });
}

start();

export default app;
