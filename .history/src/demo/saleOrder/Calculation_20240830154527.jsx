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
    return (
        <Col md={12} lg={12}>
            <Card>
                <CardBody>
                    {/* //* Form */}
                    <div
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
                                {leftFields.map((field) => (
                                    <FormGroup key={field.name}>
                                        <FormGroupLabel>
                                            {field.label}
                                        </FormGroupLabel>
                                        <FormGroupField>
                                            <Field
                                                name={field.name}
                                                component="input"
                                                type="text"
                                                placeholder={field.placeholder}
                                            />
                                        </FormGroupField>
                                    </FormGroup>
                                ))}
                            </Col>

                            {/* //* Right Column */}
                            <Col md={6}>
                                {rightFields.map((field) => (
                                    <FormGroup key={field.name}>
                                        <FormGroupLabel>
                                            {field.label}
                                        </FormGroupLabel>
                                        <FormGroupField>
                                            <Field
                                                name={field.name}
                                                component="input"
                                                type="text"
                                                placeholder={field.placeholder}
                                            />
                                        </FormGroupField>
                                    </FormGroup>
                                ))}
                            </Col>
                        </Row>
                    </div>
                </CardBody>
            </Card>
        </Col>
    );
};

Calculation.propTypes = {};

export default Calculation;
