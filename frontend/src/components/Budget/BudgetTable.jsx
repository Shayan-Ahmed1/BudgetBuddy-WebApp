import React from 'react';
import { Table } from 'antd';
import { TrashIcon } from '@heroicons/react/24/solid';

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Amount',
        dataIndex: 'amount',
        key: 'amount',
    },
    {
        title: 'Date',
        dataIndex: 'createdAt',
        key: 'date',
    },
    {
        title: 'Delete',
        key: 'delete',
        render: () => (
            <TrashIcon width={25} />
        ),
    },
];

const BudgetTable = ({ budgets }) =>
    <Table
        columns={columns}
        dataSource={budgets}
        style={{
            marginTop: "50px",
            width: "600px",
            marginLeft: "10px",
            borderRadius: '8px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
            background: "lightblue",
        }} />;
export default BudgetTable; 
