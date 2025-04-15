import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'printTest';

  print() {
    const printWindow = window.open('', '_blank', 'width=600,height=600');
  
    if (printWindow) {
      const doc = printWindow.document;
  
      doc.write(`
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
          </body>
        </html>
      `);
  
      doc.close();
  
      // Give a delay to let window load before printing
      printWindow.onload = () => {
        printWindow.focus();
        printWindow.print();
  
        // Some mobile browsers ignore onafterprint, so close after delay as fallback
        printWindow.onafterprint = () => {
          printWindow.close();
        };
  
        setTimeout(() => {
          printWindow.close();
        }, 5000); // fallback close in case onafterprint doesn't trigger
      };
    } else {
      alert("Popup blocked! Please allow popups for this site.");
    }
  }
  
}
