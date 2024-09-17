import * as vscode from "vscode";

function IgnoredErrorStatus() {
  const statusBarItem = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Right,
    100
  );
  statusBarItem.text = "Eagle has turned a blind eye";
  statusBarItem.tooltip = "ErrorEagle Status";
  statusBarItem.show();

  // Hide the status bar item after a timeout
  setTimeout(() => {
    statusBarItem.dispose();
  }, 7000); // 7 seconds
}

export default IgnoredErrorStatus;
