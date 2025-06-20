import { Box, Button, Container, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import  Basket from "./Basket"

export default function OtherNavbar () {
    const authMember = null
    return (
        <div className="other-navbar">
          <Container className="navbar-container">
            <Stack
              className="menu">
              {/* Logo */}
              <Box>
                <NavLink to="/">
                  <img className="brand-logo" src="/icons/burak.svg" />
                </NavLink>
              </Box>
    
              {/* Menu Links */}
              <Stack className="links">
                <Box className={"hover-line"}>
                  <NavLink to="/">Home</NavLink>
                </Box>
    
                <Box className={"hover-line"}>
                  <NavLink to="/products">Products</NavLink>
                </Box>
                {authMember ? (
                  <Box className={"hover-line"}>
                    <NavLink to="/orders" activeClassName={"underline"}>
                      Orders
                    </NavLink>
                  </Box>
                ) : null}
                {authMember ? (
                  <Box className={"hover-line"}>
                    <NavLink to="/member-page" activeClassName={"underline"}>
                      My Page
                    </NavLink>
                  </Box>
                ) : null}
    
                <Box className={"hover-line"}>
                  <NavLink to="/help" activeClassName="underline">
                    Help
                  </NavLink>
                </Box>
                 <Basket/>
                {/* Login or Profile */}
                {!authMember ? (
                  <Box>
                    <Button variant="contained" className="login-button">
                      Login
                    </Button>
                  </Box>
                ) : (
                  <Box>
                    <img
                      className="user-avatar"
                      src={"/icons/default-user.svg"}
                      aria-haspopup={"true"}
                    />
                  </Box>
                )}
              </Stack>
            </Stack>
          </Container>
        </div>
      );
}