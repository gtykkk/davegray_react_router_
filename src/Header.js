<<<<<<< HEAD
import { FaLaptop, FaTabletAlt, FaMobileAlt } from 'react-icons/fa'
import useWindowSize from './hooks/useWindowSize'

const Header = ({ title }) => {
    const { width } = useWindowSize()

    return (
        <header className="Header">
            <h1>{title}</h1>
            {width < 768 ?  <FaMobileAlt />
                : width < 992 ? <FaTabletAlt />
                    : <FaLaptop />}
=======
const Header = ({ title }) => {
    return (
        <header className="Header">
            <h1>{title}</h1>
>>>>>>> 70d9efcc14cdd8aa12ddac874779440237bab122
        </header>
    )
}

export default Header
