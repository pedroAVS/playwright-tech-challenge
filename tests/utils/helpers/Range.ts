import { MAX_VALUE, MIN_VALUE } from "./Constants";
    
// Generates an array of consecutive numbers within a specified range.
export function range() {
    return Array.from(Array(MAX_VALUE - MIN_VALUE + 1).keys()).map(x => x + MIN_VALUE);
}