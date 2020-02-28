"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function arrayMove(array, from, to) {
    var arrayCopy = array.slice();
    var startIndex = to < 0 ? arrayCopy.length + to : to;
    var item = arrayCopy.splice(from, 1)[0];
    arrayCopy.splice(startIndex, 0, item);
    return arrayCopy;
}
exports.default = arrayMove;
