import { useEffect } from 'react';

import {
  DatePicker,
  Divider,
  InputNumber,
  Layout,
  PageHeader,
  Rate,
  Select,
  Slider,
  Space,
  Switch,
  Typography,
  Form,
  Row,
  Col,
} from 'antd';
import { useHistory } from 'react-router';

import logo from 'assets/svg/logo.svg';
import './style.scss';
import Button from 'components/button';


const { Content } = Layout;

export function FormSubmission() {
  useEffect(() => {}, []);
  const history = useHistory();

  const { Option } = Select;
  const { Title } = Typography;

  return (
    <Layout className="form-submission">
      <PageHeader
        ghost={false}
        onBack={history.goBack}
        style={{
          // TODO: isolate this into component, then style there with scss
          borderBottom: '1px solid rgb(235, 237, 240)',
        }}
        title="Form Submission"
        subTitle="example of form submission"
      />
      <Content className="form-submission-content">
        <Row justify="center" gutter={[8]} align="middle">
          <Col>
            <img width={40} height={40} src={logo} alt="Pandatech" />
          </Col>
          <Col>
            <Title style={{ marginBottom: 0 }} level={2}>
              Pandatech
            </Title>
          </Col>
        </Row>
        <Divider style={{ marginBottom: 60 }}>Form</Divider>
        <Form labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
          {[
            {
              label: 'age',
              render: () => <InputNumber min={1} max={10} defaultValue={3} />,
            },
            { label: 'vaccinated', render: () => <Switch defaultChecked /> },
            { label: 'health bar', render: () => <Slider defaultValue={70} /> },
            {
              label: 'hospital',
              render: () => (
                <Select defaultValue="siloam">
                  {['Siloam', 'Pusat Pertamina', 'Hasan Sadikin'].map(
                    (hospitalName) => (
                      <Option
                        key={hospitalName}
                        value={hospitalName}>{`RS. ${hospitalName}`}</Option>
                    )
                  )}
                </Select>
              ),
            },
            { label: 'appointment', render: () => <DatePicker /> },
            {
              label: 'hospitalization period',
              render: () => <DatePicker.RangePicker />,
            },
            { label: 'rate', render: () => <Rate defaultValue={5} /> },
            {
              render: () => (
                <Space>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                  <Button>Cancel</Button>
                </Space>
              ),
              itemProps: { wrapperCol: { span: 8, offset: 8 } },
            },
          ].map(({ label, render: Component, itemProps }) => (
            <Form.Item {...itemProps} label={label} key={label}>
              <Component />
            </Form.Item>
          ))}
        </Form>
      </Content>
    </Layout>
  );
}
