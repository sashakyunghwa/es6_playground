
// const newEle = document.createElement('h1');

// newEle.innerText = 'This is core JS';

// document.getElementById('root').appendChild(newEle);

import addHeaderToDom from './helpers';
import logFunction, { add, subtract, multiply, divide } from './math';



logFunction();

addHeaderToDom('3 + 7 = ' + add(3, 7));
addHeaderToDom('9 - 7 = ' + subtract(9, 7));
addHeaderToDom('6 * 7 = ' + multiply(6, 7));
addHeaderToDom('21 / 7 = ' + divide(21, 7));




// addHeaderToDom('This is a new header');

// addHeaderToDom('Here is another one');
