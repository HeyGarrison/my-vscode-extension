import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log('Activate');
	vscode.commands.registerCommand('sb/alert-me', async function () {
		vscode.window.showInformationMessage(`A message!`);
	});

}