function move(direction) {
    let elemToMove = $('#towns').find('option:selected');

    if (elemToMove.length > 0) {
        if (direction === 1) {
            elemToMove.insertAfter(elemToMove.next());
        } else {
            elemToMove.insertBefore(elemToMove.prev());
        }
    }
}