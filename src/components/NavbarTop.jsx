import { useState, useContext } from 'react'
import styled from 'styled-components'
import logo from '../images/Logos/LOGO1.png'
import ReactSwitch from 'react-switch'
import { ColorContext } from '../context/ColorContext'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';




function Navbar({ cate }) {

  Navbar.propTypes = {
    cate: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  const { theme, toggleTheme } = useContext(ColorContext)

  const [searchInput, setSearchInput] = useState('')

  const handleChange = (e) => {
    e.preventDefault()
    setSearchInput(e.target.value)
  }

  const handleSearch = (searchTerm) => {
    setSearchInput(searchTerm.toUpperCase())
    console.log('search ', searchTerm.toUpperCase())
  }

  return (
    <div>
      <NavbarWrap className="header-top">
        <SearchBarWrapper className="color">
          <SearchInput
            className="input"
            type="search"
            placeholder="SÖK"
            onChange={handleChange}
            value={searchInput}
          />
          <Link to={`/products/${searchInput}`}>
            <button
              className="button"
              onClick={() => handleSearch(searchInput)}
            >
              <ion-icon name="search-outline"></ion-icon>
            </button>
          </Link>
        </SearchBarWrapper>
        <Dropdown>
          <div className="dropdown">
            {cate
              .filter((item) => {
                const searchTerm = searchInput.toLowerCase()
                const categoryTitle = item.title.toLowerCase()

                return (
                  searchTerm &&
                  categoryTitle.startsWith(searchTerm) &&
                  categoryTitle !== searchTerm
                )
              })
              .slice(0, 10)
              .map((item) => (
                <div
                  onClick={() => handleSearch(item.title)}
                  className="dropdown-row"
                  key={item.title}
                >
                  {item.title}
                </div>
              ))}
          </div>
        </Dropdown>
        <NavbarLinkWrap>
          <NavbarTopHeader1 className="navbar-header">
            <Link to={'/'} className="link">
              <h3>GEMINI</h3>
            </Link>
          </NavbarTopHeader1>
          <NavLogo>
            <Link to={'/'} className="link">
              <img className="nav-logo" src={logo} alt="Logo of Moon" />
            </Link>
          </NavLogo>
          <Switch className="switch">
            <ReactSwitch
              onChange={toggleTheme}
              checked={theme === 'dark'}
              onColor="#9F97BF"
              offColor="#9F97BF"
              uncheckedIcon={'🌙'}
              checkedIcon={'🌞'}
              height={25}
              width={50}
            />
          </Switch>
        </NavbarLinkWrap>
      </NavbarWrap>
    </div>
  )
}

export default Navbar

const NavbarWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #353240;
  height: 3rem;
  width: 100%;
  margin: 0;
  padding: 0;
`
const SearchBarWrapper = styled.div`
  display: none;
  @media (min-width: 600px) {
    @import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.4/font/bootstrap-icons.css');
    display: flex;
    position: absolute;
    left: 20px;
    background-color: transparent;
    height: 25px;
    width: 30%;
    max-width: 200px;

    .button {
      margin-left: 10px;
      width: 40px;
      height: 25px;
      font-family: 'Darker Grotesque', sans-serif;
      border: none;
      border-radius: 3px;
      background-color: #6a6580;
      color: white;
      padding: 3px 0;
      cursor: pointer;
    }

    .input::-webkit-search-cancel-button {
      position: relative;
      right: 0px;
      -webkit-appearance: none;
      height: 15px;
      width: 15px;
      background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16"><path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/></svg>');
      background-size: 0.8rem 0.8rem;
      background-repeat: no-repeat;
      background-position: right center;
      color: black;
    }

    input:focus {
      outline-width: 1;
      outline-color: #9f97bf;
      outline-style: solid;
    }
  }
`

const SearchInput = styled.input`
  display: none;
  @media (min-width: 600px) {
    display: inline;
    position: left center;
    border: solid 0.5px;
    border-radius: 50px;
    border-color: #9f97bf;
    width: 100%;
    height: 1.5rem;
    padding-left: 0.6rem;
    padding-right: 0.6rem;
    padding-top: 0.6rem;
    padding-bottom: 0.7rem;
    font-size: 16px;
    font-family: 'Bootstrap-icons', 'Darker Grotesque', sans-serif;

    &::placeholder {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%239f97bf' class='bi bi-search-heart' viewBox='0 0 16 16'%3E%3Cpath d='M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018Z'%3E%3C/path%3E%3Cpath d='M13 6.5a6.471 6.471 0 0 1-1.258 3.844c.04.03.078.062.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1.007 1.007 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5ZM6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z'%3E%3C/path%3E%3C/svg%3E");
      background-size: 1rem;
      background-repeat: no-repeat;
      background-position: 0.5rem center;
      padding-left: 1.8rem;
      color: #9f97bf;
    }
  }
`
const NavbarLinkWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`
const Switch = styled.div`
  position: absolute;
  right: 20px;
`
const NavbarTopHeader1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #d4c9ff;
  .link {
    text-decoration: none;
  }
  &.navbar-header h3 {
    font-family: 'El Messiri', sans-serif;
    font-size: 1.5rem;
    padding: 0;
    margin: 0;
    color: #d4c9ff;
  }
`
const NavLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  width: 45px;
  margin-bottom: 5px;

  &.nav-logo {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 15px;
    width: 15px;
  }
`
const Dropdown = styled.div`

.dropdown {
  position: absolute;
      background-color: rgba(159, 151, 191, 0.70);
      display: flex;
      flex-direction: column;
      margin-left: 26px;
      margin-top: 15px;
    }
    .dropdown:empty {
      border: none;
    }
    .dropdown-row {
      cursor: pointer;
      text-align: center;
      margin: 2px 0;
      width: 130px;
    }
`
