import { window, workspace, RelativePattern } from 'vscode'



export function activate() {
  const folder = workspace.workspaceFolders?.[0];
  if (folder) {
    const watcher = workspace.createFileSystemWatcher(new RelativePattern(folder, '**.*'));

    watcher.onDidChange((e) => {
      console.log(e)
    })
  }
}

export function deactivate() {

}
