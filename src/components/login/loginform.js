import React, { Component } from "react";
let backround =require('./bglogin.jpg');


console.log(backround);
function appform() {
    const [option, setOption] = React.useState(1);
  
    return (
      React.createElement("div",{className:"container"},
      React.createElement("div", { className: "content"},
      React.createElement("header", null,
      React.createElement("div", { className: 'header-headings ' + (option === 1 ? 'sign-in' : option === 2 ? 'sign-up' : 'forgot') },
      React.createElement("span", null, option === 1 ? "Sign in to your account": ""),
      React.createElement("span", null, option === 2 ? "Create an account":""),
      React.createElement("span", null, option === 3 ? "Reset your password":"")
    )),
  
  
      React.createElement("ul", { className: "options" },
      React.createElement("li", { className: option === 1 ? 'active' : '', onClick: () => setOption(1) }, "Sign in"),
      React.createElement("li", { className: option === 2 ? 'active' : '', onClick: () => setOption(2) }, "Sign up"),
      React.createElement("li", { className: option === 3 ? 'active' : '', onClick: () => setOption(3) }, "Forgot")),
  
    //   React.createElement(Form, { option: option }),


    React.createElement("form", {className:"account-form", onSubmit: evt => evt.preventDefault() },
            React.createElement("div", {className:"account-form--fields" + " " +(option===1 ?  " sign-in": option===2 ? "sign-up" :"forgot") },
            React.createElement("input", {id:"user-name", name:"username", type:"text", placeholder:"UserName...", required: option === 2 ? true:false, disabled: option ===2 ?false : true}),
            React.createElement("input", {id: "email", name: "email", type: "email", placeholder: "Your Email...", required: true}),
            React.createElement("input", {id: "password", name: "password", type: "password", placeholder: "Your Password...", required: option === 1 || option===2 ? true: false , disabled: option ===3 ?true : false}),
            React.createElement("input", {id: "re-password", name: "re-password", type: "password", placeholder: "Repeat Password...", required: option === 2 ? true: false, disabled: option ===2 ?false : true}),
            React.createElement("button", {className: "btn-submit-form", type: "submit",}, option ===1 ? "Sign in" : option ===2 ? "Sign up" : "Reset password"))),
      React.createElement("footer", null,
      React.createElement("a", { href: "https://dribbble.com/shots/5041581-Zenbu-Sign-in-up-forgot-page", target: "_blank" }, "Original design with animations by Zenbu")))));
  
  }
// export default appform;
class App extends Component{
   
    render(){
       return(
          React.createElement(appform, null)
       );
    } 
 }
 export default App;