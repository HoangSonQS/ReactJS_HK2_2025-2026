import '../styles/components/Button.css'


interface ButtonProps {
    type?: 'primary' | 'danger' | 'success'
    label: string
}

const Button = ({type = 'primary', label}: ButtonProps) => {
    return <button className={`btn btn-${type}`}>{label}</button>
}

export default Button