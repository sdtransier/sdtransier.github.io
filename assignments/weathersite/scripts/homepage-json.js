const section = document.querySelector('section');

// Obtain the JSON
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    let groupOfTowns = request.response;
    displayTowns(groupOfTowns);
}

// Create the town information cards
function displayTowns(jsonObj) {
    let towns = jsonObj['towns'];

    towns.forEach(towns => {
        if (towns.name == 'Preston' || towns.name == 'Soda Springs' || towns.name == 'Fish Haven') {
            let myArticle = document.createElement('article');
            let myH2 = document.createElement('h2');
            let myPara1 = document.createElement('p');
            let myPara2 = document.createElement('p');
            let myPara3 = document.createElement('p');
            let myPara4 = document.createElement('p');


            myH2.textContent = towns.name;
            myPara1.textContent = towns.motto;
            myPara2.textContent = 'Year Founded: ' + towns.yearFounded;
            myPara3.textContent = 'Population: ' + towns.currentPopulation;
            myPara4.textContent = 'Annual Rain Fall: ' + towns.averageRainfall + "\"";

            myArticle.appendChild(myH2);
            myArticle.appendChild(myPara1);
            myArticle.appendChild(myPara2);
            myArticle.appendChild(myPara3);
            myArticle.appendChild(myPara4);


            section.appendChild(myArticle);
        }
    });
}