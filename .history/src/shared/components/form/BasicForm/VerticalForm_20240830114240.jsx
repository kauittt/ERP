import React from "react";
import PropTypes from "prop-types";
import { Field, Form } from "react-final-form";
import { Row, Col } from "react-bootstrap";
import EmailIcon from "mdi-react/EmailIcon";
import AccountSearchIcon from "mdi-react/AccountSearchIcon";
import renderFileInputField from "@/shared/components/form/FileInput";
import PasswordField from "@/shared/components/form/Password";
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
} from "@/shared/components/form/FormElements";

const VerticalForm = ({ onSubmit }) => {
    return (
        <Col md={12} lg={12}>
            <Card>
                <CardBody>
                    {/* //* General */}
                    <CardTitleWrap>
                        <CardTitle>General</CardTitle>
                    </CardTitleWrap>

                    {/* //* Form */}
                    <Form onSubmit={onSubmit}>
                        {({ handleSubmit, form }) => (
                            <FormContainer onSubmit={handleSubmit}>
                                <Row>
                                    {/* //* Left Column */}
                                    <Col md={6}>
                                        <FormGroup>
                                            <FormGroupLabel>
                                                Default Label
                                            </FormGroupLabel>
                                            <FormGroupField>
                                                <Field
                                                    name="defaultInput"
                                                    component="input"
                                                    type="text"
                                                    placeholder="Default Input"
                                                />
                                            </FormGroupField>
                                        </FormGroup>

                                        <FormGroup>
                                            <FormGroupLabel>
                                                Disabled Field
                                            </FormGroupLabel>
                                            <FormGroupField>
                                                <Field
                                                    name="disableInput"
                                                    component="input"
                                                    type="text"
                                                    placeholder="Disabled Input"
                                                    disabled
                                                />
                                            </FormGroupField>
                                        </FormGroup>

                                        <FormGroup>
                                            <FormGroupLabel>
                                                E-mail
                                            </FormGroupLabel>
                                            <FormGroupField>
                                                <Field
                                                    name="email"
                                                    component="input"
                                                    type="email"
                                                    placeholder="example@mail.com"
                                                />
                                            </FormGroupField>
                                        </FormGroup>
                                    </Col>

                                    {/* //* Right Column */}
                                    <Col md={12}>
                                        <FormGroup>
                                            <FormGroupLabel>
                                                Password
                                            </FormGroupLabel>
                                            <FormGroupField>
                                                <Field
                                                    name="password"
                                                    component={PasswordField}
                                                    placeholder="Password"
                                                />
                                            </FormGroupField>
                                        </FormGroup>

                                        <FormGroup>
                                            <FormGroupLabel>
                                                Icon Left
                                            </FormGroupLabel>
                                            <FormGroupField>
                                                <FormGroupIcon>
                                                    <EmailIcon />
                                                </FormGroupIcon>
                                                <Field
                                                    name="leftIcon"
                                                    component="input"
                                                    type="email"
                                                    placeholder="Icon Left Input"
                                                />
                                            </FormGroupField>
                                        </FormGroup>

                                        <FormGroup>
                                            <FormGroupLabel>
                                                Icon Right
                                            </FormGroupLabel>
                                            <FormGroupField>
                                                <Field
                                                    name="rightIcon"
                                                    component="input"
                                                    type="text"
                                                    placeholder="Icon Right Input"
                                                />
                                                <FormGroupIcon>
                                                    <AccountSearchIcon />
                                                </FormGroupIcon>
                                            </FormGroupField>
                                        </FormGroup>

                                        <FormGroup>
                                            <FormGroupLabel>
                                                Add file
                                            </FormGroupLabel>
                                            <FormGroupField>
                                                <Field
                                                    name="fileVertical"
                                                    component={
                                                        renderFileInputField
                                                    }
                                                />
                                            </FormGroupField>
                                        </FormGroup>
                                    </Col>
                                </Row>

                                {/* //* Button Toolbar (optional) */}
                                {/* 
                                <FormButtonToolbar>
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                    <Button
                                        variant="secondary"
                                        type="button"
                                        onClick={form.reset}
                                    >
                                        Cancel
                                    </Button>
                                </FormButtonToolbar> 
                                */}
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
