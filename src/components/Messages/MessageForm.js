import React from 'react'
import axios from 'axios'

class MessageForm extends React.Component{
    constructor(){
        super()
        this.state={
            body: ''
        }
    }

    handleChangeText=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        const formData = {
            body:this.state.body
        }

        axios.post('http://localhost:3033/messages', formData)
        .then((response)=>{
               const message = response.data
               this.props.addMessage(message)
               this.setState({ body : ''})
        })
        .catch((err)=>{
            alert(err.message)
        })
    }

    render(){
        return(
            <div>
                <h2>Add a Message</h2>
                <form onSubmit={this.handleSubmit}>
                    <input
                        value={this.state.body}
                        onChange={this.handleChangeText}
                        name="body"
                    />
                    <br/>
                    <input type="submit" value="submit"/>
                </form>
            </div>
        )
    }
}

export default MessageForm