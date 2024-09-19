import * as vscode from "vscode";
import SolutionView from "../ui/SolutionView";

function OpenSolutionView() {
  const panel = vscode.window.createWebviewPanel(
    "customWebview",
    "Custom Notification",
    vscode.ViewColumn.Beside,
    { enableScripts: true }
  );

  panel.webview.html = SolutionView();

  // Automatically close the Webview after a timeout
  setTimeout(() => {
    panel.dispose();
  }, 8000); // 8 seconds
}

export default OpenSolutionView;
