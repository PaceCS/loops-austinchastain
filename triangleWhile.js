// triangleWhile takes an input n and logs to the console a one-sided triangle of hashmarks w/ a height of n
function triangleWhile(userInput) {
    // row will hold the string to be printed on this row
    let row = '#';
    // counter will hold the value of the counter
    let counter = 0;

    // Fill in the while loop with the right condition on counter
    while(counter < userInput) {
        console.log(row);
        counter += 1;
            row += '#'
    }
}


//Try out your function here.
triangleWhile(5);



















// -------------------------------------------------------------------------------
// Testing - DON'T CHANGE ANYTHING BELOW
const printme = console.log;
let out = [];
console.log = function log(d) {
    out.push(d);
};
const N = 4;
triangleWhile(N);
printme('\n Testing...');
printme(`\t did you print the proper number of lines?\t ${out.length == N} `);
let val = true;
for (let i = 0; i < N; i += 1) {
    let row = '#';
    for (let j = 0; j < i; j += 1){
        row += '#';
    }
    let tVal = out[i] == row;
    val = val && tVal;
}
printme(`\t did you print a correct triangle?\t ${val}`);
