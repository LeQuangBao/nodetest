import _ from 'lodash';
import { generateElement } from './components/asset-management/assetManagement';
import printMe from './print';

// document.body.appendChild(generateElement());

function main() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = 'Click me and check the console';
  btn.onclick = printMe;

  element.appendChild(btn);

  document.body.appendChild(element);
}
main();