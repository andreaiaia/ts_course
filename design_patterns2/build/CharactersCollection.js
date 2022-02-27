"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
const Sorter_1 = require("./Sorter");
class CharactersCollection extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(left, right) {
        return this.data[left].toLowerCase() > this.data[right].toLowerCase();
    }
    swap(left, right) {
        const char = this.data.split('');
        const leftHand = char[left];
        char[left] = char[right];
        char[right] = leftHand;
        this.data = char.join('');
    }
}
exports.CharactersCollection = CharactersCollection;
