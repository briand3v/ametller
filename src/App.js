import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import RootNavigator from './routers/rootNavigator.router';
import Navbar from './NavBar/components/NavBar';
import { useThemeApp } from './hooks/ThemeApp/useThemeApp';

function App() {
  const { themeColor} = useThemeApp();

  const themeMui = createMuiTheme({
    palette: {
      primary: {
        main: themeColor === 'light' ? '#fff' : '#1d2533'
      },
      secondary: {
        main: themeColor === 'light' ? '#fff' : '#1d2533'
      },
      background: {
        default: themeColor === 'light' ? '#fff' : '#1d2533'
      },
      text: {
        primary: themeColor === 'light' ? '#1d2533' : '#fff',
        secondary: themeColor === 'light' ? '#3b4352' : '#c1c1c1'
      }
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={themeMui}>
        <Navbar />
        <RootNavigator />
      </ThemeProvider>
    </div>
  );
}

export default App;
