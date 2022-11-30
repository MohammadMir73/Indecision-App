class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.changeVisibility = this.changeVisibility.bind(this);
        this.state = {
            visibility : false
        }
    }
    changeVisibility() {
        this.setState((prevstate) => {
            return {
                visibility : !prevstate.visibility
            };
        });
    }
    render() {
        return (
            <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.changeVisibility}>
                {this.state.visibility ? "Hide details" : "Show details"}
                </button>
            {this.state.visibility && (
                <div>
                    <p>some text to hide</p>
                </div>
            )}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));