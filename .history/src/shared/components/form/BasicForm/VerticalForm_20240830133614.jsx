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
import { CalendarBlankIcon } from "mdi-react/CalendarBlankIcon";

const VerticalForm = ({ onSubmit }) => {
    const [visibleItems, setVisibleItems] = useState(4);

    const leftFields = [
        {
            label: "No.",
            name: "no",
            type: "text",
            placeholder: "Enter No.",
        },
        {
            label: "Customer No.",
            name: "customerNo",
            type: "text",
            placeholder: "Enter Customer No.",
        },
        {
            label: "Customer Name",
            name: "customerName",
            type: "text",
            placeholder: "Enter Customer Name",
        },
        {
            label: "Address",
            name: "address",
            type: "text",
            placeholder: "Enter Address",
        },
        {
            label: "Email",
            name: "email",
            type: "email",
            placeholder: "example@mail.com",
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
                { value: "closed", label: "Closed" },
            ],
        },
    ];

    const toggleVisibility = () => {
        setVisibleItems(visibleItems === 4 ? leftFields.length : 4);
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
                                    {/* <Col md={6}>
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
                                    </Col> */}
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
