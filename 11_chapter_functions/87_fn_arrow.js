const doubtA = (a)=> a*2;
console.log(doubtA(10));

const getEnv = () => "staging";
console.log(getEnv());

//Mutiline
const getResult = (score) => {
    if(score > 70) return "Pass";
    return "fail";
}

console.log(getResult(78));
console.log(getResult(43));