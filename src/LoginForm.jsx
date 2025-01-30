  import React, { useState, useEffect } from 'react';
  import { Link, useNavigate } from 'react-router-dom';

  const styles = {
    loginContainer: {
        backgroundColor: 'black',
      display: 'flex',
      justifyContent: 'center',
      
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f5f5f5',
    },
    loginForm: {
      backgroundColor: 'black',
      padding: '2rem',
      color: 'white',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      width: '100%',
      maxWidth: '400px',
    },
    formGroup: {
      marginBottom: '1rem',
    },
    label: {
      display: 'block',
      marginBottom: '0.5rem',
      fontWeight: 'bold',
    },
    input: {
      width: '100%',
      padding: '0.5rem',
      border: '1px solid #ddd',
      borderRadius: '4px',
      fontSize: '1rem',
    },
    error: {
      border: '1px solid #ff0000',
    },
    errorMessage: {
      color: '#ff0000',
      fontSize: '0.875rem',
      marginTop: '0.25rem',
    },
    loginButton: {
      width: '100%',
      padding: '0.75rem',
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      fontSize: '1rem',
      cursor: 'pointer',
      marginTop: '1rem',
    },
    signupLink: {
      textAlign: 'center',
      marginTop: '1rem',
    },
    forgotPassword: {
      textAlign: 'center',
      marginTop: '1rem',
    },
  };

  const LoginForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      email: '',
      password: '',
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        // Simulate API call
        console.log('Form submitted:', formData);
      }
    }, [errors, isSubmitting, formData]);

    const validateForm = () => {
      let tempErrors = {};
      if (!formData.email) {
        tempErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        tempErrors.email = 'Email is invalid';
      }
      if (!formData.password) {
        tempErrors.password = 'Password is required';
      } else if (formData.password.length < 6) {
        tempErrors.password = 'Password must be at least 6 characters';
      }
      return tempErrors;
    };

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      setErrors(validateForm());
      setIsSubmitting(true);
    };

    return (
      <div style={styles.loginContainer}>
        <div style={styles.loginForm}>
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={{
                  ...styles.input,
                  ...(errors.email ? styles.error : {}),
                }}
              />
              {errors.email && <span style={styles.errorMessage}>{errors.email}</span>}
            </div>
          
            <div style={styles.formGroup}>
              <label style={styles.label}>Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                style={{
                  ...styles.input,
                  ...(errors.password ? styles.error : {}),
                }}
              />
              {errors.password && <span style={styles.errorMessage}>{errors.password}</span>}
            </div>

            <button type="submit" style={styles.loginButton}>
              Login
            </button>
          </form>

          <div style={styles.signupLink}>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </div>

          <div style={styles.forgotPassword}>
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </div>
      </div>
    );
  };

  export default LoginForm;
