import React from 'react';
import { Form, Input, Button, DatePicker } from 'antd';

const IncomeForm = ({ onSubmit }) => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        onSubmit(values);
        form.resetFields();
    };

    return (
        <Form form={form} onFinish={onFinish} style={{ color: "#b4b8c1" }}>
            <Form.Item label="Name" name="name">
                <Input />
            </Form.Item>
            <Form.Item label="Amount" name="amount">
                <Input type="number" />
            </Form.Item>
            <Form.Item label="Date" name="date">
                <DatePicker />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">Submit</Button>
            </Form.Item>
        </Form>
    );
};

export default IncomeForm;
