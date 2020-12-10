import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Form, Input, Button, Row, Col, Card, Popconfirm, message} from 'antd';
import {DeleteOutlined, EditOutlined, UserOutlined, MailOutlined} from '@ant-design/icons';
import Table from "antd/lib/table";
import {useHistory} from 'react-router-dom';

const Register = (props) => {
    const [userDetail, setUserDetail] = useState({
        id: "",
        name: "",
        salary: "",
        age: ""
    });

    const [data, setData] = useState([]);
    const [editId, setEditable] = useState(null);

    useEffect(() => {
        initial();
    }, [])

    const handleChange = e => {
        const {name, value} = e.target;
        setUserDetail({...userDetail, [name]: value})
    }

    const onsubmit = () => {
        debugger
        if (editId !== null) {
            axios.put(`http://localhost:8080/notes/${editId}`, userDetail)
                .then(response => {
                    console.log(response);
                })
                .catch(err => {
                    console.log(err)
                })
            initial();
        } else {
            axios.post(`http://localhost:8080/notes`, userDetail)
                .then(res => {
                    setData([...data, res.data]);
                })
                .catch(err => {
                    console.log(err)
                })
        }
        setUserDetail({})
        setEditable(null)
    }

    const initial = () => {
        axios.get('http://localhost:8080/notes')
            .then(res => {
                setData(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    const onEdit = (id) => {
        const findUserDetail = data.find(user => user._id === (id));
        setUserDetail(findUserDetail);
        setEditable(id);
    }

    const onDelete = id => {
        return axios.delete(`http://localhost:8080/notes/${id}`)
            .then(() => {
                initial();
                message.success("Successfully Deleted")
            })
            .catch(err => {
                console.log(err)
            })
    }
    const T = 'Are you sure to delete this task?';
    const columns = [
        // {
        //     title: 'Id',
        //     dataIndex: 'id',
        //     key: 'id',
        //     fixed: 'left',
        // },
        {
            title: 'Employee Name',
            width: 120,
            dataIndex: 'name',
            key: 'name',
            fixed: 'left',
        },
        {
            title: 'Employee Salary',
            width: 100,
            dataIndex: 'salary',
            key: 'salary',
            fixed: 'left',
        },
        {
            title: 'Employee Age',
            width: 100,
            dataIndex: 'age',
            key: 'age',
            fixed: 'left',
        },
        {
            title: 'Action',
            dataIndex: 'id',
            render: (text, record) => (
                <>
                    <Button type="primary" onClick={() => onEdit(record._id)}>
                        Edit
                    </Button>
                    &nbsp;&nbsp;
                    <Popconfirm placement="right" title={T} onConfirm={() => onDelete(record._id)} okText="Yes"
                                cancelText="No">
                        <Button type="primary" danger>
                            Delete
                        </Button>
                    </Popconfirm>

                </>
            )
        },

    ];
    return (
        <>
            <Row style={{marginTop: 100}}>
                <Col span={7}/>
                <Col span={10}>
                    <Card>
                        <Form>
                            <Form.Item>
                                <Input placeholder="Enter Employee_Name" name="name"
                                       value={userDetail.name}
                                       onChange={handleChange} addonBefore={(<UserOutlined/>)}/>
                                {/*<span className="error">{errors.employee_name}</span>*/}
                            </Form.Item>
                            <Form.Item>
                                <Input placeholder="Enter Employee_salary" name="salary"
                                       value={userDetail.salary}
                                       onChange={handleChange} addonBefore={(<UserOutlined/>)}/>
                                {/*<span className="error">{errors.Employee_salary}</span>*/}
                            </Form.Item>
                            <Form.Item>
                                <Input placeholder="Enter Employee_Age" name="age"
                                       value={userDetail.age}
                                       onChange={handleChange} addonBefore={(<UserOutlined/>)}/>
                                {/*<span className="error">{errors.Employee_Age}</span>*/}
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" onClick={onsubmit}>
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>
            </Row><br/>
            <Row>
                <Col span={7}/>
                <Col span={10} className="mt-3">
                    <Table
                        columns={columns}
                        dataSource={data || []}
                        pagination={{pageSize: 5}}
                    />
                </Col>
            </Row>
        </>
    )
}
export default Register;