const environmentUrls = new Map();

environmentUrls.set("localhost", "http://localhost:8080");
environmentUrls.set(
  "book-store-web-p.herokuapp.com",
  "https://book-store-demo-p.herokuapp.com"
);

export default environmentUrls.get(window.location.hostname);
