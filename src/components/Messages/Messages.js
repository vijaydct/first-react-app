import React from 'react'
import axios from 'axios'
import MessageForm from './MessageForm'
import MessageItem from './MessageItem'


class Messages extends React.Component{

    constructor(){
        super()
        this.state={
            messages: []
        }
    }

    componentDidMount(){
        axios.get('http://localhost:3033/messages')
        .then((response)=>{
            const messages = response.data
            this.setState({messages})
        })
        .catch((err)=>{
            alert(err.message)
        })
    }

    addMessage=(message)=>{
        this.setState((prevState)=>{
            return{
                messages: prevState.messages.concat(message)
            }
        })
    }

    removeMessage=(id)=>{
            this.setState((prevState)=>{
                return{
                    messages: prevState.messages.filter( msg => msg.id !== id)
                }
            })
    }

    updateMessage=(msg)=>{
        this.setState(prevState=>{
            return{
                messages : prevState.messages.map((message)=>{
                    if(message.id === msg.id){
                        console.log('if', Object.assign({}, message, msg))
                        return Object.assign({}, message, msg)
                    }else{
                        console.log('else', Object.assign({}, message, msg))
                        return Object.assign({}, message)
                    }
                })
            }
        })
    }

    render(){

        return(
            <div>
                <h2>My Message Board - {this.state.messages.length}</h2>
                {
                    this.state.messages.map((message)=>{
                        return <MessageItem
                                    key={message.id}
                                    id={message.id} 
                                    body={message.body} 
                                    createdAt={message.createdAt}
                                    removeMessage={this.removeMessage}
                                    updateMessage={this.updateMessage}
                                />
                    })
                }
                <MessageForm addMessage={this.addMessage}/>
            </div>
        )
    }

}

export default Messages