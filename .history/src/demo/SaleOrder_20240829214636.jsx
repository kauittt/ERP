import React from "react";
import { useTranslation } from "react-i18next";
import CustomEditableReactTable from "../shared/components/table/custom/CustomEditableReactTable";
import { Container, Row } from "react-bootstrap";
import CreateSaleOrderTableData from "./../containers/Tables/CreateSaleOrderTableData";

const SaleOrder = () => {
    const { t } = useTranslation("common");
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
