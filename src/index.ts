import * as vscode from 'vscode';
import { posix } from 'path';

export function activate(context: vscode.ExtensionContext) {
	vscode.window.showInformationMessage('StackBlitz extension enabled');
	vscode.commands.registerCommand('sb/alert-me', async function () {
		vscode.window.showInformationMessage(``);
	});

}