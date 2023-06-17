import { MAX_VALUE, MIN_VALUE } from "./Constants";

export function range() {
    return Array.from(Array(MAX_VALUE - MIN_VALUE + 1).keys()).map(x => x + MIN_VALUE);
}