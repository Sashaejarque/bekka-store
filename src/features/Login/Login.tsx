import { Box } from '@mui/material';
import { useAuth } from './context/AuthProvider';
import LoginForm from './form/LoginForm';

interface LoginFormsValues {
  email: string;
  password: string;
}
function LoginUI() {
  const {
    state: { loading },
    actions: { signIn },
  } = useAuth();

  const handleLoginFormSubmit = (data: LoginFormsValues) => {
    try {
      signIn(data.email, data.password);
    }
    catch(error) {
      console.log(error);
    }
  };

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      mt={4}
    >
      <LoginForm loading={loading} onSubmit={handleLoginFormSubmit} />
    </Box>
  );
}

export default LoginUI;
