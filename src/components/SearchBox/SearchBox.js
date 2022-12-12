import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

const SearchBox = () => {
    return <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <MagnifyingGlassIcon className="w-4" />
        </div>
        <input type="search" id="default-search" class="block w-full p-2 pl-10 text-sm text-gray-900  bg-gray-50 outline-0" placeholder="Search Mockups, Logos..." required />
    </div>
}

export default SearchBox
