import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

const SearchBox = (props) => {
    const { onChange } = props
    return <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <MagnifyingGlassIcon className="w-4" />
        </div>
        <input type="search" onChange={(e) => onChange(e.target.value)} id="default-search" className="block w-full p-2 pl-10 text-sm text-gray-900  bg-gray-50 outline-0" placeholder="Search Tables..." required />
    </div>
}

export default SearchBox
