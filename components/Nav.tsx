
interface NavProps {
  onShowNav: () => void;
}

export default function Nav({ onShowNav }: NavProps) {
  return (
    <div className="nav" style={{
      position: 'absolute',
      backgroundColor: 'color(srgb 0.1412 0.1412 0.1412)',
      minWidth: '280px',
      display: 'flex',
      flex: '0 1 auto',
      flexDirection: 'column',
      padding: '10px',
      border: '1px solid var(--blue-color)',
      borderRadius: '5px',
      gap: '10px'
    }}
    >
      <a href="#summary" onClick={onShowNav}>Summary</a>
      <a href="#journey" onClick={onShowNav}>Revelant experiences</a>
    </div>
  )
}