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
        </body>
      </html>
    `;

    const iframe = document.createElement('iframe');
    iframe.style.position = 'fixed';
    iframe.style.right = '0';
    iframe.style.bottom = '0';
    iframe.style.width = '0';
    iframe.style.height = '0';
    iframe.style.border = '0';
    document.body.appendChild(iframe);

    const doc = iframe.contentWindow || iframe.contentDocument;
    if (doc) {
      const docContent = 'document' in doc ? doc.document : doc;
      docContent.open();
      docContent.write(printContent);
      docContent.close();

      setTimeout(() => {
        (docContent as Document).defaultView?.focus();
        (docContent as Document).defaultView?.print();

        setTimeout(() => {
          document.body.removeChild(iframe);
        }, 1000);
      }, 500);
    }
  }
  

}
