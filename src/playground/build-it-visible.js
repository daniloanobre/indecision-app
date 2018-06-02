class VisibilityToggle extends React.Component{
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);

        this.state = {
            visibility: false,
            buttonTitle: 'Hide Details'
        }
    }
    handleToggleVisibility(){
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility,
                buttonTitle: !prevState.visibility? 'Show Details': 'Hide Details'
            };
        });        
    }
    render() {
        return (
            <div>
                <h1>Visible Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.buttonTitle}</button>
                <p hidden={this.state.visibility}>This is the details you wanted to read</p>
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// let buttonText = 'Show Details';
// let visibility = false;

// const onSetButtonText = (e) => {
//     if(visibility) {
//         buttonText = 'Show Details';
//         visibility = false;

//         render();
//     } else {
//         buttonText = 'Hide Details';
//         visibility = true;
        
//         render();
//     }
// }

// const appRoot = document.getElementById('app');


// const render = () => {
//     const template = (
//         <div>
//             <h1>Visible Toggle</h1>
//             <button onClick={onSetButtonText}>{buttonText}</button>
//             <p hidden={!visibility}>This is the details you wanted to read</p>
//         </div>
//     );

//     ReactDOM.render(template, appRoot);
// }

// render();
