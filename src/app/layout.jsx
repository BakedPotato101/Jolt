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
        <div className="flex bg-white dark:bg-black min-h-screen">
          <Sidebar />
          <div
            className="flex flex-col flex-grow"
            style={{ marginLeft: "6rem" }}
          >
            <Header />
            <div className="overflow-auto flex-grow">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
