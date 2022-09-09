import { readFile, writeFile } from 'fs';
import { window, workspace, RelativePattern, DebugConsoleMode } from 'vscode'



export function activate() {
  console.log(124)
  const folder = workspace.workspaceFolders?.[0];
  if (folder) {
    const watcher = workspace.createFileSystemWatcher(new RelativePattern(folder, '**.*'));

    watcher.onDidChange((e) => {
      readFile(e.path, (error, data) => {
        const file = data.toString();
        // persist to indexdb
      })
    })
  }
}

export function deactivate() {

}
