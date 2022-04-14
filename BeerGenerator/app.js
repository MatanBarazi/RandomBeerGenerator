document.addEventListener('DOMContentLoaded', () => {
    const beerBtn = document.querySelector('.beer-button');
    const randomBeer = document.querySelector('.random-beer');
    const descriptionDisplay = document.querySelector('.description');

    function getData()
    {
        descriptionDisplay.textContent = "Loading...";
        fetch('https://api.punkapi.com/v2/beers/random')
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data)
                const name = data[0].name;
                const description = data[0].description;
                const {volume} = data[0];
                const volumeValue = volume.value;
                const volumeUnit = volume.unit;

                randomBeer.textContent = name + ' ' + volumeValue + ' ' + volumeUnit;
                descriptionDisplay.textContent = description;
            })
            .catch(error => {
                alert("Something went wrong :( ");
            })
    }

    beerBtn.addEventListener('click', getData);
 
})