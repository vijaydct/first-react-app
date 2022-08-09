import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'\

class ShowPost extends React.Component{
    constructor(){
        super()
        this.state={
            postDetails : [],
            user: {},
            comments: []
        }
    }

    componentDidMount(){
        const id = this.state.match.params.id
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response)=>{
            const postDetails = response.data
            this.setState({postDetails})
        })

        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then((response)=>{
            const comments = response.data
            this.setState({comments})
        })
    }
    // componentDidUpdate() is called after componentDidMount()
    // An example when to use componentDidUpdate is when we need to call an external API on condition that the previous state and the current state have changed
    componentDidUpdate(){
        // To avoid an infinite loop, the API call needs to be inside a conditional statement which checks for the previous and current values.
        if(prevState.postDetails !== this.state.postDetails){
            const userId = this.state.postDetails.userId

            axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then((response)=>{
            const user = response.data
            this.setState({user})
            })
        }
    }

    render(){
        return(
            <div>
                <h2>USER NAME: {this.state.user.name}</h2>
                <h2>TITLE: {this.state.postDetails.title}</h2>
                <h2>BODY: {this.state.postDetails.body}</h2>
                <hr></hr>
                <h2>comments : </h2>
                <ul>
                    {this.state.comments.map((ele)=>{
                        return(
                        <li key={ele.id}>{ele.body}</li>
                        )
                    })
                    }
                </ul>
            </div>
        )
    }
}

export default ShowPost