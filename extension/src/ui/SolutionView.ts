function SolutionView() {
  return `
          <!DOCTYPE html>
          <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <style>
                  body { font-family: Arial, sans-serif; padding: 20px; }
                  .form-container { position: fixed; bottom: 20px; right: 20px; background-color: #f1f1f1; border-radius: 8px; box-shadow: 0px 0px 10px rgba(0,0,0,0.1); padding: 20px; }
                  h2 { color: #007acc; }
                  input, select, textarea { width: 100%; padding: 8px; margin: 8px 0; box-sizing: border-box; }
                  button { padding: 10px 15px; background-color: #007acc; color: white; border: none; cursor: pointer; border-radius: 5px; }
                  button:hover { background-color: #005a9c; }
              </style>
              <title>Form</title>
          </head>
          <body>
              <div class="form-container">
                  <h2>Submit Your Solution</h2>
                  <form id="userForm">
                      <label for="name">Name:</label>
                      <input type="text" id="name" name="name" required>
                      
                      <label for="email">Email:</label>
                      <input type="email" id="email" name="email" required>
                      
                      <label for="feedback">Feedback:</label>
                      <textarea id="feedback" name="feedback"></textarea>
                      
                      <button type="submit">Submit</button>
                  </form>
              </div>
  
              <script>
                  const vscode = acquireVsCodeApi();
                  document.getElementById('userForm').addEventListener('submit', event => {
                      event.preventDefault();
                      const formData = {
                          name: document.getElementById('name').value,
                          email: document.getElementById('email').value,
                          feedback: document.getElementById('feedback').value
                      };
                      vscode.postMessage({ command: 'submitForm', data: formData });
                  });
              </script>
          </body>
          </html>
      `;
}

export default SolutionView;
