import { Component } from 'react';

import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component'
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state={
      monsters:[],
      searchField:''
    }
  }

  componentDidMount(){

    const URL_API ='https://jsonplaceholder.typicode.com/users';
    fetch(URL_API)
      .then( response => response.json() )
      .then( users => this.setState(
        ()=>{
          return {monsters:users}
        }
      ))
  }

  onSearchChange = (event) => {

    let searchField = event.target.value.toLocaleLowerCase()

     this.setState( () => {
       return { searchField }
     })
   }  

  render(){
    
    const { monsters, searchField} = this.state;
    const { onSearchChange }= this;

    const filteringMonsters = monsters.filter ( (monster) => {

      return monster.name.toLocaleLowerCase().includes(searchField)

    })

    return (
      <div className="App">
        <h1 className='app-title'> Monster Rolodex</h1>

        <SearchBox className='monsters-search-box' placeholder='Search Monsters' onChangeHandler={onSearchChange} />
        <CardList monsters={filteringMonsters}/>
        
      </div>
    );
  }

}

export default App;
