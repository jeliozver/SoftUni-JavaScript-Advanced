function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2,2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}

// For Judge - start
function getDollarFormatter(formatter) {
    return function (value) {
        return formatter(',', '$', true, value);
    }
}
// For Judge - end

function getLevFormatter(formatter) {
    return function (value) {
        return formatter(',', 'лв', false, value);
    }
}

let dollars = getDollarFormatter(currencyFormatter);
let levs = getLevFormatter(currencyFormatter);
console.log(dollars(5345));
console.log(levs(5345));