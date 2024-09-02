import React, { useState } from "react";
import PropTypes from "prop-types";
import { Field, Form } from "react-final-form";
import { Row, Col } from "react-bootstrap";
import EmailIcon from "mdi-react/EmailIcon";
import AccountSearchIcon from "mdi-react/AccountSearchIcon";
import renderFileInputField from "@/shared/components/form/FileInput";
import PasswordField from "@/shared/components/form/Password";
import renderSelectField from "@/shared/components/form/Select";

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
import renderDatePickerField from "@/shared/components/form/date-pickers/DatePicker";
import CalendarBlankIcon from "mdi-react/CalendarBlankIcon";

const VerticalForm = ({ onSubmit }) => {
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
                                            .map((field) => (
                                                <FormGroup
                                                    key={field.name}
                                                    style={{ height: "65px" }}
                                                >
                                                    <FormGroupLabel>
                                                        {field.label}
                                                    </FormGroupLabel>
                                                    <FormGroupField>
                                                        {field.type ===
                                                            "text" && (
                                                            <Field
                                                                name={
                                                                    field.name
                                                                }
                                                                component="input"
                                                                type="text"
                                                                placeholder={
                                                                    field.placeholder
                                                                }
                                                            />
                                                        )}
                                                        {field.type ===
                                                            "textarea" && (
                                                            <Field
                                                                name={
                                                                    field.name
                                                                }
                                                                component="textarea"
                                                                type="text"
                                                                placeholder={
                                                                    field.placeholder
                                                                }
                                                            />
                                                        )}
                                                        {field.type ===
                                                            "email" && (
                                                            <Field
                                                                name={
                                                                    field.name
                                                                }
                                                                component="input"
                                                                type="email"
                                                                placeholder={
                                                                    field.placeholder
                                                                }
                                                            />
                                                        )}
                                                        {field.type ===
                                                            "select" && (
                                                            <Field
                                                                name={
                                                                    field.name
                                                                }
                                                                component={
                                                                    renderSelectField
                                                                }
                                                                options={
                                                                    field.options
                                                                }
                                                            />
                                                        )}
                                                        {field.type ===
                                                            "datepicker" && (
                                                            <>
                                                                <Field
                                                                    name={
                                                                        field.name
                                                                    }
                                                                    component={
                                                                        renderDatePickerField
                                                                    }
                                                                />
                                                                <FormGroupIcon>
                                                                    <CalendarBlankIcon />
                                                                </FormGroupIcon>
                                                            </>
                                                        )}
                                                    </FormGroupField>
                                                </FormGroup>
                                            ))}
                                    </Col>

                                    {/* //* Right Column */}
                                    <Col md={6}>
                                        {rightFields
                                            .slice(0, visibleItems)
                                            .map((field) => (
                                                <FormGroup key={field.name}>
                                                    <FormGroupLabel>
                                                        {field.label}
                                                    </FormGroupLabel>
                                                    <FormGroupField>
                                                        {field.type ===
                                                            "text" && (
                                                            <Field
                                                                name={
                                                                    field.name
                                                                }
                                                                component="input"
                                                                type="text"
                                                                placeholder={
                                                                    field.placeholder
                                                                }
                                                            />
                                                        )}
                                                        {field.type ===
                                                            "textarea" && (
                                                            <Field
                                                                name={
                                                                    field.name
                                                                }
                                                                component="textarea"
                                                                type="text"
                                                                placeholder={
                                                                    field.placeholder
                                                                }
                                                            />
                                                        )}
                                                        {field.type ===
                                                            "email" && (
                                                            <Field
                                                                name={
                                                                    field.name
                                                                }
                                                                component="input"
                                                                type="email"
                                                                placeholder={
                                                                    field.placeholder
                                                                }
                                                            />
                                                        )}
                                                        {field.type ===
                                                            "select" && (
                                                            <Field
                                                                name={
                                                                    field.name
                                                                }
                                                                component={
                                                                    renderSelectField
                                                                }
                                                                options={
                                                                    field.options
                                                                }
                                                            />
                                                        )}
                                                        {field.type ===
                                                            "datepicker" && (
                                                            <>
                                                                <Field
                                                                    name={
                                                                        field.name
                                                                    }
                                                                    component={
                                                                        renderDatePickerField
                                                                    }
                                                                />
                                                                <FormGroupIcon>
                                                                    <CalendarBlankIcon />
                                                                </FormGroupIcon>
                                                            </>
                                                        )}
                                                    </FormGroupField>
                                                </FormGroup>
                                            ))}
                                    </Col>
                                </Row>

                                {/* //* Button Toolbar (optional) */}
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
                                        {visibleItems === 4
                                            ? "Show More"
                                            : "Show Less"}
                                    </Button>
                                    {/* <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                    <Button
                                        variant="secondary"
                                        type="button"
                                        onClick={form.reset}
                                    >
                                        Cancel
                                    </Button> */}
                                </FormButtonToolbar>
                            </FormContainer>
                        )}
                    </Form>
                </CardBody>
            </Card>
        </Col>
    );
};

VerticalForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default VerticalForm;
