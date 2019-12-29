// from data.js
var tableData = data;
var tbody=d3.select('tbody');
console.log(data);

// YOUR CODE HERE!
function pushData(dataset){
    dataset.forEach(function(dataEntry){
        var row =tbody.append('tr');
        Object.entries(dataEntry).forEach(function([key,value]){
            console.log(dataEntry, key, value);
            var cell= row.append('td');
            cell.text(value);
    });


});
};
pushData(data);

remaining= filter, run, push