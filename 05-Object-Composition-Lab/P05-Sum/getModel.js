$(function () {
    let model = getModel();
    model.init('#num1', '#num2', '#result');
    $('#sumButton').on('click', model.add);
    $('#subtractButton').on('click', model.subtract);
// For Judge
    function getModel() {
        let selectorOne;
        let selectorTwo;
        let selectorResult;

        function init(selector1, selector2, resultSelector) {
            selectorOne = $(selector1);
            selectorTwo = $(selector2);
            selectorResult = $(resultSelector);
        }

        function add() {
            selectorResult.val(Number(selectorOne.val()) + Number(selectorTwo.val()));
        }

        function subtract() {
            selectorResult.val(Number(selectorOne.val()) - Number(selectorTwo.val()));
        }

        return {
            init,
            add,
            subtract
        };
    }
// For Judge
});