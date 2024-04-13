import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html className="dark">
      <head>
        <title>Jolt App</title>
      </head>
      <body>
        <div className="flex bg-white dark:bg-black ">
          <Sidebar />
          <div className="flex-1 md:flex h-screen relative pl-24">
            <Header />
            <div className="w-full">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}