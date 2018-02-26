function domTraversal(selector) {
    let container = $(selector);
    let children = container[0].childNodes;
    let nodes = [];
    let deepness = 0;
    getDeepness(children, deepness, nodes);

    function getDeepness(children, deepness, nodes) {
        if (children.length === 0) {
            return;
        }

        children.deepness = deepness;
        nodes.push(children);

        for (let child of children) {
            if (child !== '#text') {
                getDeepness($(child)[0].childNodes, deepness + 1, nodes);
            }
        }
    }

    nodes = nodes.sort((a, b) => b.deepness - a.deepness);
    let deepestNode = $(nodes[0][0]);
    container.addClass('highlight');
    while(deepestNode && deepestNode !== container[0]) {
        $(deepestNode).addClass('highlight');
        deepestNode = $(deepestNode).parent()[0];
    }
}

domTraversal('#content');