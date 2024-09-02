import React from "react";
import {
    FormContainer,
    FormGroup,
    FormGroupField,
    FormGroupIcon,
    FormGroupLabel,
    FormButtonToolbar,
} from "@/shared/components/form/FormElements";

const FormInput = () => {
    return (
        <FormGroup
            key={field.name}
            style={{
                minHeight: "65px",
            }}
        >
            <FormGroupLabel>{field.label}</FormGroupLabel>
            <FormGroupField>
                {field.type === "text" && (
                    <Field
                        name={field.name}
                        component="input"
                        type="text"
                        placeholder={field.placeholder}
                        style={{
                            height: "32px",
                        }}
                    />
                )}
                {field.type === "textarea" && (
                    <Field
                        name={field.name}
                        component="textarea"
                        type="text"
                        placeholder={field.placeholder}
                        style={{
                            height: "32px",
                        }}
                    />
                )}
                {field.type === "email" && (
                    <Field
                        name={field.name}
                        component="input"
                        type="email"
                        placeholder={field.placeholder}
                        style={{
                            height: "32px",
                        }}
                    />
                )}
                {field.type === "select" && (
                    <Field
                        name={field.name}
                        component={renderSelectField}
                        options={field.options}
                        style={{
                            height: "32px",
                        }}
                    />
                )}
                {field.type === "datepicker" && (
                    <>
                        <Field
                            name={field.name}
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

export default FormInput;
