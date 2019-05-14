/**
 *  Defines and renders the Login class to DOM elements with id "login"
 *  @author  Keith Mattison
 *  @class  Login component
 */
class Login extends React.Component {
    state = {
        loggedIn: false
    };

    login = (files) => {
        var fr = new FileReader();
        fr.onload = (ev) => {
            try {
                wallet = JSON.parse(ev.target.result);
                this.setState({ loggedIn: true });
            } catch (err) {
                alert('Error logging in: ' + err);
                this.setState({ loggedIn: false });
            }
        }
        fr.readAsText(files[0]);
    }

    render() {
        const loggedIn = this.state.loggedIn ? {display: 'none'} : {};
        return (
            // Login
            <div id="login-container" className="large-padding-top">
                <div className="file-input" style={loggedIn}>
                    <input type="file" id="file" onChange={(e) => {this.login(e.target.files)}} />
                    <div id="desc">DROP YOUR KEY BELOW TO LOGIN</div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Login />, 
    document.getElementById("login")
);