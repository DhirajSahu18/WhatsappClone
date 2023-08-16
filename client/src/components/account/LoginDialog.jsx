import React , {useContext} from 'react';

// material-ui
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

// login
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';

// context
import { AccountContext } from '../context/AccountProvider';

//api to add new user
import { addUser } from '../api/api';

const LoginDialog = () => {

    const { setAccount } = useContext(AccountContext);

    const DialogBox = {
        height: "100vh",
        backgroundColor: "#00bfa5",
        boxShadow: "none",
        overflow: "hidden"
    }

    const onSuccessLogin = async (res) => {
        const decoded = jwt_decode(res.credential)
        setAccount(decoded);
        const result = await addUser(decoded);
    }
    const onErrorLogin = (res) => {
        console.log('Login Failed', res);
    }

    return (
        <>
            <Dialog
                open={true}
                keepMounted
                aria-describedby="alert-dialog-slide-description"
                sx={DialogBox}
            >
                <DialogTitle>
                    <center>
                        <WhatsAppIcon style={{
                            marginRight: "7px",
                            marginTop: "-13px"
                        }} />
                        <strong>{"Whatsapp-clone"}</strong>
                    </center>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        <Typography variant="h5" component="h5" gutterBottom>
                            To Use Whatsapp on your Computer?
                        </Typography>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <center style={{ margin: "auto" }}>
                        <GoogleLogin
                            onSuccess={ onSuccessLogin }
                            onError={onErrorLogin}
                        />
                    </center>
                </DialogActions>
            </Dialog>
        </>
    )
}
 
export default LoginDialog