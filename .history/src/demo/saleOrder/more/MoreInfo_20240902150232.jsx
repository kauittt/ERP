import React, { useState } from "react";
import PropTypes from "prop-types";
import { Field, Form } from "react-final-form";
import { Row, Col } from "react-bootstrap";
import { Card, CardBody } from "@/shared/components/Card";

const ShippingAndBilling = ({ onSubmit }) => {
    return (
        <Col md={12} lg={12}>
            <Row>
                <Card>
                    <CardBody></CardBody>
                </Card>
            </Row>
        </Col>
    );
};
ShippingAndBilling.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default ShippingAndBilling;
