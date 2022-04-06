let oddID = [ ];
let evenID = [ ];

for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        evenID.push('evenID');
     } else if (i % 2 !== 0) {
        oddID.push('oddID');
     }
}

console.log("First email segment is = "     +evenID);
console.log("Second email segment is = "      + oddID);
