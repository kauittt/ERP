import React from "react";
import { Row, Col } from "react-bootstrap";
import { Card, CardBody } from "@/shared/components/Card";
import showResults from "@/utils/showResults";
import InvoiceDetails from "./InvoiceDetails";
import ShippingAndBilling from "./ShippingAndBilling";
import { styled } from "styled-components";
import { padding } from "polished";
import ForeignTrade from "./ForeignTrade";

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

                        <ForeignTrade onSubmit={showResults}></ForeignTrade>
                    </CardBody>
                </Card>
            </Row>
        </Col>
    );
};
MoreInfo.propTypes = {};

export default MoreInfo;
