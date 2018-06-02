console.log('App.js is running!');

// JSX - JavaScript XML

const app = {
    title: "My title",
    subtitle: "This is my subtitle using javascript objects",
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submit');

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = "";
        render();
    }
};

const onRemoveAll = (e) => {
    e.preventDefault();
    app.options = [];
    render();
};

const onMakeDecision = (e) => {
    const selectOption = app.options[Math.floor(Math.random() * (app.options.length))];
};

const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>

            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should i do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                {
                    app.options.map((option) => <li key={option}>{option}</li>)
                }
            </ol>

            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
}

render();