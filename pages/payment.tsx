import React from "react";
import PageLayout from "@/layouts/PageLayout";
import Head from "next/head";
import Form from "@/components/payment/form";

export default function Payment() {
    return (
        <PageLayout title="Payments">
            <Head>
                <title>Payment - My E-commerce Store</title>
            </Head>
            <div>
                <Form />
            </div>
        </PageLayout>
    );
}
