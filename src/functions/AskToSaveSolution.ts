import * as vscode from "vscode";
import AddingSolutionStatus from "../status/AddingSolution";
import NotAddingSolutionStatus from "../status/NotSolving";
import OpenSolutionFormView from "./OpenSolutionFormView";

function AskToSaveSolution() {
  let userInteracted = false;
  const question = vscode.window.showWarningMessage(
    "A reoccuring error. Don't you want to add a solution:",
    "Add Solution",
    "Ignore"
  );

  const timeout = setTimeout(() => {
    if (!userInteracted) {
      vscode.window.showWarningMessage("Automatically Ignored");
      NotAddingSolutionStatus();
    }
  }, 15000);

  question.then(
    (selection) => {
      userInteracted = true;
      if (selection === "Add Solution") {
        OpenSolutionFormView();
        AddingSolutionStatus();
      } else if (selection === "Ignore") {
        vscode.window.showWarningMessage("You chose to Ignore");
        NotAddingSolutionStatus();
      }
      clearTimeout(timeout);
    },
    (error) => {
      vscode.window.showErrorMessage(`Error: ${error.message}`);
    }
  );
}

export default AskToSaveSolution;
