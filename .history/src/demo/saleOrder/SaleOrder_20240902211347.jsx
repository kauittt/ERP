import React from "react";
import CustomEditableReactTable from "../../shared/components/table/custom/CustomEditableReactTable";
import { Container, Row } from "react-bootstrap";
import CustomVerticalForm from "../../shared/components/form/custom/CustomVerticalForm";
import CreateSaleOrderTableData from "./CreateSaleOrderTableData";
import Calculation from "./Calculation";
import MoreInfo from "./more/MoreInfo";

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

    return <Container></Container>;
};

export default SaleOrder;
