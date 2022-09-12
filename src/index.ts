import { readFile, writeFile } from 'fs';
import { window, workspace, RelativePattern, DebugConsoleMode } from 'vscode'



export function activate() {
  localStorage['hello'] = 1
}

export function deactivate() {

}
