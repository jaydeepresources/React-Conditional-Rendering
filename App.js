import React, { Component } from 'react';

class App extends Component {

  constructor() {
    super();
    this.state = {
      paraFlag: true
    }
  }

  toggle() {
    this.setState({
      paraFlag: !this.state.paraFlag
    })
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron py-3 my-4">
          <p className="display-4 text-center mb-0">Conditional Rendering</p>
        </div>

        {
          this.state.paraFlag ? (
            <p className="lead">
              React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable and easier to debug.
              Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM. We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.
              React can also render on the server using Node and power mobile apps using React Native.
            </p>
          ) : null
        }

        <button className="btn btn-primary" onClick={() => this.toggle()}>
          <i className={ this.state.paraFlag ? 'fas fa-eye-slash' : 'fas fa-eye'}></i>
        </button>

      </div>
    );
  }
}

export default App;
