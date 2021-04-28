import Searchbutton from './Searchbutton'
const { React, Component } = require('react')

class SearchbarInput extends Component{
    render(){
        return(
            <form id="searchbarContainer" onSubmit={(event) => this.props.handleSearchButton(event)}>
                <input id="searchbarInput" type="text" placeholder="Search"/>
                <Searchbutton />
            </form>
            
        )
    }
}

export default SearchbarInput