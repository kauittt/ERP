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
import FormInput from "../../../../demo/saleOrder/form/FormInput";

const CustomVerticalForm = ({ onSubmit }) => {
    const [visibleItems, setVisibleItems] = useState(4);

    const leftFields = [
        {
            label: "No.",
            name: "no",
            type: "text",
        },
        {
            label: "Customer No.",
            name: "customerNo",
            type: "select",
            options: [
                { value: "001", label: "Customer 001" },
                { value: "002", label: "Customer 002" },
                { value: "003", label: "Customer 003" },
                { value: "004", label: "Customer 004" },
                { value: "005", label: "Customer 005" },
            ],
        },
        {
            label: "Customer Name",
            name: "customerName",
            type: "select",
            options: [
                { value: "john_doe", label: "John Doe (001)" },
                { value: "jane_smith", label: "Jane Smith (002)" },
                { value: "michael_jones", label: "Michael Jones (003)" },
                { value: "susan_clark", label: "Susan Clark (004)" },
                { value: "lisa_taylor", label: "Lisa Taylor (005)" },
            ],
        },
        {
            label: "Address",
            name: "address",
            type: "text",
        },
        {
            label: "Email",
            name: "email",
            type: "email",
        },
        {
            label: "Document Date",
            name: "documentDate",
            type: "datepicker",
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
        <Col md={12} lg={12}>
            <Card>
                <CardBody>
                    {/*//* Title */}
                    <CardTitleWrap>
                        <CardTitle>General</CardTitle>
                    </CardTitleWrap>

                    {/* //* Form */}
                </CardBody>
            </Card>
        </Col>
    );
};

CustomVerticalForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default CustomVerticalForm;
