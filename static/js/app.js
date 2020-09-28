  
var tableData = data;


function appendTable(data) {
    d3.select('tbody').html('');
    data.forEach((selection) => {
        var tableRow = d3select('tbody').append('tr');
        Object.entries(selection).forEach((value) => {
