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
        
        let countryNameDiv = document.querySelector('#country-name');
        let countryImg = document.querySelector('#countryPhoto');
        let continentDiv = document.querySelector('#continent');
        let PopulationSpan = document.querySelector('#Population');
        let LanguagesSpan = document.querySelector('#Languages');
        let CurrencySpan = document.querySelector('#Currency');

        countryNameDiv.innerHTML=countries[0].name
        continentDiv.innerHTML=countries[0].region
        CurrencySpan.innerHTML=countries[0].currencies[0].name
        LanguagesSpan.innerHTML=countries[0].languages[0].name
        countryImg.src = countries[0].flags.png;
        PopulationSpan.innerHTML =(countries[0].population) /1000000
        
    } catch (error) {
        console.error('Error fetching country data:', error.message);
    }
};



