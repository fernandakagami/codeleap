import { Form, Input, Button, Card, Flex } from "antd";
import { signUp } from "../../api/sign-up";
import { useNavigate } from 'react-router';

export function SignUp() {
	const navigate = useNavigate();

  const onFinish = (values) => {
		signUp(values.username.trim());
		navigate('/');    
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 w-screen">

      <Card className="bg-white !max-w-xl w-full">
        <h3 className="!text-xl font-bold mb-6">Welcome to CodeLeap network!</h3>

        <Form  
          layout="vertical"
          onFinish={onFinish}
        >
          <Form.Item
            label={<p className="text-base font-normal">Please enter your username</p>}
            name="username"
						className="!w-full"
            rules={[{ required: true, message: 'Please enter your username!' }]}
          >
            <Input placeholder="John doe" />
          </Form.Item>        

          <Flex align="center" justify="end">
            <Form.Item label={null}>
              <Button type="primary" htmlType="submit" className="uppercase px-10 py-2 text-base !bg-[#7695EC]">
                Enter
              </Button>
            </Form.Item>
          </Flex>
  
        </Form>   

      </Card>      
    </div>
  );
}