import React from "react";
import {
    FormGroup,
    FormGroupField,
    FormGroupIcon,
    FormGroupLabel,
} from "@/shared/components/form/FormElements";

const FormInput = ({ data }) => {
    return (
        <FormGroup
            key={data.name}
            style={{
                minHeight: "65px",
            }}
        >
            {field.type != "checkbox" && (
                <FormGroupLabel>{field.label}</FormGroupLabel>
            )}
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
            </FormGroupField>
        </FormGroup>
    );
};

FormInput.propTypes = {
    data: PropTypes.object.isRequired,
};

export default FormInput;
