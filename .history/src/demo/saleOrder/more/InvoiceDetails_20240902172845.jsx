import React, from "react";
import Collapse from "../../../shared/components/Collapse";
import CustomForm from "../form/CustomForm";

const InvoiceDetails = () => {
    const leftFields = [
        {
            label: "Currency Code",
            name: "currencyCode",
            type: "select",
            options: [
                { value: "USD", label: "USD - US Dollar" },
                { value: "EUR", label: "EUR - Euro" },
                { value: "VND", label: "VND - Vietnamese Dong" },
            ],
        },
        {
            label: "Prices Including VAT",
            name: "pricesIncludingVAT",
            type: "checkbox",
        },
        {
            label: "VAT Bus. Posting Group",
            name: "vatBusPostingGroup",
            type: "select",
            options: [
                { value: "domestic", label: "Domestic" },
                { value: "export", label: "Export" },
                { value: "nonTaxable", label: "Non-Taxable" },
            ],
        },
        {
            label: "Payment Terms Code",
            name: "paymentTermsCode",
            type: "select",
            options: [
                { value: "net30", label: "Net 30 Days" },
                { value: "net60", label: "Net 60 Days" },
                { value: "immediate", label: "Immediate Payment" },
            ],
        },
        {
            label: "EU 3-Party Trade",
            name: "eu3PartyTrade",
            type: "checkbox",
        },
        {
            label: "Payment Method Code",
            name: "paymentMethodCode",
            type: "select",
            options: [
                { value: "paypal", label: "PayPal" },
                { value: "bankTransfer", label: "Bank Transfer" },
                { value: "creditCard", label: "Credit Card" },
            ],
        },
    ];

    const rightFields = [
        {
            label: "Payment Service",
            name: "paymentService",
            type: "select",
            options: [
                {
                    value: "demoSandboxAccount",
                    label: "Demo Sandbox Account - PayPal Payments Standard",
                },
                {
                    value: "liveAccount",
                    label: "Live Account - PayPal Payments Standard",
                },
            ],
        },
        {
            label: "Department Code",
            name: "departmentCode",
            type: "select",
            options: [
                { value: "sales", label: "Sales" },
                { value: "hr", label: "Human Resources" },
                { value: "it", label: "IT" },
            ],
        },
        {
            label: "Project Code",
            name: "projectCode",
            type: "select",
            options: [
                { value: "projectX", label: "Project X" },
                { value: "projectY", label: "Project Y" },
                { value: "projectZ", label: "Project Z" },
            ],
        },
        {
            label: "Payment Discount %",
            name: "paymentDiscountPercent",
            type: "text",
        },

        {
            label: "Direct Debit Mandate ID",
            name: "directDebitMandateID",
            type: "select",
            options: [
                { value: "DD001", label: "Mandate 001" },
                { value: "DD002", label: "Mandate 002" },
                { value: "DD003", label: "Mandate 003" },
            ],
        },
        {
            label: "Pmt. Discount Date",
            name: "pmtDiscountDate",
            type: "select",
            options: [
                { value: "2023-10-01", label: "2023-10-01" },
                { value: "2023-11-01", label: "2023-11-01" },
                { value: "2023-12-01", label: "2023-12-01" },
            ],
        },
    ];

    return (
        <Collapse title={"Invoice Details"} className="with-shadow">
            {/* //* Form */}
            <CustomForm
                leftFields={leftFields}
                rightFields={rightFields}
                min={5}
                max={6}
            ></CustomForm>
        </Collapse>
    );
};

InvoiceDetails.propTypes = {};

export default InvoiceDetails;
