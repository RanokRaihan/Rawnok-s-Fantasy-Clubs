import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './TeamDetails.css';
import maleImg from '../../images/male.png';
import femaleImg from '../../images/female.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFlag, faFutbol, faMars, faVenus, faClock, faGlobe } from '@fortawesome/free-solid-svg-icons';
import Header from '../Header/Header';


const TeamDetails = () => {
    const [singleTeam, setSingleTeam] = useState({});
    const { teamId } = useParams();
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setSingleTeam(data.teams[0]))
    }, [teamId]);

    const {
        strAlternate,
        intFormedYear,
        strTeamBadge,
        strCountry,
        strSport,
        strGender,
        strDescriptionEN,
        strDescriptionES,
        strTwitter,
        strYoutube,
        strWebsite
    } = singleTeam;
    console.log(singleTeam);

    //conditional image render
    let isMale = true;
    if (strGender === 'Male') {
        isMale = true;
    }
    else if (strGender === 'Female') {
        isMale = false;
    }

    let bgColor = isMale ? "#076ae4" : "#FF6812";

    return (
        <div className='team-details-wrapper'>
            <Header content={[<img src={strTeamBadge} alt="" />]}></Header>
            <div className=" container">
                <div style={{ backgroundColor: bgColor }} className='team-details'>
                    <div className="team-details-text">
                        <h2>{strAlternate}</h2>
                        <p>
                            <span className="icon">
                                <FontAwesomeIcon icon={faClock} />
                            </span>
                            Founded: {intFormedYear}
                        </p>
                        <p>
                            <span className="icon">
                                <FontAwesomeIcon icon={faFlag} />
                            </span>
                             country: {strCountry}
                        </p>
                        <p>
                            <span className="icon">
                                <FontAwesomeIcon icon={faFutbol} />
                            </span>
                                Sport Type: {strSport}
                        </p>
                        <p>
                            <span className="icon">
                                {
                                    isMale ? <FontAwesomeIcon icon={faMars} /> : <FontAwesomeIcon icon={faVenus} />
                                }
                            </span>
                            Gender: {strGender}
                        </p>
                    </div>
                    <div className="team-image">
                        <img src={isMale ? maleImg : femaleImg} alt="" />
                    </div>
                </div>
                <div className="description">
                    <p>
                        {strDescriptionEN}
                    </p>
                    <p>
                        {strDescriptionES}
                    </p>

                </div>
                <div className="social">
                    <a className='twitter' target='_blank' rel='noreferrer' href={`https://${strTwitter}`}>
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a className='web' target='_blank' rel='noreferrer' href={`https://${strWebsite}`}>
                        <FontAwesomeIcon icon={faGlobe} />
                    </a>
                    <a className='youtube' target='_blank' rel='noreferrer' href={`https://${strYoutube}`}>
                        <FontAwesomeIcon icon={faYoutube} />
                    </a>
                </div>


            </div>
        </div>
    );
};

export default TeamDetails;