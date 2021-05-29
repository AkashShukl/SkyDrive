import React, { useRef, useState } from 'react'
import { Form, Card, Button, Alert } from 'react-bootstrap'
import { useAuth } from "../../contexts/AuthContext"
import { Link } from "react-router-dom"

export default function Login() {

  const { forgotPassword } = useAuth()
  const emailRef = useRef();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')


  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setMessage('')
      setError('')
      setLoading(true)
      await forgotPassword(emailRef.current.value)
      setMessage("Check your email for furter instruction!")
    } catch {
      setError("Something went wrong :( ")
    }
    setLoading(false)
  }

  return (
    <>
      <Card>
        <Card.Body>
        {message}
        {error}
          <h2 className="text-center mb-4">Reset password</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>

            <Button disabled={loading} className="w-100" type="submit">
              Reset Password
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/login">Login</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </>
  )
}
