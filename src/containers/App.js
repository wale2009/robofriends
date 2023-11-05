import { Component } from 'react';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import './App.css';


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users => this.setState({ robots: users}))
        
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value})  
    }


    render() {
        const { robots, searchfield } = this.state
        const filteredRobots = robots.filter(robot =>{
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
            // toLowercase comes with all strings it makes every thing lowercase
        })
        // dis !, if robots.length is zero turn it into true so that if no robot we loading
        return !robots.length ? 
           <h1>Loading</h1> :
            (
                <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>
                </div>
            );  
    }  
}

export default App;