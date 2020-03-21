import React from 'react'
import ReactDOM from 'react-dom'
import '../Styles-components/ModalNavbar.css'
import Card from './Card'

export default function ModalCom(props){
    
    return ReactDOM.createPortal(
        <React.Fragment>
            <div className="modal__container" >
                <div className="modal__container-into_box">
                    <div className="modal-header">
                        <div className="title-modal">
                            <h1>Personality Insights Results</h1>
                        </div>
                        <div className="close-button-modal" onClick={() => props.handleButtonClose()}>
                            x
                        </div>
                    </div>
                    <div className="modal-body">
                        {props.data.map((item, index) =>  
                            <Card key={index} name={item.name} percent={item.percent}/>
                        )}
                    </div>
                </div>
                
            </div>
        </React.Fragment>
        
    , document.getElementById('modal'))
}