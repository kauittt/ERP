import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { Field, Form } from "react-final-form";
import { Col } from "react-bootstrap";
import CalendarBlankIcon from "mdi-react/CalendarBlankIcon";
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
} from "@/shared/components/form/FormElements";

const DatePickers = ({ onSubmit }) => {
    const { t } = useTranslation("common");

    return (
        <Col xs={12} md={12} lg={12} xl={6}>
            <Card>
                <CardBody>
                    <CardTitleWrap>
                        <CardTitle>
                            {t("forms.from_picker.date_picker")}
                        </CardTitle>
                    </CardTitleWrap>
                    <Form onSubmit={onSubmit}>
                        {({ handleSubmit }) => (
                            <FormContainer onSubmit={handleSubmit}>
                                <FormGroup>
                                    <FormGroupLabel>
                                        Default Date Picker
                                    </FormGroupLabel>
                                    <FormGroupField>
                                        <Field
                                            name="default_date"
                                            component={renderDatePickerField}
                                        />
                                        <FormGroupIcon>
                                            <CalendarBlankIcon />
                                        </FormGroupIcon>
                                    </FormGroupField>
                                </FormGroup>
                            </FormContainer>
                        )}
                    </Form>
                </CardBody>
            </Card>
        </Col>
    );
};

DatePickers.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default DatePickers;
