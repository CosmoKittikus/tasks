/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) {
        return [];
    }
    if (numbers.length === 1) {
        return [numbers[0], numbers[0]];
    }
    let numbers2: number[] = [numbers[0], numbers[numbers.length - 1]];
    return numbers2;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    let triple: number[] = [];
    for (let num of numbers) {
        triple.push(num * 3);
    }
    return triple;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    let integer: number[] = [];
    for (let num of numbers) {
        if (isNaN(Number(num))) {
            integer.push(0);
        } else {
            integer.push(Number(num));
        }
    }
    return integer;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    let removedDol: number[] = [];
    for (let amount of amounts) {
        if (amount[0] === "$") {
            if (isNaN(Number(amount.slice(1)))) {
                removedDol.push(0);
            } else {
                removedDol.push(Number(amount.slice(1)));
            }
        } else {
            if (isNaN(Number(amount))) {
                removedDol.push(0);
            } else {
                removedDol.push(Number(amount));
            }
        }
    }
    return removedDol;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    let newMessage: string[] = [];
    for (let message of messages) {
        if (message.endsWith("!")) {
            newMessage.push(message.toUpperCase());
        } else if (!message.endsWith("?")) {
            newMessage.push(message);
        }
    }
    return newMessage;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    let wordNum: string[] = [];
    for (let word of words) {
        if (word.length < 4) {
            wordNum.push(word);
        }
    }
    return wordNum.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true;
    } else {
        let checkedList: string[] = [];
        for (const color of colors) {
            if (color === "red" || color === "blue" || color === "green") {
                checkedList.push(color);
            }
        }
        if (checkedList.length === colors.length) {
            return true;
        } else {
            return false;
        }
    }
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    let placeHoldString: string = "";
    let sum: number = 0;
    if (addends.length === 0) {
        return "0=0";
    } else {
        for (let add of addends) {
            sum = sum + add;
        }
        placeHoldString = sum.toString() + "=";
        for (let add of addends) {
            if (add === addends[addends.length - 1]) {
                placeHoldString = placeHoldString + add.toString();
            } else {
                placeHoldString = placeHoldString + add.toString() + "+";
            }
        }
    }
    return placeHoldString;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let newArray: number[] = [];
    let sum: number = 0;
    let negativeHit: number = 0;
    for (let value of values) {
        if (value >= 0 && negativeHit === 0) {
            newArray.push(value);
            sum = sum + value;
        } else if (value < 0 && negativeHit === 0) {
            negativeHit = 1;
            newArray.push(value);
            newArray.push(sum);
        } else {
            newArray.push(value);
        }
    }
    if (negativeHit === 0) {
        newArray.push(sum);
    }

    return newArray;
}
