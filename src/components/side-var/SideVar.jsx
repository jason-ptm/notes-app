import './SideVar.css';
import React from 'react';

function SideVar(props) {

    const [sideVarToggle, setSideVarToggle] = React.useState(true)

    return (
        <nav
            className={`SideVar${props.options.darkMode ? " dark" : ""} ${sideVarToggle ? "" : " close"}`}>
            <div
                className="arrow-icon"
                onClick={() => setSideVarToggle(prevVal => !prevVal)}>
                <span className="icon"></span>
            </div>
            <header className="header">
                <div className="option">
                    <h1 className='content'>Notas</h1>
                    <div className="icon">
                        <i className="fa-solid fa-book"></i>
                    </div>
                </div>
            </header>
            <div className="options">
                <div
                    className="option"
                    onClick={props.clickDarkMode}>
                    <span className="content">
                        {`Modo ${props.darkMode ? "claro" : "oscuro"}`}
                    </span>
                    <div className="icon">
                        <div className="darkmode-toggle">
                            <div className="circle"></div>
                        </div>
                    </div>
                </div>
                <div
                    className="option"
                    onClick={() => {
                        props.options.addCardWindow()
                        props.setCurrentCard({})
                    }}>
                    <span className="content">
                        Agregar nota
                    </span>
                    <div className="icon">
                        <i className="fa-solid fa-plus"></i>
                    </div>
                </div>
            </div>
            <footer className="footer option">
                <div className="content">
                    <p>Hecho por <br />Jason Solarte</p>
                </div>
                <div className="icon">
                    <i className=" fa-regular fa-copyright"></i>
                </div>
            </footer>
        </nav>
    )
}

export default SideVar