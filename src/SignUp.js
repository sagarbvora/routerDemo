import React from 'react';
import { Form, Input, Button, Checkbox, Row, Col, Card, Icon } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';

const SignUp = () =>{
    return(
        <>
            <Row>
                <Col span={4}/>
                <Col span={8}>
                    <Form
                        name="basic"
                        initialValues={{remember: true}}
                    >
                        <Form.Item
                            rules={[{required: true, message: 'Please input your user name!'}]}
                        >
                            <Input name="firstName" placeholder="Please Input Your First Name!" addonBefore={<UserOutlined />}/>
                        </Form.Item>
                        <Form.Item
                            rules={[{required: true, message: 'Please input your last name!'}]}
                        >
                            <Input name="lastName" placeholder="Please Input Your Lastname!" addonBefore={<UserOutlined />}/>
                        </Form.Item>
                        <Form.Item
                            rules={[{required: true, message: 'Please input your Email!'}]}
                        >
                            <Input name="email" placeholder="Please Input Your email!" addonBefore={<MailOutlined />}/>
                        </Form.Item>
                        <Form.Item
                            rules={[{required: true, message: 'Please input your password!'}]}
                        >
                            <Input.Password name="userName" placeholder="Please Input Your Password!" addonBefore={<LockOutlined />}/>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Login
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </>
    );
}
export default SignUp;