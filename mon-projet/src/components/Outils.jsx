import { useState } from 'react'

const Tools = () => {
    const [myTools, setMyTools] = useState({
        vsc: 'Visual Studio Code',
        se: 'Selenium',
        react: 'React',
        git: 'Git',
        docker: 'Docker',
        postman: 'Postman',
    })

    const { vsc, se, react, git, docker, postman, ps, indesign, pinnacle } = myTools
    return (
        <>
            <h2>Les outils</h2>
            <p hidden>{vsc}</p><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="Visual Studio Code" width="50" height="50" />
            <p hidden>{se}</p><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg" alt="Selenium" width="50" height="50" />
            <p hidden>{react}</p><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" width="50" height="50" />
            <p hidden>{git}</p><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" width="50" height="50" />
            <p hidden>{docker}</p><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" width="50" height="50" />
            <p hidden>{postman}</p><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" alt="Postman" width="50" height="50" />
            <p hidden>{ps}</p><img src="https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg" alt="PhotoShop" width="50" height="50" />
            <p hidden>{indesign}</p><img src="https://upload.wikimedia.org/wikipedia/commons/4/48/Adobe_InDesign_CC_icon.svg" alt="InDesign" width="50" height="50" />
            <p hidden>{pinnacle}</p><img src="https://cdn2.iconfinder.com/data/icons/icons-mega-pack-1-and-2/256/Pinnacle_Studio.png" alt="Pinnacle Studio Pro" width="52" height="52" />
        </>
    )
}

export default Tools