export function fetchDogImages() {
    fetch('https://dog.ceo/api/breeds/image/random/6')
      .then(response => response.json())
      .then(data => {
        this.images[1] = data.message;
      })
      .catch(error => console.error(error));
  }
  