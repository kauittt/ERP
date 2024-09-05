import React from "react";
import { Col } from "react-bootstrap";
import { Card, CardBody } from "@/shared/components/Card";
import CustomForm from "./form/CustomForm";

const Calculation = () => {
    const leftFields = [
        {
            label: "Subtotal Excl. VAT (GBP):",
            name: "subtotalExclVat",
            type: "text",
            placeholder: "0.00",
        },
        {
            label: "Inv. Discount Amount Excl. VAT (GBP):",
            name: "invDiscountAmountExclVat",
            type: "text",
            placeholder: "0.00",
        },
        {
            label: "Invoice Discount %:",
            name: "invoiceDiscountPercent",
            type: "text",
            placeholder: "0",
        },
    ];

    const rightFields = [
        {
            label: "Total Excl. VAT (GBP):",
            name: "totalExclVat",
            type: "text",
            placeholder: "0.00",
        },
        {
            label: "Total VAT (GBP):",
            name: "totalVat",
            type: "text",
            placeholder: "0.00",
        },
        {
            label: "Total Incl. VAT (GBP):",
            name: "totalInclVat",
            type: "text",
            placeholder: "0.00",
        },
    ];

    const updateFieldValues = (form) => {
        form.change("subtotalExclVat", 100.0);
        form.change("invDiscountAmountExclVat", 20.0);
        form.change("invoiceDiscountPercent", 5);
        form.change("totalExclVat", 80.0);
        form.change("totalVat", 16.0);
        form.change("totalInclVat", 96.0);
    };

    return (
        <Card>
            <CardBody>
                {/* //* Form */}
                <CustomForm
                    leftFields={leftFields}
                    rightFields={rightFields}
                    min={3}
                    max={3}
                    btnContent="Calculate Invoice Discount"
                ></CustomForm>
            </CardBody>
        </Card>
    );
};

Calculation.propTypes = {};

export default Calculation;
