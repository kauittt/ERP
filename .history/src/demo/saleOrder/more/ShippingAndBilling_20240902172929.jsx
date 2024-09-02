import React from "react";
import Collapse from "../../../shared/components/Collapse";
import CustomForm from "../form/CustomForm";

const ShippingAndBilling = () => {
    const leftFields = [
        {
            label: "Ship-to",
            name: "shipTo",
            type: "select",
            options: [
                { value: "default", label: "Default (Sell-to Address)" },
                { value: "alternate", label: "Alternate Shipping Address" },
                { value: "custom", label: "Custom Address" },
            ],
        },
        {
            label: "Contact",
            name: "contact",
            type: "text",
        },
        {
            label: "Shipment Method Code",
            name: "shipmentMethodCode",
            type: "select",
            options: [
                { value: "air", label: "Air Freight" },
                { value: "sea", label: "Sea Freight" },
                { value: "road", label: "Road Transport" },
            ],
        },
        {
            label: "Agent",
            name: "agent",
            type: "select",
            options: [
                { value: "agentA", label: "Agent A" },
                { value: "agentB", label: "Agent B" },
                { value: "agentC", label: "Agent C" },
            ],
        },
        {
            label: "Agent Service",
            name: "agentService",
            type: "select",
            options: [
                { value: "service1", label: "Service 1" },
                { value: "service2", label: "Service 2" },
                { value: "service3", label: "Service 3" },
            ],
        },
        {
            label: "Package Tracking No",
            name: "packageTrackingNo",
            type: "text",
        },
    ];

    const rightFields = [
        {
            label: "Bill-to",
            name: "billTo",
            type: "select",
            options: [
                { value: "companyA", label: "Company A" },
                { value: "companyB", label: "Company B" },
                { value: "companyC", label: "Company C" },
            ],
        },
        {
            label: "Location Code",
            name: "locationCode",
            type: "select",
            options: [
                { value: "loc001", label: "Location 001" },
                { value: "loc002", label: "Location 002" },
                { value: "loc003", label: "Location 003" },
            ],
        },
        {
            label: "Shipment Date",
            name: "shipmentDate",
            type: "datepicker",
        },
        {
            label: "Shipping Advice",
            name: "shippingAdvice",
            type: "select",
            options: [
                { value: "advice1", label: "Advice 1" },
                { value: "advice2", label: "Advice 2" },
                { value: "advice3", label: "Advice 3" },
            ],
        },
        {
            label: "Outbound Whse. Handling Time",
            name: "outboundWhseHandlingTime",
            type: "text",
        },
        {
            label: "Shipping Time",
            name: "shippingTime",
            type: "text",
        },
        {
            label: "Late Order Shipping",
            name: "lateOrderShipping",
            type: "select",
            options: [
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
            ],
        },
    ];

    return (
        <Collapse title={"Shipping And Billing"} className="with-shadow">
            {/* //* Form */}
            <CustomForm
                leftFields={leftFields}
                rightFields={rightFields}
                min={3}
                max={7}
            ></CustomForm>
        </Collapse>
    );
};
ShippingAndBilling.propTypes = {};

export default ShippingAndBilling;
