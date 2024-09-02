import React, { useState } from "react";
import PropTypes from "prop-types";
import { Field, Form } from "react-final-form";
import { Row, Col } from "react-bootstrap";
import renderSelectField from "@/shared/components/form/Select";
import renderDatePickerField from "@/shared/components/form/date-pickers/DatePicker";
import {
    Card,
    CardBody,
    CardTitleWrap,
    CardTitle,
} from "@/shared/components/Card";
import {
    FormContainer,
    FormGroup,
    FormGroupField,
    FormGroupIcon,
    FormGroupLabel,
    FormButtonToolbar,
} from "@/shared/components/form/FormElements";
import { Button } from "@/shared/components/Button";
import CalendarBlankIcon from "mdi-react/CalendarBlankIcon";
import Collapse from "../../../shared/components/Collapse";

const ShippingAndBilling = ({ onSubmit }) => {
    //3 -> 6
    //2 -> 7
    const min = 3;
    const max = 7;
    const [visibleItems, setVisibleItems] = useState(min);

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

    const toggleVisibility = () => {
        setVisibleItems(visibleItems === min ? max : min);
    };
    return (
        <Collapse title={"Shipping And Billing"} className="with-shadow">
            {/* //* Form */}
            <Form onSubmit={onSubmit}>
                {({ handleSubmit, form }) => (
                    <FormContainer
                        onSubmit={handleSubmit}
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            flexWrap: "wrap",
                            width: "100%",
                            boxSizing: "border-box",
                        }}
                    >
                        <Row style={{ width: "100%", flex: 1 }}>
                            {/* //* Left Column */}
                            <Col md={6}>
                                {leftFields
                                    .slice(0, visibleItems)
                                    .map((data, index) => (
                                        <FormInput
                                            key={index}
                                            data={data}
                                        ></FormInput>
                                    ))}
                            </Col>

                            {/* //* Right Column */}
                            <Col md={6}>
                                {rightFields
                                    .slice(0, visibleItems)
                                    .map((data, index) => (
                                        <FormInput
                                            key={index}
                                            data={data}
                                        ></FormInput>
                                    ))}
                            </Col>
                        </Row>

                        <FormButtonToolbar
                            style={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "flex-end",
                            }}
                        >
                            <Button
                                variant="primary"
                                onClick={toggleVisibility}
                            >
                                {visibleItems === min
                                    ? "Show More"
                                    : "Show Less"}
                            </Button>
                        </FormButtonToolbar>
                    </FormContainer>
                )}
            </Form>
        </Collapse>
    );
};
ShippingAndBilling.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default ShippingAndBilling;
