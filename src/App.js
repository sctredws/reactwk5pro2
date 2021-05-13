
import './App.css';

function App() {
  return (
    <div >

      <div className="wrapper">
        <div className="description">
            <h2>Learn to code by <br/> watching others</h2>  <p className="para1">See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
        </div>
        <div className="button"> <button className="buttonform"><strong>Try it free 7 days</strong> then $20/mo. thereafter</button></div>
        <div className="signup">
            <form/><input type="text" placeholder="First Name" name="fname" required className="sign"/>
            <form/><input type="text" placeholder="Last Name" name="lname" required className="sign"/> 
            <form/><input type="text" placeholder="Email Address" name="email" required className="sign"/>
            <form/><input type="text" placeholder="Password" name="password" required className="sign"/>
            <div className="trial">
                <button class="grnbtn"><strong>CLAIM YOUR FREE TRIAL</strong></button>
                <p class="para2">By clicking the button your are agreeing to our <b>Terms and Services</b></p>
            </div>
        </div>
        </div>
      

      
    </div>
  );
}

export default App;
