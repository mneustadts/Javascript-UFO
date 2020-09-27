// from data.js
var tableData = data;
//console.log(tableData);

// Get a reference to the table body
var tableBody = d3.select("tablebody");

function getRecords(dt) {
    var dateFormat = new Date(dt);