"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
const Sorter_1 = require("./Sorter");
class NumbersCollection extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    compare(left, right) {
        return this.data[left] > this.data[right];
    }
    swap(a, b) {
        const leftVal = this.data[a];
        this.data[a] = this.data[b];
        this.data[b] = leftVal;
    }
    get length() {
        return this.data.length;
    }
}
exports.NumbersCollection = NumbersCollection;
