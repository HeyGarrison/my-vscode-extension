import { readFile, writeFile } from 'fs';



export function activate() {
  console.log('does this work')
  window['localStorage']['hello'] = 'yes'
  console.log(window['localStorage']['hello']);
}

export function deactivate() {
  
}
