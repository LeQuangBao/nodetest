import _ from 'lodash';
import './style.scss';
import Icon from '../asset/icon.png';
import Data from './data.xml';
import Notes from './data.csv';
import test from './data.json';

function helloWorld() {
    return 'Hello World';
}

console.log(helloWorld());

function generateElement() {
    const element = document.createElement('div');
    const innerElement = document.createElement('div');
    innerElement.innerHTML = _.join(['Hello', 'webpack'], ' ');
    innerElement.classList.add('hello');
    
    const myIcon = new Image();
    myIcon.src = Icon;
    
    element.appendChild(innerElement);
    element.appendChild(myIcon);

    console.log(Data);
    console.log(Notes);
    console.log(test);

    return element;
}
document.body.appendChild(generateElement());