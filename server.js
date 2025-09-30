const express = require('express');
const app = express();

app.get("/", (request, response) => {
  response.send("Pentest Demo API");
});

app.get("/search", (request, response) => {
  const { q } = request.query;
  if (q) {
    response.send(`Search result for "${q}": Gotcha! Ethical pentest demo - you've been pwned. Join our track!`);
  } else {
    response.send("No search query provided.");
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));
