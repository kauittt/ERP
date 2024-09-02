import React, { useMemo } from "react";

const CreateSaleOrderTableData = () => {
    const columns = useMemo(
        () => [
            {
                Header: "Type",
                accessor: "type",
            },
            {
                Header: "No",
                accessor: "no",
            },
            {
                Header: "Description",
                accessor: "description",
            },
            {
                Header: "Location Code",
                accessor: "locationCode",
            },
            {
                Header: "Quantity",
                accessor: "quantity",
            },
            {
                Header: "Unit Price Excl VAT",
                accessor: "unitPriceExclVAT",
            },
            {
                Header: "Line Amount Excl VAT",
                accessor: "lineAmountExclVAT",
            },
            {
                Header: "Line Discount %",
                accessor: "lineDiscountPercent",
            },
            {
                Header: "Qty. to Ship",
                accessor: "qtyToShip",
            },
            {
                Header: "Quantity Shipped",
                accessor: "quantityShipped",
            },
            {
                Header: "Qty. to Invoice",
                accessor: "qtyToInvoice",
            },
            {
                Header: "Quantity Invoiced",
                accessor: "quantityInvoiced",
            },
            {
                Header: "Qty. to Assign",
                accessor: "qtyToAssign",
            },
            {
                Header: "Qty. Assigned",
                accessor: "qtyAssigned",
            },
            {
                Header: "Planned Delivery Date",
                accessor: "plannedDeliveryDate",
            },
            {
                Header: "Planned Shipment Date",
                accessor: "plannedShipmentDate",
            },
            {
                Header: "Shipment Date",
                accessor: "shipmentDate",
            },
            {
                Header: "Drop Shipment",
                accessor: "dropShipment",
            },
            {
                Header: "Purchasing Code",
                accessor: "purchasingCode",
            },
        ],
        []
    );

    const data = [];
    const rowQuantity = 2;
    const rows = () => {
        for (let i = 1; i <= rowQuantity; i += 1) {
            data.push({
                type: "-",
                no: "-",
                description: "-",
                locationCode: "-",
                quantity: "-",
                unitPriceExclVAT: "-",
                lineAmountExclVAT: "-",
                lineDiscountPercent: "-",
                qtyToShip: "-",
                quantityShipped: "-",
                qtyToInvoice: "-",
                quantityInvoiced: "-",
                qtyToAssign: "-",
                qtyAssigned: "-",
                plannedDeliveryDate: "-",
                plannedShipmentDate: "-",
                shipmentDate: "-",
                dropShipment: "-",
                purchasingCode: "-",
            });
        }
    };

    rows();
    const saleOrderTableData = {
        tableHeaderData: columns,
        tableRowsData: data,
    };
    return saleOrderTableData;
};

export default CreateSaleOrderTableData;
