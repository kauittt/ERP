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

const CustomVerticalForm = ({ onSubmit }) => {
    const leftFields = [
        {
            label: "Address",
            name: "address",
            type: "text",
        },
    ];

    const rightFields = [
        {
            label: "Address",
            name: "address",
            type: "text",
        },
    ];

    return (
        <Col md={12} lg={12}>
            <Card>
                <CardBody>
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
                                                        <Field
                                                            name={field.name}
                                                            component="input"
                                                            type="text"
                                                            placeholder={
                                                                field.placeholder
                                                            }
                                                            style={{
                                                                height: "32px",
                                                            }}
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
                                                <FormGroup
                                                    key={field.name}
                                                    style={{
                                                        minHeight: "65px",
                                                    }}
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
                                                                style={{
                                                                    height: "32px",
                                                                }}
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
                                                                style={{
                                                                    height: "32px",
                                                                }}
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
                                                                style={{
                                                                    height: "32px",
                                                                }}
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
                                                                style={{
                                                                    height: "32px",
                                                                }}
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
                                                                    style={{
                                                                        height: "32px",
                                                                    }}
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
                                </FormButtonToolbar>
                            </FormContainer>
                        )}
                    </Form>
                </CardBody>
            </Card>
        </Col>
    );
};

CustomVerticalForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default CustomVerticalForm;
