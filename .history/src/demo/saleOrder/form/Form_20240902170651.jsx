import React from "react";
import PropTypes from "prop-types";
import {
    FormContainer,
    FormGroup,
    FormGroupField,
    FormGroupIcon,
    FormGroupLabel,
    FormButtonToolbar,
} from "@/shared/components/form/FormElements";
import { Row } from "react-bootstrap";

const CustomForm = () => {
    return (
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
                        <Button variant="primary" onClick={toggleVisibility}>
                            {visibleItems === 4 ? "Show More" : "Show Less"}
                        </Button>
                    </FormButtonToolbar>
                </FormContainer>
            )}
        </Form>
    );
};

FormInput.propTypes = {
    leftFields: PropTypes.object.isRequired,
    rightFields: PropTypes.object.isRequired,
    isButton: PropTypes.bool,
    min: PropTypes.number,
    max: PropTypes.number,
};

export default CustomForm;
