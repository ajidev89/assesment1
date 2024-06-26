import Link from "next/link";
import React from "react";

export default function Header() {
    return (
        <>
            <header className="flex justify-between container mx-auto py-5">
                <Link href="/">
                    <h1 className="font-semibold">Logo</h1>
                </Link>

                <div>
                    <ul className="hidden lg:flex gap-8">
                        <li>Home</li>
                        <li>Shop</li>
                        <li>Cart</li>
                    </ul>
                    <button className="lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                    </button>
                </div>
            </header>
        </>
    );
}
