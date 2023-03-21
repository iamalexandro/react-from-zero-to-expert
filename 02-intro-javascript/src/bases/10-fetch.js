const apiKey = "7LRnA7T3RRpHGegzdi1T0bwngQzrZJ7b";

const request = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

request
  .then((resp) => resp.json())
  .then(({ data }) => {
    const { url } = data.images.original;

    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  })
  .catch(console.warn);
