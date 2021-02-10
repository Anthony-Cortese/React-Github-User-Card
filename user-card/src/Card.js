import React from 'react'

class Card extends React.Component {
    render() {
        return (

            <div className='card'>
                <img src={this.props.avatar_url} alt="user"/>
                <div className='card-info'>
                <h1>{this.props.name}</h1>
                <p className='username'> Username: {this.props.login} </p>
                <p>Location: {this.props.location}</p>
                
                <p>Followers: {this.props.followers}</p>
                <p>Following:{this.props.following}</p>
                <p>Bio:{this.props.bio}</p>
            
            </div>
        </div>
    )
}
    

}
export default Card;