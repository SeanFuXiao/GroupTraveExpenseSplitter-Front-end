import { useState } from 'react'; 
import { Link, useNavigate } from 'react-router-dom';
//import * as authService from '../../services/authService';


function SignUp() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
  
    const handleSignUp = async (e) => {
      e.preventDefault();
      try {
        SignUp(username, email, password);
        navigate('/signin');
      } catch (err) {
        setError('Error creating an account, please try again.');
      }
    };
  
    return (
      <div className="form-container">
        <h2>Sign Up</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSignUp}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input type="submit" value="Sign Up" />
        </form>
      </div>
    );
  }



/*const SignupForm = () => {
    const navigate = useNavigate();
    //const [email, setEmail] = useState(['']);
    //const [password, setPassword] = useState([""]);
    /*const [formData, setFormData] = useState({ 
        username: '',
        passwordConf: '',
    });
     const updateMessage = (msg) => {
        setMessage(msg);

     };
     const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });

     };
     const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newUserResponse = await authService.signup(formData);
            props.setUser(newUserResponse.user);
            navigate('/');

        }catch(err) {
            updateMessage(err.message);
        }

     };
     const { username, password, passwordConf } = formData;
     const isFormInvalid = () => {
        return !(username && password && password === passwordConf);

     };
     return (
        <main>
      <h1>Sign Up</h1>
      <p>{message}</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="name"
            value={username}
            name="username"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value = {password}
            name="password"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="confirm">Confirm Password:</label>
          <input
            type="password"
           id="confirm"
            value={passwordConf}
            name="passwordConf"
            onChange={handleChange}
          />
        </div>
        <div>
          <button disabled={isFormInvalid()}>Sign Up</button>
          <Link to="/">
            <button>Cancel</button>
          </Link>
        </div>
      </form>
    </main>
  );
};
   
*/


export default SignUp; 