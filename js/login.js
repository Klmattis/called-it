/**
 *  Defines and renders the Login class to DOM elements with id "login-prediction"
 *  @author  Keith Mattison
 *  @class  Login component
 */
login = (files) => {
    var fr = new FileReader();
    fr.onload = (ev) => {
        try {
            wallet = JSON.parse(ev.target.result);
        } catch (err) {
            alert('Error logging in: ' + err);
        }
    }
    fr.readAsText(files[0]);
}