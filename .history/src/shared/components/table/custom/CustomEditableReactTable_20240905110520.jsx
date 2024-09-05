import React, { useState } from "react";
import PropTypes from "prop-types";
import { Col } from "react-bootstrap";
import {
    Card,
    CardBody,
    CardTitleWrap,
    CardTitle,
} from "@/shared/components/Card";
import { Button } from "@/shared/components/Button";
import CustomReactTableBase from "./CustomReactTableBase";

const CustomEditableReactTable = ({ reactTableData }) => {
    const [rows, setData] = useState(reactTableData.tableRowsData);
    const [withPagination, setWithPaginationTable] = useState(true);
    const [isSortable, setIsSortable] = useState(false);
    const [withSearchEngine, setWithSearchEngine] = useState(false);

    const updateEditableData = (rowIndex, columnId, value) => {
        setData((old) =>
            old.map((item, index) => {
                if (index === rowIndex) {
                    return {
                        ...old[rowIndex],
                        [columnId]: value,
                    };
                }
                return item;
            })
        );
    };

    const handleClickIsSortable = () => {
        setIsSortable(!isSortable);
    };

    const handleClickWithPagination = () => {
        setWithPaginationTable(!withPagination);
    };

    const handleClickWithSearchEngine = () => {
        setWithSearchEngine(!withSearchEngine);
    };

    const tableConfig = {
        isEditable: true,
        isSortable,
        isResizable: false,
        withPagination,
        withSearchEngine,
        manualPageSize: [10, 20, 30, 40],
        placeholder: "Search by First name...",
    };

    //* Add new ROW
    const handleAddRow = () => {
        setData([
            ...rows,
            {
                type: "",
                no: "",
                description: "",
                locationCode: "",
                quantity: "",
                unitPriceExclVAT: "",
                lineAmountExclVAT: "",
                lineDiscountPercent: "",
                qtyToShip: "",
                quantityShipped: "",
                qtyToInvoice: "",
                quantityInvoiced: "",
                qtyToAssign: "",
                qtyAssigned: "",
                plannedDeliveryDate: "",
                plannedShipmentDate: "",
                shipmentDate: "",
                dropShipment: "",
                purchasingCode: "",
            },
        ]);
    };

    return (
        <Col md={12} lg={12}>
            <Card>
                <CardBody>
                    {/*//* Title  */}
                    <div className="d-flex justify-content-between align-items-center bs">
                        <CardTitleWrap>
                            <CardTitle>Lines</CardTitle>
                        </CardTitleWrap>

                        <Button variant="primary" onClick={handleAddRow}>
                            Add
                        </Button>
                    </div>
                    {/*//* Table  */}
                    <CustomReactTableBase
                        key={withSearchEngine ? "searchable" : "common"}
                        columns={reactTableData.tableHeaderData}
                        data={rows}
                        updateEditableData={updateEditableData}
                        tableConfig={tableConfig}
                    />
                </CardBody>
            </Card>
        </Col>
    );
};

CustomEditableReactTable.propTypes = {
    reactTableData: PropTypes.shape({
        tableHeaderData: PropTypes.arrayOf(
            PropTypes.shape({
                key: PropTypes.string,
                name: PropTypes.string,
            })
        ),
        tableRowsData: PropTypes.arrayOf(PropTypes.shape()),
    }).isRequired,
};

export default CustomEditableReactTable;
