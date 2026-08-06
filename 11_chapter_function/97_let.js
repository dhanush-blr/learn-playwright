let a = "Dhanush";
// 10,000lines 
if(true){
    console.log(a); 
    let a = "temp";
}

// Temporal Dead Zone

// Global Scope
// a = "Dhanush"
// Enter Block , Block Scope
//  a = TDZ (exist but not initialized)
// console.log(a);