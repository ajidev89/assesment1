import React, { useState } from "react";

export interface PaymentDetails {
    cardNumber: string;
    cardHolder: string;
    expiryDate: string;
    cvv: string;
}

const Form = () => {
    const [formData, setFormData] = useState({
        cardNumber: "",
        cardHolder: "",
        expiryDate: "",
        cvv: "",
    });
    const [successMessage, setSuccessMessage] = useState("");
    const [errors, setErrors] = useState<PaymentDetails>({
        cardNumber: "",
        cardHolder: "",
        expiryDate: "",
        cvv: "",
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const errors = validateFormData(formData);
        if (isObjectEmpty(errors)) {
            setSuccessMessage("Payment successful!");
            setFormData({
                cardNumber: "",
                cardHolder: "",
                expiryDate: "",
                cvv: "",
            });
        } else {
            setErrors(errors);
        }
    };

    const validateFormData = (data: PaymentDetails) => {
        let errors: PaymentDetails = {
            cardNumber: "",
            cardHolder: "",
            expiryDate: "",
            cvv: "",
        };
        if (
            !data.cardNumber ||
            data.cardNumber.length !== 16 ||
            !/^\d+$/.test(data.cardNumber)
        ) {
            errors.cardNumber = "Invalid card number";
        }
        if (!data.cardHolder) {
            errors.cardHolder = "Card holder name is required";
        }
        if (!data.expiryDate || !/^\d{2}\/\d{2}$/.test(data.expiryDate)) {
            errors.expiryDate = "Invalid expiry date (MM/YY)";
        }
        if (!data.cvv || data.cvv.length !== 3 || !/^\d+$/.test(data.cvv)) {
            errors.cvv = "Invalid CVV";
        }
        return errors;
    };

    const isObjectEmpty = (obj: any) => {
        for (let key in obj) {
            if (obj[key] !== "") {
                return false;
            }
        }
        return true;
    };

    return (
        <div>
            {successMessage && (
                <p className="text-green-500 mb-6">{successMessage}</p>
            )}
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                    <label>Card Holder Name</label>
                    <input
                        type="text"
                        className="input"
                        name="cardHolder"
                        placeholder="Card Holder"
                        value={formData.cardHolder}
                        onChange={handleChange}
                    />
                    {errors.cardHolder && (
                        <p className="error-text">{errors.cardHolder}</p>
                    )}
                </div>

                <div className="grid lg:grid-cols-2 gap-4">
                    <div>
                        <label>Card Number</label>
                        <input
                            className="input"
                            type="text"
                            name="cardNumber"
                            placeholder="Card Number"
                            value={formData.cardNumber}
                            onChange={handleChange}
                        />
                        {errors.cardNumber && (
                            <p className="error-text">{errors.cardNumber}</p>
                        )}
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label>Expiry Date (MM/YY)</label>
                            <input
                                type="text"
                                className="input"
                                placeholder="MM/YY"
                                name="expiryDate"
                                value={formData.expiryDate}
                                onChange={handleChange}
                            />
                            {errors.expiryDate && (
                                <p className="error-text">
                                    {errors.expiryDate}
                                </p>
                            )}
                        </div>
                        <div>
                            <label>CVV</label>
                            <input
                                type="text"
                                className="input"
                                placeholder="***"
                                name="cvv"
                                value={formData.cvv}
                                onChange={handleChange}
                            />
                            {errors.cvv && (
                                <p className="error-text">{errors.cvv}</p>
                            )}
                        </div>
                    </div>
                </div>

                <button className="btn-brand" type="submit">
                    Submit Payment
                </button>
            </form>
        </div>
    );
};

export default Form;
