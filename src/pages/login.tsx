import React , {useContext} from 'react';
import { Box, Paper, TextField, Button, Typography, Stack } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext} from '../theme/authContext';


type LoginProps = {
  onLogin?: (credentials: { username: string; password: string }) => void;
};


export default function Login({ onLogin }: Readonly<LoginProps>) {

  const [username, setUsername] = React.useState('');
  const [upassword, setUpassword] = React.useState('');
  const [error, setError] = React.useState<string | null>(null);
   const navigate = useNavigate();
   const auth = useContext(AuthContext);

  axios.defaults.baseURL = 'http://localhost:8081';

 const submit = async (event: React.FormEvent) => {

   event.preventDefault(); // Damit die Seite nicht neu lädt beim "Submit"

      try{
                console.log(username, upassword+ " Hallo, das ist eine Konsolenausgabe!");
                const response =await axios.post('/users/login', { username, upassword },
                  { headers: { 'Content-Type': 'application/json' } });

                const answer =  response.data;

                 auth?.login(username);


                navigate('/userspace', { state: { username: username } });
        }
   catch (err) {
       if (axios.isAxiosError(err)) {
         setError(err.response?.data?.message || 'Fehler beim Einloggen');
       } else {
         setError('Ein unbekannter Fehler ist aufgetreten');
       }
     }
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#34262a',
        p: 2,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          width: '100%',
          maxWidth: 400,
          textAlign: 'center',
          borderRadius: 2,
        }}
      >
        <Typography variant="h5" component="h1" gutterBottom>
          Login
        </Typography>
        <Box component="form" onSubmit={submit} noValidate autoComplete="off">
          <Stack spacing={2}>
            <TextField
              required
              fullWidth
              id="username"
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              InputProps={{
                startAdornment: <PersonIcon sx={{ mr: 1 }} />,
              }}
            />

            <TextField
              required
              fullWidth
              id="password"
              label="Password"
              type="password"
              value={upassword}
              onChange={(e) => setUpassword(e.target.value)}
              InputProps={{
                startAdornment: <LockIcon sx={{ mr: 1 }} />,
              }}
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ mt: 1 }}
            >
              Login
            </Button>
          </Stack>
        </Box>
      </Paper>
    </Box>
  );
}
