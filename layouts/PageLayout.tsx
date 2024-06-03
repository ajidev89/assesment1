import React, { ReactNode } from "react";
import BreadCrumb from "@/components/ui/BreadCrumb";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";

interface PageLayoutProps {
    children: ReactNode;
    title: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, title }) => {
    return (
        <>
            <Header />
            <BreadCrumb title={title} />
            <div className="min-h-[500px] container mx-auto my-24">
                {children}
            </div>
            <Footer />
        </>
    );
};

export default PageLayout;
