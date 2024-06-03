import React from "react";
import PageLayout from "@/layouts/PageLayout";
import Head from "next/head";
import Card, { CardProps } from "@/components/profile/card"; // Assume this is the path to your ProfileCard component
import { randomUser } from "@/services/random";

export default function Profiles({ profiles }: { profiles: CardProps[] }) {
    return (
        <PageLayout title="Profiles">
            <Head>
                <title>Profiles - My E-commerce Store</title>
            </Head>
            <div className="grid lg:grid-cols-3 gap-8">
                {profiles.map((profile, index) => (
                    <Card
                        key={index}
                        name={profile.name}
                        email={profile.email}
                        picture={profile.picture}
                    />
                ))}
            </div>
        </PageLayout>
    );
}

export async function getServerSideProps() {
    const profiles: CardProps = await randomUser();

    return {
        props: {
            profiles,
        },
    };
}
