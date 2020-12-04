import React, {useEffect, useState} from 'react';
import { Row, Col } from 'antd';
import Table from "antd/lib/table";
const { Column, ColumnGroup } = Table;
const columns = [
    {
        title: 'First Name',
        width: 120,
        dataIndex: 'firstName',
        key: 'firstName',
        fixed: 'left',
    },
    {
        title: 'Last Name',
        width: 100,
        dataIndex: 'lastName',
        key: 'lastName',
        fixed: 'left',
    },
    {
        title: 'Email',
        width: 100,
        dataIndex: 'email',
        key: 'email',
        fixed: 'left',
    },
    {
        title: 'Age',
        width: 100,
        dataIndex: 'age',
        key: 'age',
        fixed: 'left',
    },
    {
        title: 'Gender',
        width: 100,
        dataIndex: 'gender',
        key: 'gender',
        fixed: 'left',
    },
    {
        title: 'Country',
        width: 100,
        dataIndex: 'country',
        key: 'country',
        fixed: 'left',
    },
    {
        title: 'Action',
        dataIndex: 'id',
        render: (text, record) => (
            <div>
                <button className="btn btn-outline-primary btn-mini" onClick={() => onEdit(record)}>
                    Edit
                </button>
                &nbsp;&nbsp;
                <button className="btn btn-outline-danger btn-mini" onClick={() => onDelete(record)}>
                    Delete
                </button>
            </div>
        )
    },

];
const onEdit = (record) =>{
    console.log("Edit");
}
const onDelete = (record) =>{
    console.log("Delete");
}

const User = (props) =>{
    const [isEditable, setEditableIndex] = useState(null);
    const [list, setList] = useState([]);


    useEffect(() =>{
        let data = [];
        if (JSON.parse(localStorage.getItem("list")) !== null){
            data = JSON.parse(localStorage.getItem("list"));
        }
       setList(data);
    },[]);

    return(
        <>
            <h1>User</h1>
            <Row>
                <Col span={6}/>
                <Col span={12} className="mt-3">
                    <Table
                        columns={columns}
                        dataSource={list}
                        pagination={{pageSize: 10}}
                        rowKey={'key'}
                        // loading={isLoading}
                    >
                    </Table>
                </Col>
            </Row>
        </>
    );
}
export default User;