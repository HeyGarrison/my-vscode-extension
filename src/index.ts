import { readFile, writeFile } from 'fs';
import { LocalStorageService } from './localStorageService';
import {ExtensionContext} from 'vscode'

interface ISomeObject {
  hello: boolean
}

export function activate(context: ExtensionContext): any {

  //Create your objects - Needs to be a well-formed JSON object.
  let someObject : ISomeObject = {hello: true}
  let someOtherObject : ISomeObject | null = null;

  //Initialize the global application manager
  let storageManager = new LocalStorageService(context.workspaceState);

  //Read your objects to the Workspace Store
  someOtherObject = storageManager.getValue<ISomeObject>("SomeObject");
  console.log(someOtherObject)

  //Write your objects from the Workspace Store
  storageManager.setValue<ISomeObject>("SomeObject", someObject);

  //Read your objects to the Workspace Store
  console.log(someOtherObject)
}

export function deactivate() {
  
}
