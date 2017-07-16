import React from 'react'

export const User = () => <div>user</div>
export default class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            active: false
        }
    }

	render() {
		return (
			<div className="container body-container">
                { this.props.children }
                { this.state.active && <User/> }
			</div>
		);
	}
}
