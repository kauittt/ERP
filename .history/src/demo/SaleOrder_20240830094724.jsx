import React from "react";
import CustomEditableReactTable from "../shared/components/table/custom/CustomEditableReactTable";
import { Container, Row } from "react-bootstrap";
import CreateSaleOrderTableData from "./CreateSaleOrderTableData";

const SaleOrder = () => {
    const reactTableData = CreateSaleOrderTableData();
    // reactTableData.tableRowsData = [];
    return (
        <Container>
            <Row>
                <CustomEditableReactTable reactTableData={reactTableData} />
            </Row>
        </Container>
    );
};

export default SaleOrder;
