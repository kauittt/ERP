import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";
import { Card, CardBody } from "@/shared/components/Card";

const MoreInfo = () => {
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
MoreInfo.propTypes = {};

export default MoreInfo;
