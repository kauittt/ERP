import React from "react";
import Collapse from "../../shared/components/Collapse";

const InvoiceDetails = () => {
    const text =
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci maxime quia voluptatibus ab molestias, dolorem ad aut nulla ea enim non odit quae, dolore ipsum eveniet dolorum doloribus assumenda animi!";
    return (
        <Collapse title={"Invoice Details"} className="with-shadow">
            <p>{text}</p>
        </Collapse>
    );
};

export default InvoiceDetails;
