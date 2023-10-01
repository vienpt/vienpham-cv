import {useState} from "react";
import OutsideClickHandler from 'react-outside-click-handler';

export default function Readme() {
  const [isShowNav, setIsShowNav] = useState(false)

  return (

      <div className="cv-readme-hightlight">
        <OutsideClickHandler  onOutsideClick={() => {
          setIsShowNav(false)
        }}>
          <h4
            style={{
                     display: 'flex',
                     gap: '5px',
                     justifyContent: 'start',
                     alignItems: 'center',
                     margin: '2px',
                     }}
          >
            <button
            type="button"
            aria-label="svg-readme"
            className="svg-octicon"
            style={{ backgroundColor: 'transparent', padding: '4px 4px 4px 4px'}}
            onClick={(e) => {
            e.stopPropagation()
            setIsShowNav(isShowNav => !isShowNav)
            }}
            >
            <svg
            aria-hidden="true"
            height="16"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            data-view-component="true"
            >
            <path d="M5.75 2.5h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5Zm0 5h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5Zm0 5h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5ZM2 14a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-6a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM2 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path>
            </svg>
            </button>

            <a id="readme" href="#readme" style={{ textTransform: 'uppercase' }}>
            readme
            </a>
            </h4>
          { isShowNav &&
            <BuggerNav onShowNav={(e: any) => {
              e.stopPropagation()
              setIsShowNav(isShowNav => !isShowNav)
            }}
            />
          }
        </OutsideClickHandler>
      </div>


  )
}

function BuggerNav({ onShowNav }: { onShowNav(e: any): void }) {
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
      gap: '10px',
      top: '45px',
      left: '10px'
    }}
    >
      <a href="#summary" onClick={onShowNav}>Summary</a>
      <a href="#journey" onClick={onShowNav}>Revelant experiences</a>
    </div>
  )
}