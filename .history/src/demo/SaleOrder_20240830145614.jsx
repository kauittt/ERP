import React from "react";
import CustomEditableReactTable from "../shared/components/table/custom/CustomEditableReactTable";
import { Container, Row } from "react-bootstrap";
import CreateSaleOrderTableData from "./CreateSaleOrderTableData";
import VerticalForm from "../shared/components/form/custom/CustomVerticalForm";
import showResults from "@/utils/showResults";

const SaleOrder = () => {
    const reactTableData = CreateSaleOrderTableData();
    return (
        <Container>
            <Row>
                <VerticalForm onSubmit={showResults} />
            </Row>
            <Row>
                <CustomEditableReactTable reactTableData={reactTableData} />
            </Row>
        </Container>
    );
};

export default SaleOrder;
