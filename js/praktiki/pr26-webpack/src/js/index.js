import { sum, substr } from './math';
import pow from './math';
import h1 from './createDom';

const body = document.querySelector('body');
console.log(sum(5,6));
console.log(substr(10,5));
console.log(pow(2,4));
body.append(h1);