import React from 'react'
import { FaSearch } from 'react-icons/fa'

const Search = () => {
	return (
		<div className='hidden md:flex flex-1 relative'>
			<input type="text"  className="text-sm p-2 rounded-md outline-none border-none flex flex-1 text-slate-700" placeholder='Search'/>
			<FaSearch class={"absolute text-slate-400 top-[10px] ml-[685px]"}/>
		</div>
	)
}

export default Search
