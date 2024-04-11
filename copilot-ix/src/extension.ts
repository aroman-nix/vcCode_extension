// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { generate_test_file } from './chat_ix.integration';
const path = require('node:path'); 

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export async function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "copilot-ix" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('copilot-ix.generate_file_tests', async () => {
		if(vscode.window.activeTextEditor !== undefined) {
			const fileUri = vscode.window.activeTextEditor?.document.uri ;
			const path_list = path.parse(fileUri.fsPath);
			vscode.window.showInformationMessage(path_list.base + "Copilot tests generation started");
			const file_unit8Array = await vscode.workspace.fs.readFile(fileUri);
			const tests_unit8Array = await generate_test_file(file_unit8Array, fileUri.fsPath);
			await vscode.workspace.fs.writeFile(
				vscode.Uri.parse(path.join(path_list.dir, path_list.name + "_test" + path_list.ext)), 
				tests_unit8Array);
		}
		else {
			vscode.window.showErrorMessage("Working folder not found, open a folder an try again");
		}
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
