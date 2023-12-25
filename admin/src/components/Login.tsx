import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";

import { useDispatch } from "react-redux";
import { isLogin } from "./../redux/slices/LoginSlice";
type Props = {};

function Login({}: Props) {
  const dispatch = useDispatch();
  const admin = {
    username: "",
    password: "",
  };
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };
  return (
    <>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
            onChange={(e) => {
              console.log(e.currentTarget.value);
              admin.username = e.currentTarget.value;
            }}
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            onChange={(e) => {
              console.log(e.currentTarget.value);
              admin.password = e.currentTarget.value;
            }}
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            onClick={() => {
              dispatch(isLogin(admin));
              console.log(admin);
            }}
          >
            Log in
          </Button>
          {/* Or <a href="">register now!</a> */}
        </Form.Item>
      </Form>
    </>
  );
}

export default Login;
