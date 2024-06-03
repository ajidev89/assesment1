import React, { useState, useEffect } from "react";
import Pusher from "pusher-js";

const NotificationPanel = () => {
    const [notifications, setNotifications] = useState<any>([]);

    useEffect(() => {
        const storedNotifications = JSON.parse(
            localStorage.getItem("notifications") || "[]"
        );
        setNotifications(storedNotifications);

        const pusher = new Pusher("a666c2f7a4546d31e87e", {
            cluster: "eu",
        });

        const channel = pusher.subscribe("notifications");

        channel.bind("new-notification", (data: any) => {
            setNotifications((prevNotifications: any) => [
                ...prevNotifications,
                data,
            ]);
            localStorage.setItem(
                "notifications",
                JSON.stringify([...notifications, data])
            );
        });

        return () => {
            channel.unbind_all();
            channel.unsubscribe();
        };
    }, []);

    const dismissNotification = (id: any) => {
        setNotifications((prevNotifications: any) =>
            prevNotifications.filter(
                (notification: any) => notification.id !== id
            )
        );
        localStorage.setItem(
            "notifications",
            JSON.stringify(
                notifications.filter(
                    (notification: any) => notification.id !== id
                )
            )
        );
    };

    return (
        <div>
            <h2 className="mb-4">Notifications</h2>
            <div className="flex flex-col gap-6">
                {notifications.map((notification: any) => (
                    <div
                        key={notification.id}
                        className="border flex justify-between p-6"
                    >
                        <p>{notification.message}</p>
                        <button
                            onClick={() => dismissNotification(notification.id)}
                        >
                            Dismiss
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NotificationPanel;
