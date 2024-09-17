import * as vscode from "vscode";
import FormView from "../ui/FormView";

function OpenSolutionFormView() {
  const panel = vscode.window.createWebviewPanel(
    "customWebview",
    "Custom Notification",
    vscode.ViewColumn.Beside,
    { enableScripts: true }
  );

  panel.webview.html = FormView();

  // Automatically close the Webview after a timeout
  setTimeout(() => {
    panel.dispose();
  }, 8000); // 8 seconds
}

export default OpenSolutionFormView;
