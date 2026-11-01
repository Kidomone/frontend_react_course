
type HeaderProps = { 
  handleToggleTheme: () => void,
  theme: string
}
export default function Header({ handleToggleTheme, theme }: HeaderProps){
  return(
    <header className={`header-${theme}`}>
      <h2>Task tracker</h2>
      <button onClick={handleToggleTheme}>{theme === 'light' ?  '☾' : '☀'}</button>
    </header>

  )
}