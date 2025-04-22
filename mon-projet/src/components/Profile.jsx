import { useState } from 'react'
import Avatar from '../assets/photo-avatar-mini.jpg'

const Profile = () => {

    const [myProfile, setMyProfile] = useState({
        firstName: 'Marie',
        lastName: 'TIERS',
        job: 'Stagiaire testeur ISTQB',
        city: 'LILLE',
    })

    const { firstName, lastName, job, city } = myProfile
    // const myProfile = {
    //   firstName: 'David',
    //   lastName: 'ET-JONATHAN',
    //   job: 'Chanteur',
    //   city: 'ATLANTIDE',
    // }

    return (
        // <div>{myProfile.firstName}</div>
        <>
            <img src={Avatar} alt="photo de profil" width="200" height="200" />
            <div id="profile">
                <h1>{lastName} {firstName}</h1>
                <h2>{job}</h2>
                <h2>{city}</h2>
            </div>
        </>
    )
}


export default Profile