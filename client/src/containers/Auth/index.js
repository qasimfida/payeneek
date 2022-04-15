import React, { useEffect, useState } from "react"
import { useMutation } from "react-query"
import { signUp, signIn } from "../../apis/auth"
import {
  Button,
  Box,
  Container,
  Grid,
  TextField,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  InputAdornment,
  Divider,
} from "@mui/material"
import { styled } from "@mui/system"
import background from "../../assets/img/background.jpg"
import { Link as MUILink, useNavigate } from "react-router-dom"
import AccountCircle from "@mui/icons-material/AccountCircle"

const TypoH5 = styled(Typography)({
  fontSize: "32px",
  fontWeight: 800,
  textAlign: "left",
  marginBottom: 0,
  letterSpacing: "1px",
})
const Typo = styled(Typography)({
  textAlign: "left",
  fontSize: "16px",
  marginBottom: "50px",
  marginTop: "16px",
  fontWeight: 400,
})
const Input = styled(TextField)({
  display: "block",
  marginBottom: "20px",
})
const Wrapper = styled(Box)({
  borderRadius: "20px",
  margin: "60px",
})
const ImgBox = styled(Box)({
  width: "100%",
  height: "100vh",
  position: "relative",
  background: `url(${background}) center`,
  backgroundSize: "cover",
})
const Group = styled(FormGroup)({
  marginBottom: "20px",
})
const SperatorText = styled(Typography)({
  fontSize: "14px",
  fontWeight: 500,
  letterSpacing: 1
});
const Link = styled(MUILink)({
  textDecoration: 'none'
})

const Auth = ({ login }) => {
  console.log(process.env)
  const navigate = useNavigate()
  const [state, setState] = useState({
    email: "",
    password: "",
    email: "",
  })
  const signup = useMutation(signUp)
  const handleRedirect = (data) => {
    if (data?.token) {
      localStorage.setItem("token", data.token)
      navigate("/home")
    }
  }
  const handleSignUp = async () => {
    await signup
      .mutateAsync({
        email: "qasimfida0054@gmail.com",
        username: "qasimfida",
        password: "passpass",
      })
      .then((res) => {
        handleRedirect(res.data)
        console.log({ res })
      })
  }
  const signin = useMutation(signIn)
  const handleSignIn = async () => {
    await signin
      .mutateAsync({
        email: "qasimfida0054@gmail.com",
        password: "passpass",
      })
      .then((res) => {
        handleRedirect(res.data)
        console.log({ res })
      })
  }
  console.log({ signup, signin })
  const handleSubmit = (e) => {
    e.stopPropagation()
    e.preventDefault()
    if (login) {
      handleSignIn({ email: state.email, passowrd: state.password })
    } else handleSignUp(state)
  }
  const loading = signin.isLoading || signin.isLoading
  return (
    <Grid container>
      <Grid item xs={8}>
        <ImgBox />
      </Grid>
      <Grid item xs={4}>
        <Wrapper>
          <form onSubmit={handleSubmit}>
            <TypoH5 variant="h5">
              {login ? "Admin Login" : "Join Our Platform"}
            </TypoH5>
            <Typo>Please sign-in to your account and start the adventure </Typo>
            <Input
              fullWidth
              size="small"
              id="email"
              label="Email"
              variant="outlined"
              focused
            />
            {!login && (
              <Input
                focused
                fullWidth
                size="small"
                id="username"
                label="Username"
                variant="outlined"
              />
            )}
            <Input
              focused
              fullWidth
              size="small"
              id="password"
              label="Password"
              variant="outlined"
            />
            <Group>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label={login?"Remember me":"Agree all the terms and policies"}
              />
            </Group>
            <Button
              disabled={loading}
              size="large"
              type="submit"
              variant="contained"
              fullWidth
            >
              {loading ? "Loading..." : "Login"}
            </Button>
            <Typo>
              {login ? <>
                I don't have an account <Link to="/signup">Sign up</Link>
              </>:
              <>
                I've an account already <Link to="/login">login</Link>
              </>
              }
            </Typo>
          </form>
          <Divider flexItem>
            <SperatorText>Or Login with</SperatorText>
          </Divider>
        </Wrapper>
      </Grid>
    </Grid>
  )
}

export default Auth
