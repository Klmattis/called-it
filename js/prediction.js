/**
 *  Defines and renders the Prediction class to DOM elements with id "prediction"
 *  @author  Keith Mattison
 *  @class  Prediction component
 */
class Prediction extends React.Component {
    // Set initial state
    state = {
        firstName: '',
        middleName: '',
        lastName: '',
        prediction: '',
        checked: false
    };

    // Set state when first name is changed
    handleFirstNameChange = (e) => {
        this.setState({firstName: e.target.value});
    }

    // Set state when middle name is changed
    handleMiddleNameChange = (e) => {
        this.setState({middleName: e.target.value});
    }

    // Set state when last name is changed
    handleLastNameChange = (e) => {
        this.setState({lastName: e.target.value});
    }

    // Set state when prediction is changed
    handlePredictionChange = (e) => {
        this.setState({prediction: e.target.value});
    }

    // Set state when checkbox is changed
    handleCheckboxChange = (e) => {
        this.setState({checked: !this.state.checked});
    }

    // Returns boolean: true only if all necessary info is provided
    canBeSubmitted = () => {
        const checked = this.state.checked;
        const firstName = this.state.firstName;
        const prediction = this.state.prediction;

        return checked && firstName && prediction;
    }

    // Render prediction
    render() {
        const isEnabled = this.canBeSubmitted();
        return (
            <div id="prediction-container">
                <div id="prediction-message" className="ui attached message centered-text small-text" style={this.props.loggedIn}>
                    <div className="header">SUBMIT NEW PREDICTION</div>
                </div>
                <div id="prediction-form" className="ui form attached fluid segment">
                    <div id="prediction-names-fields" className="equal width fields">
                        <div id="prediction-first-name-field" className="required field">
                            <label>FIRST NAME</label><input value={this.state.firstName} onChange={this.handleFirstNameChange} placeholder="What's your first name?" />
                        </div>
                        <div id="prediction-middle-name-field" className="field">
                            <label>MIDDLE NAME</label><input value={this.state.middleName} onChange={this.handleMiddleNameChange} placeholder="What's your middle name?" />
                        </div>
                        <div id="prediction-last-name-field" className="field">
                            <label>LAST NAME</label><input value={this.state.lastName} onChange={this.handleLastNameChange} placeholder="What's your last name?" />
                        </div>
                    </div>
                    <div id="prediction-prediction-field" className="required field">
                        <label>PREDICTION</label><textarea value={this.state.prediction} onChange={this.handlePredictionChange} placeholder="What's going to happen?" rows="3"></textarea>
                    </div>
                    <div id="prediction-checkbox-inline-container" className="inline field">
                        <div id="prediction-checkbox-container" className="ui checkbox">
                            <input id="prediction-checkbox" type="checkbox" checked={this.state.checked} onChange={this.handleCheckboxChange} /><label>I understand that once submitted, all provided information is public</label>
                        </div>
                    </div>
                    <div className="prediction-submit"><button disabled={!isEnabled} className="ui primary button">SUBMIT</button></div>
                </div>
            </div>
        );
    }
}