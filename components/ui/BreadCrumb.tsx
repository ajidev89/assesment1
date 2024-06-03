import React from "react";

interface BreadCrumbProps {
    title: string;
}

const BreadCrumb: React.FC<BreadCrumbProps> = ({ title }) => {
    return (
        <div className="bg-purple-800 h-[400px] flex justify-center items-center text-6xl">
            {title}
        </div>
    );
};

export default BreadCrumb;
