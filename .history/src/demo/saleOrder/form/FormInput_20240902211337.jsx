import React from "react";
import PropTypes from "prop-types";
import {
    FormGroup,
    FormGroupField,
    FormGroupIcon,
    FormGroupLabel,
} from "@/shared/components/form/FormElements";
import { Field } from "react-final-form";
import renderSelectField from "@/shared/components/form/Select";
import renderCheckBoxField from "@/shared/components/form/custom/CustomCheckBox";
import CalendarBlankIcon from "mdi-react/CalendarBlankIcon";
import renderDatePickerField from "@/shared/components/form/date-pickers/DatePicker";
import renderDateTimePickerField from "@/shared/components/form/date-pickers/DateTimePicker";
import TimetableIcon from "mdi-react/TimetableIcon";

const FormInput = ({ data }) => {
    // <>
    //                 <Field
    //                     name={data.name}
    //                     component={renderDatePickerField}
    //                     style={{
    //                         height: "32px",
    //                     }}
    //                 />
    //                 <FormGroupIcon>
    //                     <CalendarBlankIcon />
    //                 </FormGroupIcon>
    //             </>

    // <>
    //                     <Field
    //                         name="date_time"
    //                         component={renderDateTimePickerField}
    //                     />
    //                     <FormGroupIcon>
    //                         <TimetableIcon />
    //                     </FormGroupIcon>
    //                 </>

    const styleType = "colored";
    return (
        <FormGroup
            key={data.name}
            style={{
                minHeight: "65px",
            }}
        >
            {/*//* Label  */}
            {data.type != "checkbox" && (
                <FormGroupLabel>{data.label}</FormGroupLabel>
            )}

            {/*//* Field  */}
            <FormGroupField>
                {data.type === "text" && (
                    <Field
                        name={data.name}
                        component="input"
                        type="text"
                        placeholder={data.placeholder}
                        style={{
                            height: "32px",
                        }}
                    />
                )}
                {data.type === "textarea" && (
                    <Field
                        name={data.name}
                        component="textarea"
                        type="text"
                        placeholder={data.placeholder}
                        style={{
                            height: "32px",
                        }}
                    />
                )}
                {data.type === "email" && (
                    <Field
                        name={data.name}
                        component="input"
                        type="email"
                        placeholder={data.placeholder}
                        style={{
                            height: "32px",
                        }}
                    />
                )}
                {data.type === "select" && (
                    <Field
                        name={data.name}
                        component={renderSelectField}
                        options={data.options}
                        style={{
                            height: "32px",
                        }}
                    />
                )}
                {data.type === "datepicker" && (
                    <>
                        <Field
                            name={data.name}
                            component={renderDatePickerField}
                            style={{
                                height: "32px",
                            }}
                        />
                        <FormGroupIcon>
                            <CalendarBlankIcon />
                        </FormGroupIcon>
                    </>
                )}
                {data.type === "checkbox" && (
                    <Field
                        name={data.name}
                        type="checkbox"
                        component={renderCheckBoxField}
                        label={data.label}
                        styleType={styleType}
                    />
                )}
            </FormGroupField>
        </FormGroup>
    );
};

FormInput.propTypes = {
    data: PropTypes.object.isRequired,
};

export default FormInput;
