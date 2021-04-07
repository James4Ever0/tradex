import React from 'react';

export default class LoginPage extends React.Component {

    render() {

        return (
            <React.Fragment>
                <h2>Login Page</h2><br />    
                <div class="login">    
                    <form id="login" method="get" action="login.php">    
                        <label><b>User Name     
                        </b>    
                        </label>    
                        <input type="text" name="Uname" id="Uname" placeholder="Username" />    
                        <br /><br />    
                        <label><b>Password     
                        </b>    
                        </label>    
                        <input type="Password" name="Pass" id="Pass" placeholder="Password" />    
                        <br /><br />    
                        <input type="button" name="log" id="log" value="Log In Here" />       
                        <br /><br />    
                        <input type="checkbox" id="check" />    
                        <span>Remember me</span>    
                        <br /><br />    
                        Forgot <a href="#">Password</a>    
                    </form>     
                </div>    
            </React.Fragment>
        )
    }
}