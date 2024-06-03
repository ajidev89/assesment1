import { useRouter } from "next/router";
import React from "react";
import PageLayout from "@/layouts/PageLayout";
import products from "@/products.json";
import Head from "next/head";

const ProductPage = () => {
    const router = useRouter();
    const { id } = router.query;

    if (!id) {
        return <PageLayout>Loading...</PageLayout>;
    }

    const product = products.find(
        (product) => product.id === parseInt(id as string)
    );

    if (!product) {
        return <PageLayout>Product not found</PageLayout>;
    }

    return (
        <PageLayout>
            <Head>
                <title>{product.name} - My E-commerce Store</title>
            </Head>
            <div className="grid lg:grid-cols-2 gap-6">
                <div>
                    <img src={product.image} alt={product.name} />
                </div>
                <div className="flex flex-col gap-5">
                    <h1 className="text-4xl font-bold">{product.name}</h1>
                    <p className="text-lg">{product.description}</p>
                    <p className="text-xl font-semibold">
                        {product.currency} {product.price}
                    </p>
                    <p>Category: {product.category}</p>
                    <p>
                        Rating: {product.rating} ({product.reviews} reviews)
                    </p>
                </div>
            </div>
        </PageLayout>
    );
};

export default ProductPage;
