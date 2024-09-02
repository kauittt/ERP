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
import Collapse from "../../../shared/components/Collapse";
import FormInput from "../FormInput";

const Prepayment = ({ onSubmit }) => {
    //3 -> 6
    //2 -> 7
    const min = 3;
    const max = 3;
    const [visibleItems, setVisibleItems] = useState(min);

    const leftFields = [
        {
            label: "Prepayment%",
            name: "prepaymentPercentage",
            type: "text",
        },
        {
            label: "Compress Prepayment",
            name: "compressPrepayment",
            type: "checkbox",
        },
        {
            label: "Prepmt. Payment Terms Code",
            name: "prepmtPaymentTermsCode",
            type: "select",
            options: [
                { value: "pmtTerm1", label: "Payment Term 1" },
                { value: "pmtTerm2", label: "Payment Term 2" },
                { value: "pmtTerm3", label: "Payment Term 3" },
            ],
        },
    ];

    const rightFields = [
        {
            label: "Prepayment Due Date",
            name: "prepaymentDueDate",
            type: "select",
            options: [
                { value: "dueDate1", label: "Due Date 1" },
                { value: "dueDate2", label: "Due Date 2" },
                { value: "dueDate3", label: "Due Date 3" },
            ],
        },
        {
            label: "Prepmt. Payment Discount",
            name: "prepmtPaymentDiscount",
            type: "text",
        },
        {
            label: "Prepmt. Pmt. Discount Date",
            name: "prepmtPmtDiscountDate",
            type: "select",
            options: [
                { value: "discountDate1", label: "Discount Date 1" },
                { value: "discountDate2", label: "Discount Date 2" },
                { value: "discountDate3", label: "Discount Date 3" },
            ],
        },
    ];

    const toggleVisibility = () => {
        setVisibleItems(visibleItems === min ? max : min);
    };
    return (
        <Collapse title={"Prepayment"} className="with-shadow">
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
                    </FormContainer>
                )}
            </Form>
        </Collapse>
    );
};
Prepayment.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default Prepayment;
