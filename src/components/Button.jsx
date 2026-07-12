import Icon from './Icon'
export default function Button({ children, icon, variant = 'primary', type = 'button', ...props }) { return <button type={type} className={`button button-${variant}`} {...props}>{icon && <Icon name={icon} size={17}/>} {children}</button> }
