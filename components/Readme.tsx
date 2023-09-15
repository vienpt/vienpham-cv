import Nav from "./Nav";
import {useState} from "react";

export default function Readme() {
  const [isShowNav, setIsShowNav] = useState<boolean>(false)

  function handleShowNav() {
    setIsShowNav((val) => !val)
  }

  return (
    <div className="cv-readme-hightlight">
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
        >
          <svg
            aria-hidden="true"
            height="16"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            data-view-component="true"
            onClick={() => setIsShowNav((val) => !val)}
          >
            <path d="M5.75 2.5h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5Zm0 5h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5Zm0 5h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5ZM2 14a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-6a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM2 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path>
          </svg>
        </button>

        <a id="readme" href="#readme" style={{ textTransform: 'uppercase' }}>
          readme
        </a>
      </h4>
      { isShowNav && <Nav onShowNav={handleShowNav}></Nav> }
    </div>
  )
}