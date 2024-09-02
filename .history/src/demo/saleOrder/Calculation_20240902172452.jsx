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
import FormInput from "./form/FormInput";
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
        <Col md={12} lg={12}>
            <Card>
                <CardBody>
                    {/* //* Form */}
                    <CustomForm
                        leftFields={leftFields}
                        rightFields={rightFields}
                        min={3}
                        max={3}
                    ></CustomForm>
                </CardBody>
            </Card>
        </Col>
    );
};

Calculation.propTypes = {};

export default Calculation;
