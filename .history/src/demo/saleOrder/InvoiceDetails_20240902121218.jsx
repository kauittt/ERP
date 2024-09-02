import React from "react";
import Collapse from "../../shared/components/Collapse";

const InvoiceDetails = () => {
    const text = Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, illo magni, quod officiis hic exercitationem quo sint adipisci provident quos debitis similique cum assumenda rerum. Exercitationem minima adipisci delectus atque.
    Ex aliquid sit, id sapiente dolor sint illum odio doloribus accusamus quasi cum quod at distinctio eaque laudantium magnam eos porro iusto odit quis explicabo obcaecati sed rerum! Ad, itaque!
    return (
        <Collapse title={"Invoice Details"} className="with-shadow">
            <p>{text}</p>
        </Collapse>
    );
};

export default InvoiceDetails;
