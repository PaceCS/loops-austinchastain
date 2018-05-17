
// The function min will take in an array and log its minimum value.
function min(inArray) {
    // We do this by stepping through each entry of the array.
    // First, set the minimum to be the first value in the array.
    let min = inArray[0];

    // Now go through all the remaining entries of the array
    // and determine if the current entry should become the new minimum
    for (let i = 1; i < inArray.length; i += 1) {
        // If the current value is less than the minimum then it becomes the new minimum
        if (inArray[i] < min) {
            min = inArray[i];
        }
    }

    // Now that the for loop has finished, log the minimum to the console.
    console.log("The minimum value is " + min + ".");
}

// The function max will take in an array and log its maximum value.
function max(inArray) {
    let max = inArray[0]
    for (let i = 1; i < inArray.length; i += 1) {
        if (inArray[i] > max) {
            max = inArray[i];
        }
    }
    console.log("The maximum value is " + max + ".");
}

// The function sum will take in an array and log the sum of the array.
function sum(inArray) {
    let num = inArray[0];
    for(let i=1; i  < inArray.length; i +=1) {
        num = num + inArray[i]
    }
    console.log('The sum of the array is '  + num +  ".")
}

// The function average will take in an array and log the average of the values.
function average(inArray) {
    let num = inArray[0];
    for(let i=1; i  < inArray.length; i +=1) {
        num = num + inArray[i]
    }
    let avg = num/inArray.length;
    console
}



//Try out your function here.
const testArray = [1, 4, 5, 6, 9];
min(testArray);
max(testArray);
sum(testArray);
average(testArray);













// -------------------------------------------------------------------------------
// Testing - DON'T CHANGE ANYTHING BELOW
const printme = console.log;
let out = [];
console.log = function log(d) {
    out.push(d);
};
printme('\nTesting...');
const a = [[1, 3, 5], [10, 20, 30], Array.from(Array(90).keys())];
const result = [[1, 5, 9, 3], [10, 30, 60, 20], [0, 89, 4005, 44.5]];
const log = [true, true, true, true];
for (let i = 0; i < a.length; i += 1) {
    out = [];
    [min, max, sum, average].forEach((j) => {
        j(a[i]);
    });
    log[0] = log[0] && (out[0] == `The minimum value is ${result[i][0]}.`);
    log[1] = log[1] && (out[1] == `The maximum value is ${result[i][1]}.`);
    log[2] = log[2] && (out[2] == `The sum of the array is ${result[i][2]}.`);
    log[3] = log[3] && (out[3] == `The average of the array is ${result[i][3]}.`);
}
printme(`\t did you properly implement min?\t ${log[0]} `);
printme(`\t did you properly implement max?\t ${log[1]}`);
printme(`\t did you properly implement sum?\t ${log[2]}`);
printme(`\t did you properly implement average?\t ${log[3]}`);
