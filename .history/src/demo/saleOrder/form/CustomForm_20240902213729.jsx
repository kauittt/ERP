import React, { useState } from "react";
import PropTypes from "prop-types";
import { Field, Form } from "react-final-form";
import { Row, Col } from "react-bootstrap";
import {
    FormContainer,
    FormGroup,
    FormGroupField,
    FormGroupIcon,
    FormGroupLabel,
    FormButtonToolbar,
} from "@/shared/components/form/FormElements";
import showResults from "@/utils/showResults";
import FormInput from "./FormInput";
import { Button } from "@/shared/components/Button";

const CustomForm = (props) => {
    const [visibleItems, setVisibleItems] = useState(props.min);

    const toggleVisibility = () => {
        setVisibleItems(visibleItems === props.min ? props.max : props.min);
    };

    return (
        <Row style={{ width: "100%", flex: 1 }}>
            {/* //* Left Column */}
            <Col md={6}>
                {props.leftFields.slice(0, visibleItems).map((data, index) => (
                    <FormInput key={index} data={data}></FormInput>
                ))}
            </Col>

            {/* //* Right Column */}
            <Col md={6}>
                {props.rightFields.slice(0, visibleItems).map((data, index) => (
                    <FormInput key={index} data={data}></FormInput>
                ))}
            </Col>
        </Row>
        {props.isButton && (
            <FormButtonToolbar
                style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-end",
                }}
            >
                {props.btnContent == "" ? (
                    <Button
                        variant="primary"
                        onClick={toggleVisibility}
                    >
                        {visibleItems === props.min
                            ? "Show More"
                            : "Show Less"}
                    </Button>
                ) : (
                    <Button variant="primary">
                        {props.btnContent}
                    </Button>
                )}
            </FormButtonToolbar>
        )}
    );
};

CustomForm.propTypes = {
    leftFields: PropTypes.array.isRequired,
    rightFields: PropTypes.array.isRequired,
    isButton: PropTypes.bool,
    min: PropTypes.number,
    max: PropTypes.number,
    btnContent: PropTypes.string,
};

CustomForm.defaultProps = {
    isButton: true,
    btnContent: "",
};

export default CustomForm;
