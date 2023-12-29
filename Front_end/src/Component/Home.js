import { useState } from 'react';
import '../App';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Auth/AuthContext';
const Home = () => {
    //js
    const { setAuthenticated } = useAuth();
    const [dataLogin, setData] = useState([]);
    const nav = useNavigate();
    //Here login is a an object(a pointer to an anonymous function)
    const login = async (e,username,passwordV) => {
        e.preventDefault();
        // create a object in java script
        const data = {
            studentName: username,
            password: passwordV
        };
        await fetch("http://localhost:8080/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",// client will send in json object and will be expecting json object from server 
          },
          body: JSON.stringify(data), //this is the body of my API request
        })//this will go the controller having the postmapping /login
          .then((response) => response.text())
          .then((textData) => {
            console.warn("data", textData);
            let temp = textData.split(" ");
            if(temp[0]+" "+temp[1] == 'Login Successful'){
                alert("Login Successful");
                setAuthenticated(true)
                let path = '/timetablestudent'
                nav(path);
              localStorage.setItem('id',temp[2]);
            }else if(textData == 'Login is not successful'){
                alert("Login Failed!! Wrong UserName or Password");
            }
            setData(textData);
          })
          .catch((e) => {
            console.log("e", e);
          });
        return;
      };//js
    return (//body
        <>

            <div className="login-container">
                <img className="imagelogo" src="https://www.iiitb.ac.in/includefiles/userfiles/images/IIITB%20Silver%20Jubilee%20Logo.jpg" />
                <h2>Student Login Page</h2>
                <form className="login-form">
                    <div className="form-group">
                        <label for="username">Username:</label>
                        <input type="text" id="username" name="username" required />
                    </div>

                    <div className="form-group">
                        <label for="password">Password:</label>
                        <input type="password" id="password" name="password" required />
                    </div>

                    <div className="form-group">
                        <button type="submit" onClick={(eve)=>login(eve,document.getElementById("username").value,document.getElementById("password").value)}>Login</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Home;