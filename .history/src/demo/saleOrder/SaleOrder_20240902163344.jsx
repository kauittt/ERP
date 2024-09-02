import React from "react";
import CustomEditableReactTable from "../../shared/components/table/custom/CustomEditableReactTable";
import { Container, Row } from "react-bootstrap";
import CustomVerticalForm from "../../shared/components/form/custom/CustomVerticalForm";
import showResults from "@/utils/showResults";
import CreateSaleOrderTableData from "./CreateSaleOrderTableData";
import Calculation from "./Calculation";
import MoreInfo from "./more/MoreInfo";

const SaleOrder = () => {
    const reactTableData = CreateSaleOrderTableData();

    return (
        <Container>
            <Container>
                <Row>
                    <CustomVerticalForm onSubmit={showResults} />
                </Row>
                <Row>
                    <CustomEditableReactTable reactTableData={reactTableData} />
                </Row>

                <Row>
                    <Calculation onSubmit={showResults}></Calculation>
                </Row>

                <Row>
                    <MoreInfo></MoreInfo>
                </Row>
            </Container>
        </Container>
    );
};

export default SaleOrder;
