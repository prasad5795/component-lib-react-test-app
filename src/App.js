import { Badge, Button, useTheme } from 'blitzy-ui';

function App() {
  const { theme, changeTheme, themes } = useTheme();

  return (
    <div className="App" style={{ padding: '2rem' }}>
      <h1>Theme Demo</h1>
      <p>Current theme: {theme}</p>
      
      <div style={{ marginBottom: '2rem' }}>
        <h3>Available Themes:</h3>
        {themes.map((t) => (
          <Button 
            key={t.name}
            variant={theme === t.name ? 'primary' : 'secondary'}
            onClick={() => changeTheme(t.name)}
            style={{ marginRight: '0.5rem', marginBottom: '0.5rem' }}
          >
            {t.name}
          </Button>
        ))}
      </div>

      <div>
        <h3>Component Examples:</h3>
        <Button variant='primary'>Primary Button</Button>
        <Button variant='secondary'>Secondary Button</Button>
        <Button variant='accent'>Accent Button</Button>
        <br/><br/>
        <Badge variant='primary'>Primary Badge</Badge>
        <Badge variant='secondary'>Secondary Badge</Badge>
        <Badge variant='info'>Info Badge</Badge>
        <Badge variant='success'>Success Badge</Badge>
        <Badge variant='warning'>Warning Badge</Badge>
        <Badge variant='error'>Error Badge</Badge>
      </div>
    </div>
  );
}

export default App;
