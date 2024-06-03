import React from "react";
import PageLayout from "@/layouts/PageLayout";
import Head from "next/head";
import Notifications from "@/components/notifications/index";

export default function Page() {
    return (
        <PageLayout title="Notification">
            <Head>
                <title>Notification - My E-commerce Store</title>
            </Head>
            <div>
                <Notifications />
            </div>
        </PageLayout>
    );
}
