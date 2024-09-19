import * as vscode from "vscode";

function AddingSolutionStatus() {
  const statusBarItem = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Right,
    100
  );
  statusBarItem.text = "Adding Solution to Eagle";
  statusBarItem.tooltip = "ErrorEagle Status";
  statusBarItem.show();

  // Hide the status bar item after a timeout
  setTimeout(() => {
    statusBarItem.dispose();
  }, 7000); // 7 seconds
}

export default AddingSolutionStatus;
