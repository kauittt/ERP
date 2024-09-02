import React from "react";
import CustomEditableReactTable from "../../shared/components/table/custom/CustomEditableReactTable";
import { Container, Row } from "react-bootstrap";
import CustomVerticalForm from "../../shared/components/form/custom/CustomVerticalForm";
import showResults from "@/utils/showResults";
import CreateSaleOrderTableData from "./CreateSaleOrderTableData";

const SaleOrder = () => {
    const reactTableData = CreateSaleOrderTableData();
    return (
        <Container>
            <Row>
                <CustomVerticalForm onSubmit={showResults} />
            </Row>
            <Row>
                <CustomEditableReactTable reactTableData={reactTableData} />
            </Row>
        </Container>
    );
};

export default SaleOrder;
