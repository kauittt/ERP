import React, { useState } from "react";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";
import { Card, CardBody } from "@/shared/components/Card";
import showResults from "@/utils/showResults";
import InvoiceDetails from "./InvoiceDetails";
import ShippingAndBilling from "./ShippingAndBilling";

const MoreInfo = () => {
    return (
        <Col md={12} lg={12}>
            <Row>
                <Card>
                    <CardBody>
                        <InvoiceDetails onSubmit={showResults}></InvoiceDetails>
                        <ShippingAndBilling
                            onSubmit={showResults}
                        ></ShippingAndBilling>
                    </CardBody>
                </Card>
            </Row>
        </Col>
    );
};
MoreInfo.propTypes = {};

export default MoreInfo;
