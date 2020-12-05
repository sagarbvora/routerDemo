import React, {useEffect, useState} from 'react';
import { Form, Input, Button, Checkbox, Row, Col, Card, Icon } from 'antd';
import { UserOutlined,LockOutlined } from '@ant-design/icons';
const Login = (props) =>{

    const [loginData,setLoginData] = useState({});
    const [list, setList] = useState([]);

    useEffect(() => {
        let data = [];
        if (JSON.parse(localStorage.getItem("list")) !== null) {
            data = JSON.parse(localStorage.getItem("list"));
        }
        setList(data);

    }, []);

    const handleChange = (event) =>{
       const {name, value} = event.target;
        setLoginData({...loginData,[name]: value});
    }

    const onLogin = () =>{
        const findLofinUser = list.find(user => user.email === loginData.email && user.password === loginData.password);
        if(findLofinUser && findLofinUser.email && findLofinUser.password){
            alert("Successfully login");
            props.history.push("/dashBord");
        }else{
            alert("Please enter valid data..");
        }
    }

   const formRegister = () =>{
       props.history.push("/signUp");
   }
    return(
        <>
            <Row style={{marginTop: 250}}>
                <Col span={8}/>
                <Col span={4}>
                    <Card bordered={false} className="login_card">
                        <h2>Login</h2>
                        <Form>
                            <Form.Item>
                                <Input name="email" placeholder="Please Input Your Username!" autoSave="false"  value={loginData.email || ""} onChange={handleChange} addonBefore={<UserOutlined />}/>
                            </Form.Item>

                            <Form.Item name="passWord">
                                <Input.Password name="password" placeholder="Please Input Your Password!" autoSave="false" value={loginData.password || ""}  onChange={handleChange} addonBefore={<LockOutlined />}/>
                            </Form.Item>
                            <Button type="primary" onClick={onLogin} >Login</Button>
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