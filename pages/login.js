import { useState } from 'react'
import { useRouter } from 'next/router'
import { Container, TextField, Button, Typography } from '@mui/material'
import { LockOutlined } from '@mui/icons-material'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const router = useRouter()
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value)
    }
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value)
    }
  
    const handleSubmit = (event) => {
      event.preventDefault()
      // Your login logic goes here
      if (email === 'user@example.com' && password === 'password') {
        // Successful login, navigate to the home page
        router.push('/')
      } else {
        // Login failed, display an error message
        setError('Invalid email or password')
      }
    }
  
    return (
      <Container maxWidth="xs"
        sx = {{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: 8,
        }}
      >
        <LockOutlined
            sx = {{
                fontSize: '48px',
                marginBottom: 1,
            }} 
        />
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        {error && <div>{error}</div>}
        <form onSubmit={handleSubmit}
            sx = {{width: '100%',
            marginTop: 1,}}
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={handleEmailChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={handlePasswordChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx = {{marginTop: 3}}
          >
            Login
          </Button>
        </form>
      </Container>
    )
  }
  export default Login