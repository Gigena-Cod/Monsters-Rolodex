import { Component } from "react";

import './search-box.styles.css'

class SearchBox extends Component{
    render(){
        const {onChangeHandler,placeholder,className } = this.props
    return(
        <input 
         className={`search-box ${className}`} 
          type='serch' 
          placeholder={placeholder} 
          onChange={ onChangeHandler } 
        />
    )
}
}

export default SearchBox;