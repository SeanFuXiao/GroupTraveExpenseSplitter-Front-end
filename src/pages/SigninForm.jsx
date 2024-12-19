import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';



//import * as authService from '../../services/authService';
/*const SigninForm = (props) => {
    const navigate = useNavigate();
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await login({ user, password });
        navigate('/dashboard');
      } catch (error) {
        alert('Error during sign in');
      }
    };
    function SignIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const history = useHistory();
  
  
    return (
      <form onSubmit={handleSubmit} className="form-container">
        <h2>Sign In</h2>
        <label>User:</label>
        <input type="email" value={email} onChange={(e) => setUser(e.target.value)} required />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Sign In</button>
      </form>
    );
  }
*/
function SignIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
  
    const handleSignIn = async (e) => {
      e.preventDefault();
      try {
        await signIn(username, password);
        navigate('/dashboard');
      } catch (err) {
        setError('Invalid credentials, please try again.');
      }
    };
  
    return (
      <div className="form-container">
        <h2>Sign In</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSignIn}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input type="submit" value="Sign In" />
        </form>
      </div>
    );
  }
  
  

/* const SigninForm = (props) => {
    const navigate = useNavigate();
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const [message, setMessage] = useState(['']);
    const [formData, setFormData] = useState({ username: "", password: "", });
   const updateMessage = (msg) => {
    setMessage(msg);

const handleChange = (e) => {
    updateMessage("");
    setFormData({ ...formData, [e.target.name]: e.target.value });

};
const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const user = await authService.signin(formData);
        console.log(user);
        props.setUser(user);
        navigate('/');

    } catch (err) {
        updateMessage(err.message); 

   }
};

 return ( 
    <main> 
        <h1>Log In</h1>
        <p>Hello!</p>

    
    <form autoComplete="off" onSubmit={handleSubmit}>
    <div>
      <label htmlFor="email">Username:</label>
      <input
        type="text"
        autoComplete="off"
        id="username"
        value={formData.username}
        name="username"
        onChange={handleChange}
      />
    </div>

  <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            autoComplete="off"
            id="password"
            value={formData.password}
            name="password"
            onChange={handleChange}
          />
        </div>
        <div>
          <button>Log In</button>
          <Link to="/">
            <button>Cancel</button>
          </Link>
        </div>
      </form>
    </main>
  );
};

*/

export default SigninForm; 