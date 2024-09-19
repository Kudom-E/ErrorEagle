import * as vscode from "vscode";

function NotAddingSolutionStatus() {
  const statusBarItem = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Right,
    100
  );
  statusBarItem.text = "No Solution added to Eagle";
  statusBarItem.tooltip = "ErrorEagle Status";
  statusBarItem.show();

  // Hide the status bar item after a timeout
  setTimeout(() => {
    statusBarItem.dispose();
  }, 3000); // 7 seconds
}

export default NotAddingSolutionStatus;
