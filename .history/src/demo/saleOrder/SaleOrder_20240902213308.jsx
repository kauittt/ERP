import React from "react";
import CustomEditableReactTable from "../../shared/components/table/custom/CustomEditableReactTable";
import { Col, Container, Row } from "react-bootstrap";
import CustomVerticalForm from "../../shared/components/form/custom/CustomVerticalForm";
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

const SaleOrder = () => {
    const reactTableData = CreateSaleOrderTableData();

    // {/*//* Info  */}
    // <Row>
    //     <CustomVerticalForm />
    // </Row>

    // {/*//* Table  */}
    // <Row>
    //     <CustomEditableReactTable reactTableData={reactTableData} />
    // </Row>

    // {/*//* Calculate Discount  */}
    // <Row>
    //     <Calculation></Calculation>
    // </Row>

    // {/*//*Details  */}
    // <Row>
    //     <MoreInfo></MoreInfo>
    // </Row>

    return (
        <Container>
            <Col md={12} lg={12}>
                <Form onSubmit={showResults}>
                    {({ handleSubmit, form }) => (
                        <FormContainer
                            onSubmit={handleSubmit}
                            // style={{
                            //     display: "flex",
                            //     justifyContent: "space-between",
                            //     flexWrap: "wrap",
                            //     width: "100%",
                            //     boxSizing: "border-box",
                            // }}
                        >
                            <FormButtonToolbar
                            // style={{
                            //     width: "100%",
                            //     display: "flex",
                            //     justifyContent: "flex-end",
                            // }}
                            >
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </FormButtonToolbar>
                        </FormContainer>
                    )}
                </Form>
            </Col>
        </Container>
    );
};

export default SaleOrder;
