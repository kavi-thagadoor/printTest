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
    const printContent = `
      <html>
        <head>
          <title>Print Preview</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              padding: 40px;
              text-align: center;
              color: #333;
              background-color: #f9f9f9;
            }
            h1 {
              color: #d9534f;
              margin-bottom: 20px;
            }
            p {
              font-size: 18px;
            }
          </style>
        </head>
        <body>
          <h1>Hi! I'm Chrome Print Popup</h1>
          <p>This is what I wanted to say 😎</p>
          <p>Thanks for printing me!</p>
          <script>
            window.onload = function() {
              window.print();
              window.onafterprint = function() {
                window.close();
              };
            };
          </script>
        </body>
      </html>
    `;

    const printWindow = window.open('', '_blank', 'width=800,height=600');
    if (printWindow) {
      printWindow.document.open();
      printWindow.document.write(printContent);
      printWindow.document.close();
    }
  }
}
