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
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
      <script>
        window.addEventListener('DOMContentLoaded', function () {
              window.print();
              window.onafterprint = function () {
                try {
                  window.close();
                } catch (err) {
                  console.log('Window could not be closed:', err);
                }
              };
            });
      </script>
    </body>
  </html>
`;


    const printWindow = window.open('', '_blank', 'width=600,height=600');
    if (printWindow) {
      printWindow.document.open();
      printWindow.document.write(content);
      printWindow.document.close();
    }else {
      alert('Popup blocked! Please allow popups for this site.');
    }
  }

}
