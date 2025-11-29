
import "../Styles/Auth.css";


export default function Login() {
  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2>Login</h2>

        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button>Login</button>

        <div className="switch-link">
          Don’t have an account? <a href="/signup">Sign Up</a>
        </div>
      </div>
    </div>
  );
}
