import axios from 'axios';
import './App.css';
import React from 'react';
import Card from './Card'


class App extends React.Component {
  state = {
    userData: {},
    followers: []
  }

  componentDidMount() {
    axios
    .get('https://api.github.com/users/Anthony-Cortese')
    .then(res => {
      this.setState({userData: res.data})
      axios.get(res.data.followers_url).then(res => {
        this.setState({followers: res.data})
      })
      .catch(e=> console.log(e.message))
    })

    .catch(e=> console.log(e.message))
  }

  

  render() {
    const { userData, followers } = this.state
    const { login } = userData
    console.log(userData, followers)
    return (
      
      <div>
        <Card
        {...userData}
        />
        {followers.map(({ login }) => (
        <h1 key={login}>
          {login}</h1>
        ))}
        <h2>{ login }</h2>
        
      </div>
    )
  }
}
export default App;