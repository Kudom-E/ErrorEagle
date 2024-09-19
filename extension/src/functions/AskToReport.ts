import * as vscode from "vscode";
import IgnoredErrorStatus from "../status/IgnoredError";
import ObserveErrorStatus from "../status/ObserveError";
import OpenSolutionFormView from "./OpenSolutionFormView";
import { error } from "console";

function AskToReport() {
  let userInteracted = false;
  const question = vscode.window.showWarningMessage(
    "An Error has been detected in your last update run:",
    "Report",
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
      if (selection === "Report") {
        vscode.window
          .showInformationMessage("You chose to Report", "Add Solution")
          .then(
            (selection) => {
              if (selection === "Add Solution") {
                OpenSolutionFormView();
              }
            },
            (error) => {
              vscode.window.showErrorMessage(`Error: ${error}`);
            }
          );
        ObserveErrorStatus();
      } else if (selection === "Ignore") {
        vscode.window.showInformationMessage("You chose to Ignore");
        IgnoredErrorStatus();
      }
      clearTimeout(timeout);
    },
    (error) => {
      vscode.window.showErrorMessage(`Error: ${error.message}`);
    }
  );
}

export default AskToReport;
