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

const VerticalForm = ({ onSubmit }) => {
    const [visibleItems, setVisibleItems] = useState(4);

    const leftFields = [
        {
            label: "No.",
            name: "no",
            options: [{ value: "1017", label: "1017" }],
        },
        {
            label: "Customer No.",
            name: "customerNo",
            options: [
                { value: "001", label: "001" },
                { value: "002", label: "002" },
            ],
        },
        {
            label: "Customer Name",
            name: "customerName",
            options: [
                { value: "John Doe", label: "John Doe" },
                { value: "Jane Smith", label: "Jane Smith" },
            ],
        },
        {
            label: "Address",
            name: "address",
            options: [
                { value: "123 Main St", label: "123 Main St" },
                { value: "456 Elm St", label: "456 Elm St" },
            ],
        },
        {
            label: "Address 2",
            name: "address2",
            options: [
                { value: "Apt 101", label: "Apt 101" },
                { value: "Suite 202", label: "Suite 202" },
            ],
        },
        {
            label: "City",
            name: "city",
            options: [
                { value: "New York", label: "New York" },
                { value: "Los Angeles", label: "Los Angeles" },
            ],
        },
        {
            label: "Post Code",
            name: "postCode",
            options: [
                { value: "10001", label: "10001" },
                { value: "90001", label: "90001" },
            ],
        },
        {
            label: "Country/Region Code",
            name: "countryRegionCode",
            options: [
                { value: "US", label: "United States" },
                { value: "VN", label: "Vietnam" },
            ],
        },
        {
            label: "Phone No.",
            name: "phoneNo",
            options: [
                { value: "123-456-7890", label: "123-456-7890" },
                { value: "098-765-4321", label: "098-765-4321" },
            ],
        },
        {
            label: "Email",
            name: "email",
            options: [
                { value: "example@example.com", label: "example@example.com" },
                { value: "info@example.com", label: "info@example.com" },
            ],
        },
        {
            label: "Contact No.",
            name: "contactNo",
            options: [
                { value: "001", label: "001" },
                { value: "002", label: "002" },
            ],
        },
        {
            label: "Contact",
            name: "contact",
            options: [
                { value: "John Doe", label: "John Doe" },
                { value: "Jane Smith", label: "Jane Smith" },
            ],
        },
        {
            label: "Document Date",
            name: "documentDate",
            options: [{ value: "2021-01-28", label: "2021-01-28" }],
        },
    ];

    const rightFields = [
        {
            label: "Posting Date",
            name: "postingDate",
            options: [{ value: "2021-01-28", label: "2021-01-28" }],
        },
        {
            label: "Order Date",
            name: "orderDate",
            options: [{ value: "2021-01-28", label: "2021-01-28" }],
        },
        {
            label: "Due Date",
            name: "dueDate",
            options: [{ value: "2021-02-28", label: "2021-02-28" }],
        },
        {
            label: "Requested Delivery Date",
            name: "requestedDeliveryDate",
            options: [{ value: "2021-02-15", label: "2021-02-15" }],
        },
        {
            label: "Promised Delivery Date",
            name: "promisedDeliveryDate",
            options: [{ value: "2021-02-20", label: "2021-02-20" }],
        },
        {
            label: "External Document No.",
            name: "externalDocumentNo",
            options: [{ value: "EXT12345", label: "EXT12345" }],
        },
        {
            label: "Salesperson Code",
            name: "salespersonCode",
            options: [
                { value: "SP001", label: "SP001" },
                { value: "SP002", label: "SP002" },
            ],
        },
        {
            label: "Campaign No.",
            name: "campaignNo",
            options: [
                { value: "CMP001", label: "CMP001" },
                { value: "CMP002", label: "CMP002" },
            ],
        },
        {
            label: "Opportunity No.",
            name: "opportunityNo",
            options: [
                { value: "OPP001", label: "OPP001" },
                { value: "OPP002", label: "OPP002" },
            ],
        },
        {
            label: "Responsibility Center",
            name: "responsibilityCenter",
            options: [
                { value: "RC001", label: "RC001" },
                { value: "RC002", label: "RC002" },
            ],
        },
        {
            label: "Assigned User ID",
            name: "assignedUserId",
            options: [
                { value: "U001", label: "U001" },
                { value: "U002", label: "U002" },
            ],
        },
        {
            label: "Status",
            name: "status",
            options: [
                { value: "Open", label: "Open" },
                { value: "Closed", label: "Closed" },
            ],
        },
        {
            label: "Work Description",
            name: "workDescription",
            options: [
                { value: "Installation", label: "Installation" },
                { value: "Maintenance", label: "Maintenance" },
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
                    <CardTitleWrap>
                        <CardTitle>General</CardTitle>
                    </CardTitleWrap>

                    <Form onSubmit={onSubmit}>
                        {({ handleSubmit, form }) => (
                            <FormContainer
                                onSubmit={handleSubmit}
                                style={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    width: "100%",
                                    boxSizing: "border-box",
                                }}
                            >
                                <Row style={{ width: "100%" }}>
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
                                                        <Field
                                                            name={field.name}
                                                            component={
                                                                renderSelectField
                                                            }
                                                            options={
                                                                field.options
                                                            }
                                                        />
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
                                                        <Field
                                                            name={field.name}
                                                            component={
                                                                renderSelectField
                                                            }
                                                            options={
                                                                field.options
                                                            }
                                                        />
                                                    </FormGroupField>
                                                </FormGroup>
                                            ))}
                                    </Col>
                                </Row>

                                {/* //* Button Toolbar (optional) */}

                                <FormButtonToolbar style={{ display: flex }}>
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
