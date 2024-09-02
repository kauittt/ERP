import React from "react";
import Collapse from "../../shared/components/Collapse";

const InvoiceDetails = () => {
    const text =
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci maxime quia voluptatibus ab molestias, dolorem ad aut nulla ea enim non odit quae, dolore ipsum eveniet dolorum doloribus assumenda animi!";

    const [visibleItems, setVisibleItems] = useState(4);

    const leftFields = [
        {
            label: "Currency Code",
            name: "currencyCode",
            type: "select",
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
        },
        {
            label: "Payment Terms Code",
            name: "paymentTermsCode",
            type: "select",
        },
        {
            label: "Payment Method Code",
            name: "paymentMethodCode",
            type: "select",
        },
        {
            label: "EU 3-Party Trade",
            name: "eu3PartyTrade",
            type: "checkbox",
        },
    ];

    const rightFields = [
        {
            label: "Posting Date",
            name: "postingDate",
            type: "datepicker",
        },
        {
            label: "Order Date",
            name: "orderDate",
            type: "datepicker",
        },
        {
            label: "Due Date",
            name: "dueDate",
            type: "datepicker",
        },
        {
            label: "Requested Delivery Date",
            name: "requestedDeliveryDate",
            type: "datepicker",
        },
        {
            label: "Promised Delivery Date",
            name: "promisedDeliveryDate",
            type: "datepicker",
        },
        {
            label: "Status",
            name: "status",
            type: "select",
            options: [
                { value: "open", label: "Open" },
                { value: "released", label: "Released" },
                { value: "pending_approval", label: "Pending Approval" },
                { value: "pending_prepayment", label: "Pending Prepayment" },
            ],
        },
        {
            label: "Work Description",
            name: "workDescription",
            type: "textarea",
        },
    ];

    const toggleVisibility = () => {
        setVisibleItems(visibleItems === 4 ? rightFields.length : 4);
    };
    return (
        <Collapse title={"Invoice Details"} className="with-shadow">
            <p>{text}</p>
        </Collapse>
    );
};

export default InvoiceDetails;
