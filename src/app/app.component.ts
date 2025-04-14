import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'printTest';

  print() {
    const content = `
      <html>
        <head>
          <style>
            body {
              font-family: sans-serif;
              text-align: center;
              padding: 40px;
            }
            h1 { color: red; }
            p { font-size: 18px; }
          </style>
        </head>
        <body>
          <h1>Hello from Print</h1>
          <p>This is your message 😎</p>
          <button onclick="window.close()">Close</button>

          <script>
            window.onload = function() {
              window.print();
            }
          </script>
        </body>
      </html>
    `;
  
    const printWindow = window.open('', '_blank', 'width=600,height=600');
    if (printWindow) {
      printWindow.document.open();
      printWindow.document.write(content);
      printWindow.document.close();
    }
  }
  
}
