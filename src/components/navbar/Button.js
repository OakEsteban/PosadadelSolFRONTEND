import '../../Styles/navbar/Button.css';

//Funciones y creación de constantes, para la modificacion del botón, ya que este tiende a cambiar según su tamaño en pantalla. 

const STYLES = [
    'btn-111--primary',
    'btn-111--outline'
]

const SIZES = [
    'btn-111--medium',
    'btn-111 large'
]

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
        <button className={`btn-111 ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
            {children}
        </button>
    )
}