import React from "react";

export interface CardProps {
    name: {
        title: string;
        first: string;
        last: string;
    };
    email: string;
    picture: {
        large: string;
    };
}

const Card: React.FC<CardProps> = ({ name, email, picture }) => {
    return (
        <div className="profile-card p-4 border rounded-lg shadow-lg">
            <img
                src={picture.large}
                alt={`${name.first} ${name.last}`}
                className="profile-avatar w-24 h-24 rounded-full mx-auto"
            />
            <h2 className="text-xl font-bold mt-4 text-center">{`${name.title} ${name.first} ${name.last}`}</h2>
            <p className="text-center text-gray-600">{email}</p>
        </div>
    );
};

export default Card;
