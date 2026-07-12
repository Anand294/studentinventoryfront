import Icon from './Icon'
export default function Toast({ message, onClose }) { return <div className="toast"><Icon name="check"/><div><b>{message.title}</b><p>{message.text}</p></div><button onClick={onClose}><Icon name="close" size={16}/></button></div> }
