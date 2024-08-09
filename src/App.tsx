import { useContext } from 'react';
import { Alert, Button, ThemeContext, Typography, useTheme } from './lib/src';

const App = () => {
  const theme = useTheme();
  const colorMode = useContext(ThemeContext);

  return (
    <div style={{ width: '80%', margin: '100px auto' }}>
      <div>
        <Typography variant="body2">Change theme:</Typography>
        <div>
          <Button onClick={colorMode.toggleColorMode} variant="contained">
            Theme: {theme.palette.mode === 'dark' ? 'dark' : 'light'}
          </Button>
        </div>
      </div>

      <div>
        <Alert sx={{ mt: 4 }}>This is success alert</Alert>
        <Alert sx={{ mt: 4 }} severity="error">
          This is Error alert
        </Alert>
      </div>
    </div>
  );
};

export default App;
