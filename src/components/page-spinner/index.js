import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import './style.scss';

export function PageSpinner(props) {
  const { className = '' } = props;

  return (
    <div className={`page-spinner ${className}`}>
      <Spin size="large" indicator={<LoadingOutlined />} />
    </div>
  );
}

export default { PageSpinner };
