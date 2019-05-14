/**
 * 	Defines and renders the Header class to DOM elements with id "header"
 *	@author  Keith Mattison
 *	@class  Header component
 */
class Header extends React.Component {
		// Render Header
    render() {
        return (
        	<div id="header-container" className="medium-padding-top centered-text">
						<div id="header-text" className='large-text'>CALLED IT!</div>
						<div id="header-divider" className="ui divider"></div>
						<div id="header-subtext" className='medium-text medium-padding-top'>A SIMPLE MECHANISM FOR VERIFIABLY STORING PREDICTIONS FOR FUN</div>
					</div>
        );
    }
}

// Render Header to DOM element
ReactDOM.render(
    <Header />, 
    document.getElementById("header")
);