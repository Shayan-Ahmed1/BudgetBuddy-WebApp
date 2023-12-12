// import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import { useFetcher } from "react-router-dom";

const ExpenseForm = () => {
  // const [form] = Form.useForm();
  const fetcher = useFetcher();

  return (
    <fetcher.Form
      style={{
        width: 350,
        textEmphasisColor: "white",
        // background: "skyblue",
        // background: "hsl(183 74% 44%)",
        // background: "#001529",
        background: "#0071BC",

        color: "white",
        border: "solid 1px white",
        borderRadius: "30px",
        height: 400,
        display: "grid",
        justifyItems: "center",
        alignItems: "center",
        // paddingLeft: 30,
        alignContent: "center",
      }}
    >
      <Form.Item>
        <h2 className="text-white">Add Expense</h2>
      </Form.Item>
      <Form.Item label="Field A" className="text-white">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item label="Field B">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary-white"
          className="ant-list-item"
          style={{ border: "solid 1px white" }}
        >
          Submit
        </Button>
      </Form.Item>
    </fetcher.Form>
  );
};
export default ExpenseForm;
