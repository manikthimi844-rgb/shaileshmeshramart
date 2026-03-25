import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <div className="min-h-screen flex flex-col">
    <Navigation />
    <main className="flex-1 pt-16 md:pt-20">{children}</main>
    <Footer />
  </div>
);

export default Layout;
