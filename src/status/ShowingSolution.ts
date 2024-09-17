import * as vscode from "vscode";

function ShowingSolutionStatus() {
  const statusBarItem = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Right,
    100
  );
  statusBarItem.text = "Showing Solution from Eagle";
  statusBarItem.tooltip = "ErrorEagle Status";
  statusBarItem.show();

  // Hide the status bar item after a timeout
  setTimeout(() => {
    statusBarItem.dispose();
  }, 7000); // 7 seconds
}

export default ShowingSolutionStatus;
