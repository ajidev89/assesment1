import React, { ReactNode } from "react";
import BreadCrumb from "@/components/ui/BreadCrumb";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";

interface PageLayoutProps {
    children: ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            <BreadCrumb title="Product" />
            <div className="min-h-[500px] container mx-auto my-24">
                {children}
            </div>
            <Footer />
        </>
    );
};

export default PageLayout;
