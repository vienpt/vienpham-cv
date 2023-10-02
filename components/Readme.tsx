import { useState } from 'react'
import { NavItems } from "../data.ts";
import OutsideClickHandler from 'react-outside-click-handler'
import styled from 'styled-components'

const StyleReadme = styled.div`
  display: flex;
  padding: 8px 10px;
  border-top-left-radius: var(--border-radius);
  border-top-right-radius: var(--border-radius);
  border-bottom: 1px solid;
  border-color: var(--gray-6);
  position: sticky;
  top: 0;
  background-color: var(--surface-2);
  
`

const StyleTitleNav = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  
  h6 > a {
    color: var(--text-2);
    text-transform: uppercase;
  }
  
  button {
    background-color: transparent;
    border-radius: var(--border-radius);
    
    &:hover, &:focus {
      background-color: var(--svg-hover) !important;
    }

    svg {
      fill: var(--text-2);
    }
  }
`

export default function Readme() {
  const [isShowNav, setIsShowNav] = useState(false)

  return (

      <StyleReadme>
        <OutsideClickHandler onOutsideClick={() => {
          setIsShowNav(false)
        }}>
          <StyleTitleNav>
            <button
              type="button"
              aria-label="svg-readme"
              className="svg-octicon"
              style={{
                padding: '6px'
              }}
              onClick={(e) => {
                e.stopPropagation()
                setIsShowNav(isShowNav => !isShowNav)
              }}
            >
              <svg
                aria-hidden="true"
                height="18"
                viewBox="0 0 18 18"
                version="1.1"
                width="18"
                data-view-component="true"
              >
                <path d="M5.75 2.5h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5Zm0 5h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5Zm0 5h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5ZM2 14a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-6a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM2 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path>
              </svg>
            </button>

            <h6>
              <a
                href="#readme"
                aria-label="readme"
                onClick={(e) => {
                  e.stopPropagation()
                  setIsShowNav(false)
                }}
              >
                readme
              </a>
            </h6>
          </StyleTitleNav>

          { isShowNav &&
            <BuggerNav onShowNav={() => {
              setIsShowNav(isShowNav => !isShowNav)
            }}
            />
          }
        </OutsideClickHandler>
      </StyleReadme>
  )
}

const StyleBuggerNav = styled.nav`
  position: absolute;
  background-color: var(--surface-1);
  min-width: 320px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px 15px;
  top: 45px;
  border-color: var(--gray-8);
  border-radius: var(--border-radius);
  animation-name: Select-nav;
  
  a {
    color: var(--text-1);
    &:hover {
      background-color: var(--blue-bg);
    }

    &.active-nav {
      background-color: var(--blue-bg);
    }
  }
`

function BuggerNav({ onShowNav }: { onShowNav(): void }) {
  const [active, setActive] = useState("#")

  return (
    <StyleBuggerNav className="rad-shadow">
      {NavItems.map((item) =>
        <a
          key={item}
          className={active === item ? 'active-nav' : ''}
          href={`#${item}`}
          onClick={() => {
            setActive(item)
            onShowNav()
          }}
        >
          {item}
        </a>
      )}
    </StyleBuggerNav>
  )
}