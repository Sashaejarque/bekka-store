import { Box } from '@mui/material';
import { useAuth } from './context/AuthProvider';
import LoginForm from './form/LoginForm';

function LoginUI() {
  const {
    state: { loading },
  } = useAuth();

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
      <LoginForm loading={loading} />
    </Box>
  );
}

export default LoginUI;
