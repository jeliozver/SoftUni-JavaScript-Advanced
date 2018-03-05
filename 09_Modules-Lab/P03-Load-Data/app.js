let container = require('./sortAndFilter');
let functions = container.sortAndFilter();

// console.log(functions.sort('shipTo'));
// console.log(functions.filter('status', 'shipped'));

result.sort = functions.sort;
result.filter = functions.filter;