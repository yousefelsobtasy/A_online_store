import "./globals.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";


export const metadata = {
  title: "City Threads",
  description: "Next Generation of fashion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Navbar />
        <main className=" mt-[68.5px] lg:mt-[88.5px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
