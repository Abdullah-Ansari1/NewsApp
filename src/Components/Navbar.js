import React,{useState,useEffect} from 'react'
import { Link ,useLocation} from "react-router-dom";

const Navbar = () => {
    const [check, setCheck] = useState('/');
    
    const location = useLocation();
useEffect(() => {
   const fun=()=>{
       setCheck(location.pathname)
   } 
   fun();
}, [location])

  
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"> News App </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className={check==='/'?"nav-link active":"nav-link"} aria-current="page" to="/">Top Headlines</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={check==="/entertainment"?"nav-link active":"nav-link"} to="/entertainment">Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={check==='/health'?"nav-link active":"nav-link"} to="/health">Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={check==='/science'?"nav-link active":"nav-link"} to="/science">Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={check==='/sports'?"nav-link active":"nav-link"} to="/sports">Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={check==='/technology'?"nav-link active":"nav-link"} to="/technology">Technology</Link>
                            </li>
                        </ul>
                    </div>
                  
                </div>
            </nav>
        </div>
    )
}

export default Navbar
