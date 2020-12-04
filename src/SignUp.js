import React, {useEffect, useState} from 'react';
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
const SignUp = (props) => {
    const [userDetails, setUserDetails] = useState({});
    const [list, setList] = useState([]);
    const [errors, setValidation] = React.useState({});

    useEffect(() =>{
        let data = [];
        if (JSON.parse(localStorage.getItem("list")) !== null){
            data = JSON.parse(localStorage.getItem("list"));
        }
        setList(data);
    },[]);


    const handleChange = event => {
            const {name,value} = event.target;
            setUserDetails({...userDetails, [name]: value});
        // const = event.target;

    }
    const validate = (name, value) => {
        const emailRegx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ig;
        const numRegx = /^\d{1,6}(?:\.\d{0,2})?$/g;
        switch (name) {
            case 'firstName':
                if (!value) return "First Name is required";
                return null;
            case 'lastName':
                if (!value) return "Last Name is required";
                return null;
            case 'email':
                if (!emailRegx.test(value)) return "Email is required";
                return null;
            case 'age':
                if (!numRegx.test(value)) return "Age is required";
                return null;
            case 'address':
                if (!value) return "Address is required";
                return null;
            case 'gender':
                if (!value) return "Gender is required";
                return null;
            case 'country':
                if (!value) return "Country is required";
                return null;
            case 'password':
                if (!value) return "Password is required";
                return null;
            case 'conformPassword':
                if (!value) return "Conform Password is required";
                return null;
            default:
                return null;
        }
    };

    const handleSubmit = () => {
        let errorsObj = {}
        const newUserDetails = {
            firstName: userDetails.firstName,
            lastName: userDetails.lastName,
            email: userDetails.email,
            age: userDetails.age,
            address: userDetails.address,
            gender: userDetails.gender,
            country: userDetails.country,
            password: userDetails.password,
            conformPassword: userDetails.conformPassword
        }
        Object.keys(newUserDetails).forEach((key) => {
            const error = validate(key, newUserDetails[key]);
            if (error && error.length) {
                errorsObj[key] = error;
            }
        });
        if (Object.keys(errorsObj).length > 0) {
            return setValidation(errorsObj);
        }else{
            list.push(userDetails);
            setList(list);
            props.history.push("/user");
            localStorage.setItem("list",JSON.stringify(list));
            setValidation({});
        }
    }


    return (
        <>
            <Row>
                <Col span={8}/>
                <Col span={8}>
                    <Card className="card_formate mt-lg-5">
                        <Form>
                            <Form.Item
                                name="firstName"
                            >
                                <Input name="firstName" placeholder="Please Input Your First Name!" value={userDetails.firstName}
                                       addonBefore={<UserOutlined/>} onChange={handleChange}/>
                                <span className="text-danger">{errors.firstName || ""}</span>
                            </Form.Item>
                            <Form.Item
                                name="lastName"
                            >
                                <Input name="lastName" placeholder="Please Input Your Lastname!" value={userDetails.lastName}
                                       addonBefore={<UserOutlined/>} onChange={handleChange}/>
                                <span className="text-danger">{errors.lastName || ""}</span>
                            </Form.Item>
                            <Form.Item
                                name="email"
                                rules={[{required: true, message: 'Please input your Email!'}]}
                            >
                                <Input name="email" type="email" placeholder="Please Input Your email!" value={userDetails.email}
                                       addonBefore={<MailOutlined/>} onChange={handleChange}/>
                                <span className="text-danger">{errors.email || ""}</span>
                            </Form.Item>
                            <Form.Item
                                name="age"
                            >
                                <Input name="age" placeholder="Please Input Your Age!" value={userDetails.age} addonBefore={<UserOutlined/>}
                                       onChange={handleChange}/>
                                <span className="text-danger">{errors.age || ""}</span>

                            </Form.Item>
                            <Form.Item
                                name="address"
                            >
                                <TextArea rows={4} name="address" placeholder="Please Input Your Address!" value={userDetails.address}
                                          onChange={handleChange}/>
                                <span className="text-danger">{errors.address || ""}</span>

                            </Form.Item>
                            <Form.Item
                                name="gender"
                            >
                                <Radio.Group name="gender" onChange={handleChange}>
                                    <Radio value="Male" checked={userDetails.gender === 'Male'}>Male</Radio>
                                    <Radio value="Female"  checked={userDetails.gender === 'Female'}>Female</Radio>
                                    <Radio value="Other"  checked={userDetails.gender === 'Other'}>Other</Radio>
                                </Radio.Group>
                                <span className="text-danger">{errors.gender || ""}</span>
                            </Form.Item>
                            <Form.Item
                                name="country"
                            >
                                <Select
                                    className="select-type"
                                    allowClear
                                    placeholder="Please select your country"
                                    style={{width: '100%'}}
                                    value={userDetails.country || ""}
                                    onChange={value => handleChange({target: {name: "country", value}})}
                                >
                                    {
                                        numOfCountries.map((numOfCountry, index) =>
                                            <Option key={index} disabled={index === 0} value={numOfCountry.value}>{numOfCountry.label}</Option>
                                        )
                                    }
                                </Select>
                                <span className="text-danger">{errors.country || ""}</span>
                            </Form.Item>
                            <Form.Item
                                name="password"
                            >
                                <Input.Password name="password" addonBefore={<LockOutlined/>} value={userDetails.password} onChange={handleChange}/>
                                <span className="text-danger">{errors.password || ""}</span>
                            </Form.Item>

                            <Form.Item
                                name="password"
                                dependencies={['password']}
                            >
                                <Input.Password name="conformPassword" addonBefore={<LockOutlined/>} value={userDetails.conformPassword} onChange={handleChange}/>
                                <span className="text-danger">{errors.conformPassword || ""}</span>

                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit" onClick={handleSubmit}>
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