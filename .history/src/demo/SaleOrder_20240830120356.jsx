import React from "react";
import CustomEditableReactTable from "../shared/components/table/custom/CustomEditableReactTable";
import { Container, Row } from "react-bootstrap";
import CreateSaleOrderTableData from "./CreateSaleOrderTableData";
import VerticalForm from "../shared/components/form/BasicForm/VerticalForm";
import showResults from "@/utils/showResults";
import HorizontalForm from "../shared/components/form/BasicForm/HorizontalForm";

const SaleOrder = () => {
    const reactTableData = CreateSaleOrderTableData();
    return (
        <Container>
            <Row>
                <HorizontalForm onSubmit={showResults} />
            </Row>
            <Row>
                <CustomEditableReactTable reactTableData={reactTableData} />
            </Row>
        </Container>
    );
};

export default SaleOrder;
