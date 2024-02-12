import { Form, Input } from "antd";
const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

const Login = () => {
  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center">
        <div className="text-center text-2xl font-bold text-gray-900">
          <h2>Log In</h2>
        </div>
        <div className="mt-10 w-80">
          <Form
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please Enter your Email!",
                },
              ]}
              className="mb-4"
            >
              <Input
                placeholder="Enter Email"
                className="border w-full px-3 py-2.5 rounded-md bg-gray-100"
                type="email"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please Enter your Password!",
                },
              ]}
            >
              <Input.Password
                placeholder="Enter Password"
                className="border w-full px-3 py-2.5 rounded-md bg-gray-100"
              />
            </Form.Item>
            <button
              type="submit"
              className="border w-full py-3 bg-black font-2xl text-white rounded-full"
            >
              Login
            </button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Login;
