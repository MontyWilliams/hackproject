import React from 'react'
import { Link } from 'react-scroll'

const Header = () => {

  const links = [
    {
        id: 1,
        link: 'home'
    },
    {
        id: 2,
        link: 'about'
    },
    {
        id: 3,
        link: 'portfolio'
    },
    {
        id: 4,
        link: 'experience'
    },
    {
        id: 5,
        link: 'contact'
    }
]

  return (
    <div className="flex justify-between items-center w-full h-20 fixed bg-blue-300 text-white">
        <ul className="flex flex-row " >
          {links.map(({link, id}) => (
            <li  key={id} className=" px-4 cursor-pointer capitalize hover:scale-125 duration-200">
              <Link to={link} smooth duration={500}>{link}</Link>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default Header
