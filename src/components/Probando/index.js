import React, {useState, useEffect} from "react";
import "./style.css"

export default function Probando() {
    const [datos, setDatos]     = useState([])
    const [fase, setFase]       = useState([])
    const [octavos, setOctavos] = useState([])
    const [cuartos, setCuartos] = useState([])
    const [semis, setSemis]     = useState([])
    const [tercero, setTercero] = useState([])
    const [final,setFinal]      = useState([])


    useEffect(() => {
        fetch('https://worldcup.sfg.io/matches')
        .then(response => response.json())
        .then(data => {
            setDatos(data);
            setFase(data.filter(match => match.stage_name === "First Stage"));
            setOctavos(data.filter(match => match.stage_name === "Round of 16"));
            setCuartos(data.filter(match => match.stage_name === "Quarter-final"));
            setSemis(data.filter(match => match.stage_name === "Semi-final"));
            setTercero(data.filter(match => match.stage_name === "Match for third place"));
            setFinal(data.filter(match => match.stage_name === "Final"));
        })
        .catch(error => console.log(error));
    },[])

    return (
    <div className = "container">
        
        <h1>WorldCup 2019</h1>

        <div className = "row justify-content-evenly">
            
            <h3 className="mt-5">Fase de grupos</h3>
            {fase.map((element,index)=>
                <div className="card text-white bg-secondary mb-3 col-2" > 
                    <div className="card-header">Partido {index+1}</div>
                    <div className="card-body">
                        <h5 className="card-title">{element.home_team.code} - {element.away_team.code} </h5>
                        <p className="card-subtitle">{element.datetime.slice(0,10)}</p>
                        <p className="card-subtitle">{element.datetime.slice(11,16)} hs.</p>
                    </div>
                </div>     
            )}

            <h3 className="mt-5">Octavos de final</h3>
            {octavos.map((element,index)=>
                <div className="card text-white bg-secondary mb-3 col-2 mx-4" >
                    <div className="card-header">Partido {index+37}</div>
                    <div className="card-body">
                        <h5 className="card-title">{element.home_team.code} - {element.away_team.code} </h5>
                        <p className="card-subtitle">{element.datetime.slice(0,10)}</p>
                        <p className="card-subtitle">{element.datetime.slice(11,16)} hs.</p>
                    </div>
                </div>     
            )}

            <h3 className="mt-5">Cuartos de final</h3>
            {cuartos.map((element,index)=>
                <div className="card text-white bg-secondary mb-3 col-2 mx-4" >
                    <div className="card-header">Partido {index+45}</div>
                    <div className="card-body">
                        <h5 className="card-title">{element.home_team.code} - {element.away_team.code} </h5>
                        <p className="card-subtitle">{element.datetime.slice(0,10)}</p>
                        <p className="card-subtitle">{element.datetime.slice(11,16)} hs.</p>
                    </div>
                </div>     
            )}

            <h3 className="mt-5">Semi-finales</h3>
            {semis.map((element,index)=>
                <div className="card text-white bg-secondary mb-3 col-2 mx-4" >
                    <div className="card-header">Partido {index+49}</div>
                    <div className="card-body">
                        <h5 className="card-title">{element.home_team.code} - {element.away_team.code} </h5>
                        <p className="card-subtitle">{element.datetime.slice(0,10)}</p>
                        <p className="card-subtitle">{element.datetime.slice(11,16)} hs.</p>
                    </div>
                </div>     
            )}

            <h3 className="mt-5">Tercer puesto</h3>
            {tercero.map((element,index)=>
                <div className="card text-white bg-secondary mb-3 col-2 mx-4" >
                    <div className="card-header">Partido {index+51}</div>
                    <div className="card-body">
                        <h5 className="card-title">{element.home_team.code} - {element.away_team.code} </h5>
                        <p className="card-subtitle">{element.datetime.slice(0,10)}</p>
                        <p className="card-subtitle">{element.datetime.slice(11,16)} hs.</p>
                    </div>
                </div>     
            )}

            <h3 className="mt-5">Final</h3>
            {final.map((element,index)=>
                <div className="card text-white bg-secondary mb-3 col-2 mx-4" >
                    <div className="card-header">Partido {index+52}</div>
                    <div className="card-body">
                        <h5 className="card-title">{element.home_team.code} - {element.away_team.code} </h5>
                        <p className="card-subtitle">{element.datetime.slice(0,10)}</p>
                        <p className="card-subtitle">{element.datetime.slice(11,16)} hs.</p>
                    </div>
                </div>     
            )}
            
        </div>
    </div>
    )
}