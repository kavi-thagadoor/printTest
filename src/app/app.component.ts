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
        </body>
      </html>
    `;

    const frame = document.createElement('iframe');
    frame.style.display = 'none';
    document.body.appendChild(frame);

    const doc = frame.contentWindow?.document;
    if (doc) {
      doc.open();
      doc.write(content);
      doc.close();

      setTimeout(() => {
        frame.contentWindow?.focus();
        frame.contentWindow?.print();
        setTimeout(() => document.body.removeChild(frame), 500);
      }, 300);
    }
  }
}
