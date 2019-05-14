/**
 *  Defines and renders the Login class to DOM elements with id "login-prediction"
 *  @author  Keith Mattison
 *  @class  Login component
 */
class Login extends React.Component {
    // Set initial state
    state = {
        loggedIn: false
    };

    // Attempt to login using user's key file, set state based on success or failure
    login = (files) => {
        var fr = new FileReader();
        fr.onload = (ev) => {
            try {
                const wallet = JSON.parse(ev.target.result);
                this.setState({ loggedIn: true });
            } catch (err) {
                alert('Error logging in: ' + err);
                this.setState({ loggedIn: false });
            }
        }
        fr.readAsText(files[0]);
    }

    // Render Login and Prediction
    render() {        
        const loggedIn = this.state.loggedIn ? {} : {display: 'none'};
        const notLoggedIn = this.state.loggedIn ? {display: 'none'} : {};
        console.log(this.props);
        return (
            <div id="login-prediction-container">
                <div id="login-container" className="large-padding-top">
                    <div id="login-file-container" className="file-input" style={notLoggedIn}>
                        <input id="login-file-input" type="file" onChange={(e) => {this.login(e.target.files)}} />
                        <div id="login-file-description">
                            DROP YOUR KEY BELOW TO LOGIN AND CREATE A PREDICTION
                        </div>
                    </div>
                </div>
                <div id="prediction-outer-container" style={loggedIn}>
                    <Prediction />
                </div>
            </div>
        );
    }
}

// Render login to DOM element
ReactDOM.render(
    <Login />, 
    document.getElementById("login-prediction")
);