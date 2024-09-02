import React from "react";
import Collapse from "../../shared/components/Collapse";

const InvoiceDetails = () => {
    return (
        <Collapse title={"Invoice Details"} className="with-shadow">
            <p>{text}</p>
        </Collapse>
    );
};

export default InvoiceDetails;
