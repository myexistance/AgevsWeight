
// JSON - Javascript Object Notation
// It is similar to Javascript object data type
// It is written in key : value pair
// JSON uses quotes for object properties
// As usual stings are written in quotes

var myData = [
  {
    "age" : 8,
    "weight" : 12
  },
  {
    "age" : 4,
    "weight" : 5.5
  },
  {
    "age" : 11,
    "weight" : 14
  },
  {
    "age" : 4,
    "weight" : 5
  },
  {
    "age" : 3,
    "weight" : 3.5
  },
  {
    "age" : 6.5,
    "weight" : 7
  },
]







google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Age', 'Weight'],
    [myData[0].age, myData[0].weight],
    [myData[1].age, myData[1].weight],
    [myData[2].age, myData[2].weight],
    [myData[3].age, myData[3].weight],
    [myData[4].age, myData[4].weight],
    [myData[5].age, myData[5].weight]
    // [ 8,      12],
    // [ 4,      5.5],
    // [ 11,     14],
    // [ 4,      5],
    // [ 3,      3.5],
    // [ 6.5,    7]
  ]);

  var options = {
    title: 'Age vs. Weight comparison',
    hAxis: {title: 'Age', minValue: 0, maxValue: 15},
    vAxis: {title: 'Weight', minValue: 0, maxValue: 15},
    legend: 'none'
  };

  var chart = new google.visualization.ScatterChart(document.getElementById('chart_div'));

  chart.draw(data, options);
}
