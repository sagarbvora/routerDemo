import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Form, Input, Button, Checkbox, Row, Col, Card, Icon, Radio, Select} from 'antd';
import {UserOutlined, LockOutlined, MailOutlined} from '@ant-design/icons';

const {TextArea} = Input;
const {Option} = Select;
const numOfCountries = [
    {value: "", label: "Please Select..."},
    {value: "India", label: "India"},
    {value: "America", label: "America"},
    {value: "Nepal", label: "Nepal"},
    {value: "Africa", label: "Africa"},
    {value: "Pakistan", label: "Pakistan"},
];
const plainOptions = ['Cricket', 'Footbol', 'Hockey'];

const SignUp = (props) => {
    const [userDetails, setUserDetails] = useState({});
    const [list, setList] = useState([]);



    const handleChange = (event) => {
        // const {name, value, checked} = event.target;
        // if (name === "hobby") {
        //     setUserDetails({...userDetails, checked: value})
        // } else {
        //     setUserDetails({...userDetails, [name]: value})
        // }
    }

    return (
        <>
            <Row>
                <Col span={8}/>
                <Col span={8}>
                    <Card className="card_formate mt-lg-5">
                        <Form onFinishedFailed onFinish={() => {
                            props.history.push("/user");
                        }}>
                            <Form.Item
                                name="firstName"
                                rules={[{required: true, message: 'Please input your first name!'}]}
                            >
                                <Input name="firstName" placeholder="Please Input Your First Name!"
                                       addonBefore={<UserOutlined/>} onChange={handleChange}/>
                            </Form.Item>
                            <Form.Item
                                name="lastName"
                                rules={[{required: true, message: 'Please input your last name!'}]}
                            >
                                <Input name="lastName" placeholder="Please Input Your Lastname!"
                                       addonBefore={<UserOutlined/>} onChange={handleChange}/>
                            </Form.Item>
                            <Form.Item
                                name="email"
                                rules={[{required: true, message: 'Please input your Email!'}]}
                            >
                                <Input name="email" type="email" placeholder="Please Input Your email!"
                                       addonBefore={<MailOutlined/>} onChange={handleChange}/>
                            </Form.Item>
                            <Form.Item
                                name="age"
                                rules={[{required: true, message: 'Please input your age!'}]}
                            >
                                <Input name="age" placeholder="Please Input Your Age!" addonBefore={<UserOutlined/>}
                                       onChange={handleChange}/>
                            </Form.Item>
                            <Form.Item
                                name="address"
                                rules={[{required: true, message: 'Please input your address!'}]}
                            >
                                <TextArea rows={4} name="address" placeholder="Please Input Your Address!"
                                          onChange={handleChange}/>
                            </Form.Item>
                            <Form.Item
                                name="gender"
                                rules={[{required: true, message: 'Please select your gender!'}]}
                            >
                                <Radio.Group name="gender" onChange={handleChange}>
                                    <Radio value="Male">Male</Radio>
                                    <Radio value="Female">Female</Radio>
                                    <Radio value="Other">Other</Radio>
                                </Radio.Group>
                            </Form.Item>
                            <Form.Item
                                name="hobby"
                                rules={[{required: true, message: 'Please select your hobby!'}]}
                            >
                                <Checkbox.Group options={plainOptions} defaultValue={['Cricket']} name="hobby"
                                                onChange={handleChange}/>
                            </Form.Item>
                            <Form.Item
                                name="city"
                                rules={[{required: true, message: 'Please select your city!'}]}
                            >
                                <Select mode="tags" style={{width: '100%'}} placeholder="Please Select Your City.."
                                        onChange={handleChange}>
                                    {numOfCountries.map((numOfCountry, index) => <Option key={numOfCountry.value}
                                                                                         disabled={index === 0}
                                                                                         value={numOfCountry.value}>{numOfCountry.label}</Option>)}
                                </Select>
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                ]}
                                hasFeedback
                            >
                                <Input.Password name="password" addonBefore={<LockOutlined/>} onChange={handleChange}/>
                            </Form.Item>

                            <Form.Item
                                name="confirm"
                                dependencies={['password']}
                                hasFeedback
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please confirm your password!',
                                    },
                                    ({getFieldValue}) => ({
                                        validator(rule, value) {
                                            if (!value || getFieldValue('password') === value) {
                                                return Promise.resolve();
                                            }
                                            return Promise.reject('The two passwords that you entered do not match!');
                                        },
                                    }),
                                ]}
                            >
                                <Input.Password name="conformPassword" addonBefore={<LockOutlined/>}
                                                onChange={handleChange}/>
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit">
                                    Sign Up
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>
                <Col span={8}/>
            </Row>
        </>
    );
}
export default SignUp;