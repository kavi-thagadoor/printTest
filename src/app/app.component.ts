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
          <script>
            window.onload = function() {
              window.focus();
              window.print();
              window.onafterprint = function() {
                window.close();
              }
            }
          </script>
        </body>
      </html>
    `;
  
    const iframe: any = document.getElementById('print-frame');
    let doc = iframe.contentWindow || iframe.contentDocument;
    if (doc.document) doc = doc.document;
  
    doc.open();
    doc.write(content);
    doc.close();
  }
  
  
}
