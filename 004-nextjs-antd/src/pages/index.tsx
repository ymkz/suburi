import { Button, Form, Input, Layout, Space } from 'antd'
import Head from 'next/head'

export default function Home() {
  const [form] = Form.useForm()

  return (
    <>
      <Head>
        <title>test</title>
      </Head>
      <Layout>
        <Layout.Header>Header</Layout.Header>
        <Layout.Content>
          <Space direction="vertical" style={{ width: '100%' }}>
            <Form layout="vertical" form={form}>
              <Form.Item label="Field A">
                <Input placeholder="input placeholder" />
              </Form.Item>
              <Form.Item label="Field B">
                <Input placeholder="input placeholder" />
              </Form.Item>
              <Form.Item>
                <Button type="primary">Submit</Button>
              </Form.Item>
            </Form>
          </Space>
        </Layout.Content>
        <Layout.Footer>Footer</Layout.Footer>
      </Layout>
    </>
  )
}
