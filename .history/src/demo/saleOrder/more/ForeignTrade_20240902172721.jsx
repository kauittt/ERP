import React, { useState } from "react";
import PropTypes from "prop-types";
import { Field, Form } from "react-final-form";
import { Row, Col } from "react-bootstrap";
import renderSelectField from "@/shared/components/form/Select";
import renderDatePickerField from "@/shared/components/form/date-pickers/DatePicker";
import {
    Card,
    CardBody,
    CardTitleWrap,
    CardTitle,
} from "@/shared/components/Card";
import {
    FormContainer,
    FormGroup,
    FormGroupField,
    FormGroupIcon,
    FormGroupLabel,
    FormButtonToolbar,
} from "@/shared/components/form/FormElements";
import { Button } from "@/shared/components/Button";
import CalendarBlankIcon from "mdi-react/CalendarBlankIcon";
import Collapse from "../../../shared/components/Collapse";
import FormInput from "../form/FormInput";
import CustomForm from "../form/CustomForm";

const ForeignTrade = ({ onSubmit }) => {
    const min = 3;
    const max = 3;

    const [visibleItems, setVisibleItems] = useState(min);
    const leftFields = [
        {
            label: "Transaction Specification",
            name: "transactionSpecification",
            type: "select",
            options: [
                { value: "spec1", label: "Specification 1" },
                { value: "spec2", label: "Specification 2" },
                { value: "spec3", label: "Specification 3" },
            ],
        },
        {
            label: "Transaction Type",
            name: "transactionType",
            type: "select",
            options: [
                { value: "type1", label: "Type 1" },
                { value: "type2", label: "Type 2" },
                { value: "type3", label: "Type 3" },
            ],
        },
        {
            label: "Transport Method",
            name: "transportMethod",
            type: "select",
            options: [
                { value: "method1", label: "Method 1" },
                { value: "method2", label: "Method 2" },
                { value: "method3", label: "Method 3" },
            ],
        },
    ];

    const rightFields = [
        {
            label: "Exit Point",
            name: "exitPoint",
            type: "select",
            options: [
                { value: "exit1", label: "Exit 1" },
                { value: "exit2", label: "Exit 2" },
                { value: "exit3", label: "Exit 3" },
            ],
        },
        {
            label: "Area",
            name: "area",
            type: "select",
            options: [
                { value: "area1", label: "Area 1" },
                { value: "area2", label: "Area 2" },
                { value: "area3", label: "Area 3" },
            ],
        },
    ];

    return (
        <Collapse title={"Foreign Trade"} className="with-shadow">
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
ForeignTrade.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default ForeignTrade;
