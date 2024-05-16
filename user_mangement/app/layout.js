import { Inter } from "next/font/google";
import "./global.css";
import { getServerSession } from "next-auth";
import AuthProvider from "./utils/SessionProvider";
import Navbar from "@/components/Navbar";
import ReactToast from "@/components/react-toast";

const inter = Inter({ subsets: ["latin"], style: ["normal"] });
export const metadata = {
  title: "User Management",
  description: "Fullstack user management application using Next.js",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <AuthProvider>
        <body className={inter.className}>
          <Navbar />
          {children}
          <ReactToast />
        </body>
      </AuthProvider>
    </html>
  );
}
