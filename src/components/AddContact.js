import React from "react";
import { withRouter } from "./WithRouter";


class AddContact extends React.Component {

    state = {
        name: "",
        email: ""
    };

    navigateHome = () => {
        this.props.navigate('/')
    }

    add = (e) => {
        e.preventDefault();
        if(this.state.name === "" || this.state.email === ""){
            alert("All the fields are manadatory");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({name:"", email:""});
        this.props.navigate('/');
    }

    render(){
        return (
            <div className="ui main" style={{marginTop:"45px"}}>
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="Name" 
                            value={this.state.name} 
                            onChange={(e) => this.setState({name: e.target.value})}/>
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input 
                            type="text" 
                            name="email" 
                            placeholder="Email"
                            value={this.state.email} 
                            onChange={(e) => this.setState({email: e.target.value})}/>
                    </div>
                    <button class="ui button blue">Add</button>
                    <button class="ui button black" onClick={this.navigateHome}>Back</button>
                </form>
                
            </div>
        );
    };
};

export default withRouter(AddContact);