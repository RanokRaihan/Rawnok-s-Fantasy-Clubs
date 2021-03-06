import React from 'react';
import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Team from '../Team/Team';
import './Home.css';


const Home = () => {
    const [team, setTeam] = useState([]);
    useEffect(() => {
        // const url1 = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=Spanish%La%Liga';
        // const url2 = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League';

        const url = 'https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4335';
        fetch(url)
            .then(res => res.json())
            .then(data => setTeam(data.teams))
            .catch(err => alert(err));
    }, []);

    //making a component to show inside header component
    const HeaderContent = () => {
        return (
            <div>
                <h3>Welcome To</h3>
                <h1>Rawnok's Fantasy Sports Clubs</h1>
            </div>
        )
    }


    // console.log(team);
    return (
        <div className='wrapper' >
            <Header content={<HeaderContent></HeaderContent>}></Header>
            <div className='container grid-row'>
                {
                    team.map(team => <Team team={team} key={team.idTeam}></Team>)
                }
            </div>


        </div>
    );
};

export default Home;