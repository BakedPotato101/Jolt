import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Jolt App</title>
      </head>
      <body>
          <div className="w-full">{children}</div>
      </body>
    </html>
  );
}