  
const tableData = data;
console.log(tableData);

// Refer to the table body
function appendTable(data) {
    d3.select('tbody').html('');
    // Sighting values for each column
    data.forEach((selection) => {
        // Append table row `tr` for each UFO Sighting object
        var tableRow = d3.select('tbody').append('tr');
        // Use .values to find each UFO Sighting value
        Object.values(selection).forEach((value) => {
            var tableData = tableRow.append('td');
            tableData.text(value);
        });
    })
}

appendTable(tableData);

function clickInput() {
    // Stop the page auto refresh
    d3.event.preventDefault();
    // Select the input date
    var date = d3.select('#datetime').property('value');
    // Filter Data with datetime equal to input value
    var filteredData = tableData;
    if (date) {
        filteredData = filteredData.filter((row) => row.datetime === date);
    }
    appendTable(filteredData);
}
// Call functions
d3.selectAll('#filter-btn').on('click', clickInput);