import { readFile, writeFile } from 'fs';
import { window, workspace, RelativePattern, DebugConsoleMode } from 'vscode'



export function activate() {
  console.log('does this work')
  localStorage['hello'] = 'yes'
  console.log(localStorage['hello']);
}

export function deactivate() {
  
}
