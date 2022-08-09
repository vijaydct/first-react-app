import React from 'react'
import axios from 'axios'
import moment from 'moment'
import { MdCancel, MdEdit, MdUpdate } from 'react-icons/md'
 
class MessageItem extends React.Component{
    constructor(props){
        super(props)
        this.state={
            body: props.body,
            hover: false,
            editMode: false
        }
    }

    handleRemove=()=>{
        const confirmRemove = window.confirm('Are you sure?')
        if(confirmRemove){
            axios.delete(`http://localhost:3033/messages/${this.props.id}`)
            .then((response)=>{
                const message = response.data
                this.props.removeMessage(message.id)
            })
            .catch((err)=>{
                alert(err.message)
            })
        }
    }

    handleEdit=()=>{
        this.setState(prevState=>{
            return{
                editMode: !prevState.editMode
            }
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        console.log('update msg')
        const formData={
            body: this.state.body
        }
        axios.put(`http://localhost:3033/messages/${this.props.id}`, formData)
        .then((response)=>{
                console.log('updatData', response.data)
                const message = response.data
                this.setState(prevState=>{
                    return{
                        editMode: !prevState.editMode
                    }
                })
                this.props.updateMessage(message) 
        })
        .catch((err)=>{
            alert(err.message)
        })
    }

    handleChangeText=(e)=>{
        this.setState({[e.target.name] : e.target.value})
    }
    
    handleMouseOver=()=>{
        this.setState(prevState=>{
            return{
                hover: !prevState.hover
            }
        })
    }

    handleMouseOut=()=>{
        this.setState(prevState=>{
            return{
                hover: !prevState.hover
            }
        })
    }

    render(){
        return(
            <div>
                {this.state.editMode ? 
                    <form onSubmit={this.handleSubmit}>
                        <input
                            type="text"
                            value={this.state.body}
                            onChange={this.handleChangeText}
                            name="body" 
                        />
                    </form> 
                    : <p>{this.props.body}</p>
                }
                <small onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>{this.state.hover ? moment(this.props.createdAt).format('MMMM Do YYYY h:mm:ss a') : moment(this.props.createdAt).fromNow()}</small>
                <br/>
                <button onClick={this.handleRemove}> <MdCancel/> </button>
                <button onClick={this.state.editMode ? this.handleSubmit : this.handleEdit}> {this.state.editMode ? <MdUpdate/> : <MdEdit/>} </button>
                <hr/>
            </div>
        )
    }
}

export default MessageItem