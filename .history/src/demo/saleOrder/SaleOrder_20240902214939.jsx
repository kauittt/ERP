import React from "react";
import CustomEditableReactTable from "../../shared/components/table/custom/CustomEditableReactTable";
import { Col, Container, Row } from "react-bootstrap";
import CreateSaleOrderTableData from "./CreateSaleOrderTableData";
import Calculation from "./Calculation";
import MoreInfo from "./more/MoreInfo";
import {
    FormContainer,
    FormButtonToolbar,
} from "@/shared/components/form/FormElements";
import showResults from "@/utils/showResults";
import { Button } from "@/shared/components/Button";
import { Form } from "react-final-form";
import CustomVerticalForm from "./../../shared/components/form/custom/CustomVerticalForm";

const SaleOrder = () => {
    const reactTableData = CreateSaleOrderTableData();

    // style={{
    //     display: "flex",
    //     justifyContent: "space-between",
    //     flexWrap: "wrap",
    //     width: "100%",
    //     boxSizing: "border-box",
    // }}

    return (
        <Container>
            <Form onSubmit={showResults}>
                {({ handleSubmit, form }) => (
                    <FormContainer onSubmit={handleSubmit}>
                        <Col md={12} lg={12}>
                            {/*//* Info  */}
                            <Row>
                                <CustomVerticalForm />
                            </Row>

                            {/*//* Table  */}
                            <Row>
                                <CustomEditableReactTable
                                    reactTableData={reactTableData}
                                />
                            </Row>

                            {/*//* Calculate Discount  */}
                            <Row>
                                <Calculation></Calculation>
                            </Row>

                            {/*//*Details  */}
                            <Row>
                                <MoreInfo></MoreInfo>
                            </Row>

                            <Row>
                                <Card>
                                    <CardBody>
                                        <FormButtonToolbar
                                        // style={{
                                        //     width: "100%",
                                        //     display: "flex",
                                        //     justifyContent: "flex-end",
                                        // }}
                                        >
                                            <Button
                                                variant="success"
                                                type="submit"
                                            >
                                                Submit
                                            </Button>
                                        </FormButtonToolbar>
                                    </CardBody>
                                </Card>
                            </Row>
                        </Col>
                    </FormContainer>
                )}
            </Form>
        </Container>
    );
};

export default SaleOrder;
