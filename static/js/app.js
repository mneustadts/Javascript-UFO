  
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
