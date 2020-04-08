import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button, Checkbox } from 'antd';
import { Link } from 'react-router-dom';
import { PageHeader } from 'antd';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 }
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 8 },
};

class login extends Component {
    render() {
        return (
            <Fragment>
                <PageHeader
                    className="site-page-header"
                    title="Application JUMP"
                    subTitle="Login page"
                />,
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{ remember: true }}
                    style={{"paddingTop":"180px"}}
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Link to="/detail">
                            <Button type="primary" htmlType="button">
                                Submit
                            </Button>
                        </Link>
                    </Form.Item>
                </Form>
            </Fragment>
        );
    }
}

export default connect(
    null,null
)(login);