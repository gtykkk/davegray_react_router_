import { Link } from "react-router-dom"
import { useContext } from 'react'
import DataContext from './context/DataContext'

const Nav = () => {
    const { search, setSearch } = useContext(DataContext)

    return (
        <nav className="Nav">
            <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="search">
                    찾으실 글 제목
                </label>
                <input 
                    id="search" 
                    type="text" 
                    placeholder="찾으실 글 제목" 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </form>
            <ul>
                <li><Link to="/">홈</Link></li>
                <li><Link to="/post">글작성</Link></li>
                <li><Link to="/about">...</Link></li>
            </ul>
        </nav>
    )
}

export default Nav
