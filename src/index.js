
import { sum } from './modules/sum';

const root = document.getElementsByClassName('root');
console.log('root', root);
root.textContent = sum(6, -1).toString(); 