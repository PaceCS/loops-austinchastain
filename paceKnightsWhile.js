// paceKnightsWhile takes an input userInput and logs an appropriate output
function paceKnightsWhile(userInput) {
    let counter = 1;

    // Fill in the appropriate condition for the while loop
    while(counter <= userInput) {
        let div3;
        let div5;

        // First determine if counter is divisible by 3
        if (counter % 3 == 0)
            div3 = true;
        else {
            div3 = false;
        }

        // Next determine if counter is divisible by 5
        if (counter % 5 == 0) {
            div5 = true;
        } else {
            div5 = false;
        }

        // Now log the appropriate response to the console
        if (div3 && div5) {
            console.log("Pace Knights")
        } else if (div3) {
            console.log("Pace")
        } else if (div5) {
            console.log("Knights")
        } else {
            console.log(counter)
        }

        counter += 1;
    }
}

//Try out your function here.
paceKnightsWhile(20);


























// -------------------------------------------------------------------------------
// Testing - DON'T CHANGE ANYTHING BELOW
const printme = console.log;
const out = [];
console.log = function log(d) {
    out.push(d);
};
const N = 30;
paceKnightsWhile(N);
printme('\nTesting...');
printme(`\t did you print the proper number of lines?\t ${out.length == N} `);
let val = true;
for (let i = 1; i <= N; i += 1) {
    let tVal;
    const row1 = i % 3 == 0 ? 'Pace' : '';
    const row2 = i % 5 == 0 ? 'Knights' : '';
    if (i % 3 != 0 && i % 5 != 0) {
        tVal = out[i - 1] == i;
    } else {
        tVal = out[i - 1] == `${row1} ${row2}`.trim();
    }
    val = val && tVal;
}
printme(`\t did you print a correct output?\t ${val}`);
