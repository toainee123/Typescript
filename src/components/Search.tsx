import React from 'react'
import {NavLink} from 'react-router-dom'
type Props = {}

function Search({}: Props) {
  return (
    <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  )
}

export default Search