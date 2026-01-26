import '../styles/components/Alert.css'

interface AlertProps {
    type: 'success' | 'warning' | 'error' | null
    onClose: () => void
}

const Alert = ({type, onClose}: AlertProps) => {
    if (!type) return null;

    return (
        <div className={`alert alert-${type}`}>
            <span>This is a {type} alert!</span>
            <button className="close-btn" onClick={onClose}>&times;</button>
        </div>
    )
}

export default Alert