import React, {useEffect, useState} from 'react';
// import Button from "@material-ui/core/Button";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Popconfirm,Button, message, Row, Col } from 'antd';
import { QuestionCircleOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import Table from "antd/lib/table";

const {Column, ColumnGroup} = Table;

const User = (props) => {
    const [list, setList] = useState([]);
    // const [showForm, setShowForm] = useState(true);

    useEffect(() => {
        let data = [];
        if (JSON.parse(localStorage.getItem("list")) !== null) {
            data = JSON.parse(localStorage.getItem("list"));
        }
        setList(data);

    }, []);

    const onEdit = (record) => {
        props.history.push(`/edit/${record.id}`);
    }

    const onDelete = (id) => {
       if (message.success("Your record is delete!!")){
           const filterData = list.filter(user => user.id !== id);
           localStorage.setItem("list", JSON.stringify(filterData));
           setList(filterData);
       }

    }

    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id'
        },
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
            render: (text, record) => {
                return (
                    <div>
                        <Button primary  onClick={() => {
                            onEdit(record)
                        }}><EditOutlined /></Button>
                        &nbsp;&nbsp;
                        <Popconfirm placement="bottom" title="Are you sure to delete this record?" onConfirm={() =>{onDelete(text)}} okText="Yes" cancelText="No">
                                <Button danger><DeleteOutlined /></Button>
                        </Popconfirm>
                    </div>
                )
            }
        },

    ];

    return (
        <>

            <Row>
                <Col span={6}/>
                <Col span={12} className="mt-3">
                    <h1>Users</h1>
                    <Table
                        columns={columns}
                        dataSource={list}
                        pagination={{pageSize: 10}}
                        rowKey={'key'}
                    >
                    </Table>
                </Col>
            </Row>
        </>
    );
}
export default User;