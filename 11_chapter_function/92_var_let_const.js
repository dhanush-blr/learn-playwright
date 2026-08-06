// var a = 10;
// console.log(a); // 10
// // Var - Function Scoped(), Traitor

// // Define
// function printHello(){
//     console.log("Hello Dhanush!");
//     var a = 20;
//     console.log(a); // 20
//     if(true){
//         var a = 30;
//         console.log(a); // 30
//     }
//     console.log(a); //20

// }

// printHello();


// let - Block Scoped

let b =20; // Global Scope
console.log(b); //  20

function printHello(){
        console.log("Hello Dhanush!");
        let b = 30; // Local Scope
        console.log(b); // 30
        if(true){
            let b = 5;
            console.log(b); // 5
        }
        console.log("let ->",b);   // 30
}

// Calling of the function
printHello();
//console.log(b);

const pi = 3.14;
console.log(pi);
pi = 3.14159; // Assignment to constant variable.
console.log(pi);