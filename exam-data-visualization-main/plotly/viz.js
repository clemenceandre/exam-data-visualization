fetch('data.json')
    .then((response) => response.json())
    .then((data) => run_visualization(data));

function run_visualization(data) {
   //on fait appelle à la fonction donnée
   sortByCountryPopulation(data);

   const top30Countries = data.slice(-30);

   // On utilise map pour récupérer le nom du pays et le nombre pour la population
   const countries = top30Countries.map(d => d.country);
   const populations = top30Countries.map(d => d.population);

   // On créer le bar chart
   const trace = {
       x: countries,
       y: populations,
       type: 'bar'
   };

   const layout = {
       title: 'Top 30 Countries by Population',
       xaxis: {
           title: 'Country',
           tickangle: -45
       },
       yaxis: {
           title: 'Population'
       },
       margin: {
           t: 40,
           b: 120
       }
   };

   Plotly.newPlot('data-viz', [trace], layout);
}

function sortByCountryPopulation(data) {
    data.sort((acc, value) => acc.population < value.population ? -1 : 1);
}