import * as vscode from "vscode";
import IgnoredErrorStatus from "../status/IgnoredError";
import ShowingSolutionStatus from "../status/ShowingSolution";
import OpenSolutionView from "./OpenSolutionView";

function AskToShowSolution() {
  let userInteracted = false;
  const question = vscode.window.showInformationMessage(
    "An already solved error detected. Show solution:",
    "Show Solution",
    "Ignore"
  );

  const timeout = setTimeout(() => {
    if (!userInteracted) {
      vscode.window.showWarningMessage("Automatically Ignored");
      IgnoredErrorStatus();
    }
  }, 15000);

  question.then(
    (selection) => {
      userInteracted = true;
      if (selection === "Show Solution") {
        ShowingSolutionStatus();
        OpenSolutionView();
      } else if (selection === "Ignore") {
        vscode.window.showInformationMessage("You chose to Ignore");
      }
      clearTimeout(timeout);
    },
    (error) => {
      vscode.window.showErrorMessage(`Error: ${error.message}`);
    }
  );
}

export default AskToShowSolution;
