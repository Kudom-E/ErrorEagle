import * as vscode from "vscode";

function ObserveErrorStatus() {
  const statusBarItem = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Right,
    100
  );
  statusBarItem.text = "Eagle is observing error for solution";
  statusBarItem.tooltip = "ErrorEagle Status";
  statusBarItem.show();

  // Hide the status bar item after a timeout
  setTimeout(() => {
    statusBarItem.dispose();
  }, 7000); // 7 seconds
}

export default ObserveErrorStatus;
