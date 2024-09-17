import * as vscode from "vscode";
import SearchView from "../ui/SearchView";

function SearchForSolutions() {
  const panel = vscode.window.createWebviewPanel(
    "customWebview",
    "Custom Notification",
    vscode.ViewColumn.Beside,
    { enableScripts: true }
  );

  panel.webview.html = SearchView();

  // Automatically close the Webview after a timeout
  setTimeout(() => {
    panel.dispose();
  }, 8000); // 8 seconds
}

export default SearchForSolutions;
