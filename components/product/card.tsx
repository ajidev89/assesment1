import Link from "next/link";
import React from "react";

interface CardProps {
    id: number;
    title: string;
    description: string;
    price: number;
    currency: string;
    image: string;
    category: string;
    rating: number;
    reviews: number;
}

const Card: React.FC<CardProps> = ({
    id,
    title,
    description,
    price,
    currency,
    image,
    category,
    rating,
    reviews,
}) => {
    return (
        <div className="card">
            <img src={image} alt={title} className="card-image" />

            <div className="flex flex-col gap-4 mt-4">
                <Link href={`/product/${id}`}>
                    <h2 className="mt-4 text-purple-800">{title}</h2>
                </Link>

                <div className="flex justify-between">
                    <div>
                        {currency} {price}
                    </div>

                    <div>Category: {category}</div>
                </div>

                <p>
                    Rating: {rating} ({reviews} reviews)
                </p>
            </div>
        </div>
    );
};

export default Card;
