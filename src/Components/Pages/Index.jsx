import React, {Component} from 'react'
import Navbar from '../Navbar'
import '../Pages/stylesPages/Index.css'
import FormTest from '../FormTest'
import Particles from 'react-particles-js';
import Modal from '../Modal'

const parametros = {
    particles: {
        number: {
            value: 150,
            density: {
                enable: true,
                value_area:1000
            }
        }
    }
    
}

class Index extends Component {
    constructor(props){
        super(props)

        this.state = {
            form: {
                firstName: '',
                age: '',
                firstQuestion:'',
                secondQuestion: '',
                thirdQuestion: ''
            },
            data:{},
            modal: false
            
        }
    }

    handleInputs = (e) => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })  
    }

    handleButtonWatson = async () => {
        try {
            const response = await fetch('/testPersonality', {
                method: 'POST',
                body: JSON.stringify(this.state.form),
                headers: {
                    'Content-type': 'application/json'
                }
            })
            const data = await response.json()
            let dataInfo = this.filterData(data)
            this.setState({
                data: dataInfo,
                modal: true,
            })
        }
        catch(error){
            console.log(error)
        }
    }

    filterData = (data) => {
        console.log(data)
        let newData =  Object.values(data)
        newData = newData[0][0].children

        let dtaPersonality = newData.map(item => {
            return {
                name: item.name,
                percent: Math.floor(item.percentile * 100)
            }
        })
        return dtaPersonality
    }

    

    handleButtonClose = () => {
        this.setState({
            form: {
                firstName: '',
                age: '',
                firstQuestion:'',
                secondQuestion: '',
                thirdQuestion: ''
            },
            modal: false
        })
    }

    render(){
        return (
            
            <React.Fragment>
                <Navbar/>
                <div className="form_container-index">
                    <FormTest handleInputs={this.handleInputs} handleButtonWatson={this.handleButtonWatson}/>
                </div>
                <Particles params={parametros} style={{
                    width: '100%',
                    position: 'absolute',
                    top: 0,
                    bottom:0,
                    right: 0,
                    left: 0,
                    height: 'auto'
                }}/>
                {this.state.modal && (
                    <Modal data={this.state.data} valueModal={this.state.modal} handleButtonClose={this.handleButtonClose}/>
                )}
            </React.Fragment>
        )
    }
}

export default Index 