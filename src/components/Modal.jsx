import Icon from './Icon'
export default function Modal({ title, children, onClose }) { return <div className="modal-backdrop"><section className="modal"><button className="modal-close" onClick={onClose}><Icon name="close"/></button><h3>{title}</h3>{children}</section></div> }
