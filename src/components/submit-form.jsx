import { Card, Form, Input, Button, Flex, message, Space } from "antd";
import { createComment } from "./../api/create-comment";

export function SubmitForm() {
  const [messageApi, contextHolder] = message.useMessage();  

  const onFinish = async (values) => {
    try {
      const username = localStorage.getItem("username");

      const comment = {
        username: username,       
        title: values.title,
        content: values.content,        
      }

      console.log(comment);

      await createComment(comment);

      messageApi.open({
      type: 'success',
      content: 'Comment created successfully!',
    });      
    } catch {
      messageApi.open({
      type: 'warning',
      content: 'Error submitting comment.',
    });      
    }
  }

  return (
    <>
     {contextHolder}
      <Card>
        <div className="flex flex-col gap-6">
          <h3 className="text-2xl font-semibold">What’s on your mind?</h3>

          <Form  layout="vertical" onFinish={onFinish} className="flex flex-col gap-2">
            <Form.Item
              name="title"
              label={<p className="text-base">Title</p>}
              rules={[{ required: true, message: "Please input your title!" }]}
            >
              <Input placeholder="Hello world" />
            </Form.Item>

            <Form.Item
              name="content"
              label={<p className="text-base">Content</p>}            
              rules={[{ required: true, message: "Please input your content!" }]}
            >
              <Input.TextArea placeholder="Content here" />
            </Form.Item>

            <Flex align="center" justify="end">
              <Form.Item label={null}>
                <Button type="primary" htmlType="submit" className="!px-10 !py-2 text-base !bg-[#7695EC]">
                  Create
                </Button>
              </Form.Item>
            </Flex>
          </Form>
        </div>     
      </Card>
    </>
     
  )
}