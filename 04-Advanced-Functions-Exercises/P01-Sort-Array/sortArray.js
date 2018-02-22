function sortArray(array, criteria) {

    let sortingCriteria = {
      'asc': sortAscending,
      'desc': sortDescending,
    };

    function sortAscending(a, b) {
        return a - b;
    }

    function sortDescending(a, b) {
        return b - a;
    }

    return array.sort(sortingCriteria[criteria])
}

// console.log(sortArray([14, 7, 17, 6, 8], 'asc'));
// console.log(sortArray([14, 7, 17, 6, 8], 'desc'));