import { Sorter } from "./Sorter";

export class NumbersCollection extends Sorter{
    constructor(public data: number[]) {
        super();
    }

    compare(left: number, right: number): boolean {
        return this.data[left] > this.data[right];
    }

    swap(a: number, b: number): void {
        const leftVal = this.data[a];
        this.data[a] = this.data[b];
        this.data[b] = leftVal;
    }

    get length(): number {
        return this.data.length;
    }
}