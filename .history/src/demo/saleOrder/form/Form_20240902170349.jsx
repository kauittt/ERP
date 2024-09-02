import React from "react";

const CustomForm = () => {
    return (
        <Form onSubmit={onSubmit}>
            {({ handleSubmit, form }) => (
                <FormContainer
                    onSubmit={handleSubmit}
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        width: "100%",
                        boxSizing: "border-box",
                    }}
                >
                    <Row style={{ width: "100%", flex: 1 }}>
                        {/* //* Left Column */}
                        <Col md={6}>
                            {leftFields
                                .slice(0, visibleItems)
                                .map((data, index) => (
                                    <FormInput
                                        key={index}
                                        data={data}
                                    ></FormInput>
                                ))}
                        </Col>

                        {/* //* Right Column */}
                        <Col md={6}>
                            {rightFields
                                .slice(0, visibleItems)
                                .map((data, index) => (
                                    <FormInput
                                        key={index}
                                        data={data}
                                    ></FormInput>
                                ))}
                        </Col>
                    </Row>

                    <FormButtonToolbar
                        style={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "flex-end",
                        }}
                    >
                        <Button variant="primary" onClick={toggleVisibility}>
                            {visibleItems === 4 ? "Show More" : "Show Less"}
                        </Button>
                    </FormButtonToolbar>
                </FormContainer>
            )}
        </Form>
    );
};

FormInput.propTypes = {
    data: PropTypes.object.isRequired,
};

export default CustomForm;
