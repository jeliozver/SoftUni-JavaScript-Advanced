function domTraversal(selector) {
    let leafs = $(`${selector} *:not(:has(*))`);
    let deepest = 0;
    let deepestNode;
    leafs.each(function (index, element) {
        let currentDeepness = 0;
        let original = element;
        while(element) {
            currentDeepness++;
            element = $(element).parent()[0];
        }

        if (currentDeepness > deepest) {
            deepest = currentDeepness;
            deepestNode = original;
        }
    });
    let container = $(selector);
    container.addClass('highlight');
    while(deepestNode && deepestNode !== container[0]) {
        $(deepestNode).addClass('highlight');
        deepestNode = $(deepestNode).parent()[0];
    }
}

domTraversal('#content');