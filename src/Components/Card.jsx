import React from 'react'


export default function Card(props){
    return (
        <div className="card">
            <div className="card-title">
                <h3>{props.name}</h3>
            </div>
            <div className="card-percent">
                {props.percent} %
            </div>
        </div>
    )
}