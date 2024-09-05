import React from "react";
import { Row, Col } from "react-bootstrap";
import { Card, CardBody } from "@/shared/components/Card";
import InvoiceDetails from "./InvoiceDetails";
import ShippingAndBilling from "./ShippingAndBilling";
import ForeignTrade from "./ForeignTrade";
import Prepayment from "./Prepayment";

const MoreInfo = () => {
    return (
        <Col md={12} lg={12}>
            <Row>
                <Card>
                    <CardBody>
                        <InvoiceDetails></InvoiceDetails>

                        <ShippingAndBilling></ShippingAndBilling>

                        <ForeignTrade></ForeignTrade>

                        <Prepayment></Prepayment>
                    </CardBody>
                </Card>
            </Row>
        </Col>
    );
};
MoreInfo.propTypes = {};

export default MoreInfo;
