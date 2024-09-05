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
            <Form onSubmit={showResults}>
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
                                {props.leftFields
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
                                {props.rightFields
                                    .slice(0, visibleItems)
                                    .map((data, index) => (
                                        <FormInput
                                            key={index}
                                            data={data}
                                        ></FormInput>
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
                    </FormContainer>
                )}
            </Form>
        </Container>
    );
};

export default SaleOrder;
