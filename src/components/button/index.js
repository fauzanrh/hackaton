import { Button as AntdButton } from 'antd';
import cs from 'classnames';

import styles from './style.module.scss';


const Button = ({ className, ...props }) => (
  <AntdButton 
	/** merge the classname */
	className={cs(styles.button, className)} 
	/** pass rest of the props to the component, in other word extends the AntdButton component */
	{...props} />
);

export default Button;
