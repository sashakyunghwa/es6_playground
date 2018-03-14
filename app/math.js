export function add(x,y){
    return x + y;
}

export function subtract(x, y){
    return x -y;
}

export function multiply(x, y){
    return x * y;
}

export function divide(x, y){
    return x / y;
}

export default () => {
    console.log('This is the default export of math.js');
}