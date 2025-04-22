import { useState } from 'react'
import LogoPython from '../assets/python-logo.png'
const LogoHTML = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg";


const Languages = () => {
    const [myLanguages, setMyLanguages] = useState({
        html: 'HTML',
        css: 'CSS',
        js: 'JavaScript',
        python: 'Python',
    })

    const { html, css, js, python } = myLanguages
    return (
        <>
            <h2>Les langages</h2>
            <div id="langages">
                <p hidden>{html}</p><img src={LogoHTML} alt="html" width="50" height="50" />
                <p hidden>{css}</p><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="css" width="50" height="50" />
                <p hidden>{js}</p><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="js" width="50" height="50" />
                <p hidden>{python}</p><img alt="logo Python" src={LogoPython} width="50" height="50" />{/* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="python" width="50" height="50" /> */}
            </div>
        </>
    )
}

export default Languages