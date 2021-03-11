import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Team.css';
import { Link } from 'react-router-dom';

const Team = (props) => {
    // console.log(props);

    //destructuring props data 
    const { strAlternate, strTeamBadge, strSport, strGender, idTeam } = props.team;
    return (
        <div className='single-team'>
            <div className="img-wrapper">
                <img className='team-logo' src={strTeamBadge} alt="" />
            </div>

            <h3 className='team-name'>{strAlternate}</h3>
            <p className="sport-type">Sport Type: {strSport}</p>
            <p className="sport-type">Gender: {strGender}</p>
            <Link to={`/teamDetails/${idTeam}`}>
                <button className='btn btn-info' >explore <FontAwesomeIcon icon={faArrowRight} /></button>
            </Link>
        </div>
    );
};

export default Team;
