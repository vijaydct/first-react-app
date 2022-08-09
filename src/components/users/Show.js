import React from 'react' 
import axios from 'axios'

class UserShow extends React.Component { 
    constructor() {
        super()
        this.state = {
            user: {}
        }
    }

    componentDidMount(){ 
        const id = this.props.match.params.id
        axios.get(`http://jsonplaceholder.typicode.com/users/${id}`)
            .then((response) => {
                const user = response.data 
                this.setState({ user })
            })
    }

    render() {
        return (
            <div>
                <h2>user details-{this.props.match.params.id} </h2>
                <h3>name- {this.state.user.name}</h3>
                <h3>email-{this.state.user.email}</h3>
            </div>
        )
    }
}

export default UserShow