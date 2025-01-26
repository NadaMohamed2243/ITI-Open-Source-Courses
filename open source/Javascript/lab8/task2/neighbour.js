document.addEventListener('DOMContentLoaded', () => {
    let inputContryBox = document.querySelector('input[name=country]');
    console.log(inputContryBox);

    inputContryBox.addEventListener('input', () => {
        console.log(inputContryBox.value);
        let countryName = inputContryBox.value.trim();
        if (countryName) {
            userDataJsonPlaceHolder(countryName);
        }
    });
});

const userDataJsonPlaceHolder = async function (countryName) {
    try {
        let response = await fetch(`https://restcountries.com/v2/name/${countryName}`);
        if (!response.ok) {
            throw new Error(`Country not found: ${countryName}`);
        }
        let countries = await response.json();
        console.log(countries);

        // Update primary country information
        let countryNameDiv = document.querySelector('#country-name');
        let countryImg = document.querySelector('#countryPhoto');
        let continentDiv = document.querySelector('#continent');
        let PopulationSpan = document.querySelector('#Population');
        let LanguagesSpan = document.querySelector('#Languages');
        let CurrencySpan = document.querySelector('#Currency');

        countryNameDiv.innerHTML = countries[0].name;
        continentDiv.innerHTML = countries[0].region;
        CurrencySpan.innerHTML = countries[0].currencies[0].name;
        LanguagesSpan.innerHTML = countries[0].languages[0].name;
        countryImg.src = countries[0].flags.png;
        PopulationSpan.innerHTML = (countries[0].population / 1000000).toFixed(2) + " M";

        // Fetch and display neighbor country
        const neighborCode = countries[0].borders[0]; // Get the first neighbor code
        if (neighborCode) {
            fetch(`https://restcountries.com/v2/alpha/${neighborCode}`)
                .then((neighborResponse) => {
                    if (!neighborResponse.ok) {
                        throw new Error(`Neighbor country not found: ${neighborCode}`);
                    }
                    return neighborResponse.json();
                })
                .then((neighborData) => {
                    let cardDiv = document.querySelector('.card');
                    cardDiv.onclick = function () {
                        console.log('Displaying Neighbor Country:', neighborData);

                        // Clone and update the card
                        let neighborDiv = cardDiv.cloneNode(true);
                        neighborDiv.querySelector('#country-name').innerHTML = neighborData.name;
                        neighborDiv.querySelector('#countryPhoto').src = neighborData.flags.png;
                        neighborDiv.querySelector('#continent').innerHTML = neighborData.region;
                        neighborDiv.querySelector('#Population').innerHTML = 
                            (neighborData.population / 1000000).toFixed(2) + " M";
                        neighborDiv.querySelector('#Languages').innerHTML = 
                            neighborData.languages[0].name;
                        neighborDiv.querySelector('#Currency').innerHTML = 
                            neighborData.currencies[0].name;

                        // Append the updated clone to the body
                        document.body.appendChild(neighborDiv);
                    };
                })
                .catch((error) => {
                    console.error('Error fetching neighbor country data:', error.message);
                });
        } else {
            console.log('No neighboring countries found.');
        }
    } catch (error) {
        console.error('Error fetching country data:', error.message);
    }
};



