import React, {useEffect, useState} from 'react';
import {Popconfirm, Button, message, Row, Col, Input} from 'antd';
import { DeleteOutlined, EditOutlined, SearchOutlined} from '@ant-design/icons';
import Table from "antd/lib/table";
import {useHistory} from 'react-router-dom';

const {Column, ColumnGroup} = Table;
const { Search } = Input;

const User = (props) => {
    const [searchDetails, setSearchDetails] = useState({
        firstName:"",
        lastName:"",
        email:"",
        age:"",
        gender:""
    });
    const [list, setList] = useState([]);
    const history = useHistory();
    const [searchDuplicate, setSearchDuplicate] = useState([]);

    useEffect(() => {
        let data = [];
        if (JSON.parse(localStorage.getItem("list")) !== null) {
            data = JSON.parse(localStorage.getItem("list"));
        }
        setList(data);
        setSearchDuplicate(data);

    }, []);

    const onEdit = (record) => {
        history.push(`/edit/${record.id}`);
    }

    const onDelete = (id) => {
        if (message.success("Your record is delete!!")) {
            const filterData = list.filter(user => user.id !== id);
            localStorage.setItem("list", JSON.stringify(filterData));
            setList(filterData);
        }

    }

    const onLogOut = () => {
        history.push("/login");
        localStorage.setItem("token","");
    }
    const onNewData = () => {
        history.push("/signup");
    }

    const onChange = e =>{
        const {name,value} = e.target;
        setSearchDetails({...searchDetails,[name]: value});
    }
    const onSearch = () => {
        let searchValue = searchDetails;
        let row = searchDuplicate || [];
        if (searchValue.firstName) {
            row = row.filter(value => value.firstName.toLowerCase().includes(searchValue.firstName.toLowerCase()));
        }
        if (searchValue.lastName) {
            row = row.filter(value => value.lastName.toLowerCase().includes(searchValue.lastName.toLowerCase()));
        }
        if (searchValue.email) {
            row = row.filter(value => value.email.toLowerCase().includes(searchValue.email.toLowerCase()));
        }
        if (searchValue.age) {
            row = row.filter(value => value.age.toString().toLowerCase().includes(searchValue.age.toLowerCase()));
        }
        if (searchValue.gender) {
            row = row.filter(value => value.gender.toLowerCase() === searchValue.gender.toLowerCase());
        }
        setList(row);
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
                        <Button primary onClick={() => {
                            onEdit(record)
                        }}><EditOutlined/></Button>
                        &nbsp;&nbsp;
                        <Popconfirm placement="bottom" title="Are you sure to delete this record?" onConfirm={() => {
                            onDelete(text)
                        }} okText="Yes" cancelText="No">
                            <Button danger><DeleteOutlined/></Button>
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

                    <div className="header-data">
                        <h1>Users</h1>
                        <Button type="primary" htmlType="submit" onClick={onNewData}>
                            Add New
                        </Button>&nbsp;&nbsp;
                        <Button type="primary" htmlType="submit" onClick={onLogOut}>
                            Log Out
                        </Button>
                    </div><br/><br/>
                    <Row>
                        <Col span={4}>
                            <label>FirstName</label>
                            <Search placeholder="input search text" name="firstName" value={searchDetails.firstName} onChange={onChange} />
                        </Col>&nbsp;&nbsp;
                        <Col span={4}>
                            <label>LastName</label>
                            <Search placeholder="input search text" name="lastName" value={searchDetails.lastName} onChange={onChange} />
                        </Col>&nbsp;&nbsp;
                        <Col span={4}>
                            <label>Email</label>
                            <Search placeholder="input search text" name="email" value={searchDetails.email} onChange={onChange} />
                        </Col>&nbsp;&nbsp;
                        <Col span={4}>
                            <label>Age</label>
                            <Search placeholder="input search text" name="age" value={searchDetails.age} onChange={onChange} />
                        </Col>&nbsp;&nbsp;
                        <Col span={4}>
                            <label>Gender</label>
                            <Search placeholder="input search text" name="gender" value={searchDetails.gender} onChange={onChange} />
                        </Col>&nbsp;&nbsp;
                        <Col span={2}>
                            <Button type="primary" icon={<SearchOutlined />} className="btn-search" onClick={onSearch}>
                                Search
                            </Button>
                        </Col>
                    </Row>
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