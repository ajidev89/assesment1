import React from "react";
import Card from "@/components/product/card";
import PageLayout from "@/layouts/PageLayout";
import products from "@/products.json";
import Head from "next/head";

export default function Home() {
    return (
        <PageLayout title="Products">
            <Head>
                <title>Home - My E-commerce Store</title>
            </Head>
            <div className="grid lg:grid-cols-3 gap-8">
                {products.map((product) => (
                    <Card
                        key={product.id}
                        id={product.id}
                        title={product.name}
                        description={product.description}
                        price={product.price}
                        currency={product.currency}
                        image={product.image}
                        category={product.category}
                        rating={product.rating}
                        reviews={product.reviews}
                    />
                ))}
            </div>
        </PageLayout>
    );
}
