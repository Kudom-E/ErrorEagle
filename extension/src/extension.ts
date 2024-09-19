import * as vscode from "vscode";
import AskToReport from "./functions/AskToReport";
import AskToShowSolution from "./functions/AskToShowSolution";
import AskToSaveSolution from "./functions/AskToSaveSolution";
import SearchForSolutions from "./functions/SearchForSolution";

function activate(context: vscode.ExtensionContext) {
  let catchingError = vscode.commands.registerCommand(
    "erroreagleobserver.catchingError",
    () => {
      const exist = false;
      const solved = false;

      if (!exist) {
        AskToReport();
      } else if (exist) {
        if (solved) {
          AskToShowSolution();
        } else {
          AskToSaveSolution();
        }
      }
    }
  );
  let checkingSolution = vscode.commands.registerCommand(
    "erroreagleobserver.checkForSolution",
    () => {
      SearchForSolutions();
    }
  );

  context.subscriptions.push(catchingError, checkingSolution);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
