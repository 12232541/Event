
import "../Styles/Auth.css";


export default function Signup() {
  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2>Sign Up</h2>

        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button>Sign Up</button>

        <div className="switch-link">
          Already have an account? <a href="/login">Login</a>
        </div>
      </div>
    </div>
  );
}
