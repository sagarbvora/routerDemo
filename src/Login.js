import React from 'react';
import { Form, Input, Button, Checkbox, Row, Col, Card, Icon } from 'antd';
import { UserOutlined,LockOutlined } from '@ant-design/icons';

const Login = (props) =>{
   const formRegister = () =>{
       props.history.push("/signUp");
   }
    return(
        <>
            <Row style={{marginTop: 250}}>
                <Col span={8}></Col>
                <Col span={4}>
                    <Card bordered={false} className="login_card">
                        <h2>Login</h2>
                        <Form
                            name="basic"
                            initialValues={{remember: true}}
                        >
                            <Form.Item
                                rules={[{required: true, message: 'Please input your username!'}]}
                            >
                                <Input name="userName" placeholder="Please Input Your Username!" addonBefore={<UserOutlined />}/>
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
                    </Card>
                </Col>
                <Col span={4}>
                    <Card bordered={false} className="register_card">
                        <h2 className="heading2">Sign Up</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.</p><br />
                        <Button type="primary" onClick={formRegister} >
                            Register Now!
                        </Button>
                    </Card>
                </Col>
                <Col span={8}></Col>
            </Row>
        </>
    );
}
export default Login;