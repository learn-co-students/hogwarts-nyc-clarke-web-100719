import React from 'react'

class NewHogForm extends React.Component {
    state={
        name: null,
        specialty: null,
        greased: false,
        weight: null,
        medal: null,
        createdByForm: true
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    render() {
        return (
            <div className="form">
                <form onSubmit={(event) => this.props.newHogInfo(event, this.state)}>
                    Name: <input onChange={this.handleChange} type="text" name="name"/>
                    Specialty: <input onChange={this.handleChange} type="text" name="specialty" />
                        <select onChange={this.handleChange} name="greased">
                            <option disabled selected>Greased?</option>
                            <option>yes</option>
                            <option>no</option>
                        </select>
                    Weight: <input onChange={this.handleChange} type="text" name="weight"/>
                    Highest Medal Achieved: <input onChange={this.handleChange} type="text" name="medal" />
                    <input type="submit" value="Create A New Hog!"/>
                </form>
            </div>
        )
    }
}

export default NewHogForm