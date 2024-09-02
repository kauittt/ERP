import React from "react";
import Collapse from "../../../shared/components/Collapse";
import CustomForm from "../form/CustomForm";

const Prepayment = () => {
    const leftFields = [
        {
            label: "Prepayment%",
            name: "prepaymentPercentage",
            type: "text",
        },
        {
            label: "Compress Prepayment",
            name: "compressPrepayment",
            type: "checkbox",
        },
        {
            label: "Prepmt. Payment Terms Code",
            name: "prepmtPaymentTermsCode",
            type: "select",
            options: [
                { value: "pmtTerm1", label: "Payment Term 1" },
                { value: "pmtTerm2", label: "Payment Term 2" },
                { value: "pmtTerm3", label: "Payment Term 3" },
            ],
        },
    ];

    const rightFields = [
        {
            label: "Prepayment Due Date",
            name: "prepaymentDueDate",
            type: "select",
            options: [
                { value: "dueDate1", label: "Due Date 1" },
                { value: "dueDate2", label: "Due Date 2" },
                { value: "dueDate3", label: "Due Date 3" },
            ],
        },
        {
            label: "Prepmt. Payment Discount",
            name: "prepmtPaymentDiscount",
            type: "text",
        },
        {
            label: "Prepmt. Pmt. Discount Date",
            name: "prepmtPmtDiscountDate",
            type: "select",
            options: [
                { value: "discountDate1", label: "Discount Date 1" },
                { value: "discountDate2", label: "Discount Date 2" },
                { value: "discountDate3", label: "Discount Date 3" },
            ],
        },
    ];

    return (
        <Collapse title={"Prepayment"} className="with-shadow">
            {/* //* Form */}
            <CustomForm
                leftFields={leftFields}
                rightFields={rightFields}
                min={3}
                max={3}
            ></CustomForm>
        </Collapse>
    );
};
Prepayment.propTypes = {};

export default Prepayment;
