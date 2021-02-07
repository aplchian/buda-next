import React from 'react'


export default () => {
    return (


<>
    <header className="bg-white shadow-sm lg:static lg:overflow-y-visible">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative flex justify-between xl:grid xl:grid-cols-12 lg:gap-8">
                <div className="flex md:absolute md:left-0 md:inset-y-0 lg:static xl:col-span-2">
                    <div className="flex-shrink-0 flex items-center">
                        <a href="#">
                            <img className="block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600" alt="Workflow" />
                        </a>
                    </div>
                </div>
                <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
                    <div className="flex items-center px-6 py-4 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0">
                        <div className="w-full">
                            <label htmlFor="search" className="sr-only">Search</label>
                            <div className="relative">
                                <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                                    {/* Heroicon name: solid/search */}
                                    <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <input id="search" name="search" className="block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Search" type="search" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center md:absolute md:right-0 md:inset-y-0 lg:hidden">
                    {/* Mobile menu button */}
                    <button type="button" className="-mx-2 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
                        <span className="sr-only">Open menu</span>
                        {/* Icon when menu is closed. */}
                        {/*
      Heroicon name: outline/menu

      Menu open: "hidden", Menu closed: "block"
    */}
                        <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        {/* Icon when menu is open. */}
                        {/*
      Heroicon name: outline/x

      Menu open: "block", Menu closed: "hidden"
    */}
                        <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4">
                    {/*<a href="#" className="ml-5 flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">*/}
                    {/*    <span className="sr-only">View notifications</span>*/}
                    {/*    /!* Heroicon name: outline/bell *!/*/}
                    {/*    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">*/}
                    {/*        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />*/}
                    {/*    </svg>*/}
                    {/*</a>*/}
                    {/* Profile dropdown */}
                    <div className="flex-shrink-0 relative ml-5">
                        <div>
                            <button type="button" className="bg-white rounded-full flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="user-menu" aria-haspopup="true">
                                <span className="sr-only">Open user menu</span>
                                <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                            </button>
                        </div>
                        {/*
      Profile dropdown panel, show/hide based on dropdown state.

      Entering: "transition ease-out duration-100"
        From: "transform opacity-0 scale-95"
        To: "transform opacity-100 scale-100"
      Leaving: "transition ease-in duration-75"
        From: "transform opacity-100 scale-100"
        To: "transform opacity-0 scale-95"
    */}
                        <div className=" hidden origin-top-right absolute z-10 right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                            <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Your Profile</a>
                            <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>
                            <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</a>
                        </div>
                    </div>
                    {/*<a href="#" className="ml-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">*/}
                    {/*    Save*/}
                    {/*</a>*/}
                </div>
            </div>
        </div>
        {/*
    Mobile menu, toggle classes based on menu state.

    Menu open: "block", Menu closed: "hidden"
  */}
        <nav className="hidden lg:hidden" aria-label="Global">
            <div className="max-w-3xl mx-auto px-2 pt-2 pb-3 space-y-1 sm:px-4">
                <a href="#" aria-current="page" className="bg-gray-100 text-gray-900 block rounded-md py-2 px-3 text-base font-medium text-gray-900">Dashboard</a>
                <a href="#" aria-current="false" className="hover:bg-gray-50 block rounded-md py-2 px-3 text-base font-medium text-gray-900">Calendar</a>
                <a href="#" aria-current="false" className="hover:bg-gray-50 block rounded-md py-2 px-3 text-base font-medium text-gray-900">Teams</a>
                <a href="#" aria-current="false" className="hover:bg-gray-50 block rounded-md py-2 px-3 text-base font-medium text-gray-900">Directory</a>
            </div>
            <div className="border-t border-gray-200 pt-4 pb-3">
                <div className="max-w-3xl mx-auto px-4 flex items-center sm:px-6">
                    <div className="flex-shrink-0">
                        <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                    </div>
                    <div className="ml-3">
                        <div className="text-base font-medium text-gray-800">Chelsea Hagon</div>
                        <div className="text-sm font-medium text-gray-500">chelseahagon@example.com</div>
                    </div>
                    {/*<button type="button" className="ml-auto flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">*/}
                    {/*    <span className="sr-only">View notifications</span>*/}
                    {/*    /!* Heroicon name: outline/bell *!/*/}
                    {/*    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">*/}
                    {/*        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />*/}
                    {/*    </svg>*/}
                    {/*</button>*/}
                </div>
                <div className="mt-3 max-w-3xl mx-auto px-2 space-y-1 sm:px-4">
                    <a href="#" className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900">Your Profile</a>
                    <a href="#" className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900">Settings</a>
                    <a href="#" className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900">Sign out</a>
                </div>
            </div>
        </nav>
    </header>




    <div className="lg:flex lg:items-center lg:justify-between max-w-7xl container mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                bdr:I4CZ75258
            </h2>
            {/*<div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">*/}
            {/*    <div className="mt-2 flex items-center text-sm text-gray-500">*/}
            {/*        /!* Heroicon name: solid/briefcase *!/*/}
            {/*        <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">*/}
            {/*            <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />*/}
            {/*            <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />*/}
            {/*        </svg>*/}
            {/*        Full-time*/}
            {/*    </div>*/}
            {/*    <div className="mt-2 flex items-center text-sm text-gray-500">*/}
            {/*        /!* Heroicon name: solid/location-marker *!/*/}
            {/*        <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">*/}
            {/*            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />*/}
            {/*        </svg>*/}
            {/*        Remote*/}
            {/*    </div>*/}
            {/*    <div className="mt-2 flex items-center text-sm text-gray-500">*/}
            {/*        /!* Heroicon name: solid/currency-dollar *!/*/}
            {/*        <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">*/}
            {/*            <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />*/}
            {/*            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />*/}
            {/*        </svg>*/}
            {/*        $120k – $140k*/}
            {/*    </div>*/}
            {/*    <div className="mt-2 flex items-center text-sm text-gray-500">*/}
            {/*        /!* Heroicon name: solid/calendar *!/*/}
            {/*        <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">*/}
            {/*            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />*/}
            {/*        </svg>*/}
            {/*        Closing on January 9, 2020*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
        <div className="mt-5 flex lg:mt-0 lg:ml-4">
    <span className="hidden sm:block">
      <button type="button" className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        {/* Heroicon name: solid/pencil */}
          <svg className="-ml-1 mr-2 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
        </svg>
        Edit
      </button>
    </span>
            <span className="hidden sm:block ml-3">
      <button type="button" className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        {/* Heroicon name: solid/link */}
          <svg className="-ml-1 mr-2 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
        </svg>
        View
      </button>
    </span>
            <span className="sm:ml-3">
      <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        {/* Heroicon name: solid/check */}
          <svg className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        Save
      </button>
    </span>
            {/* Dropdown */}
            <span className="ml-3 relative sm:hidden">
      <button type="button" className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="mobile-menu" aria-haspopup="true">
        More
          {/* Heroicon name: solid/chevron-down */}
          <svg className="-mr-1 ml-2 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
                {/*
  Dropdown panel, show/hide based on dropdown state.

  Entering: "transition ease-out duration-200"
    From: "transform opacity-0 scale-95"
    To: "transform opacity-100 scale-100"
  Leaving: "transition ease-in duration-75"
    From: "transform opacity-100 scale-100"
    To: "transform opacity-0 scale-95"
*/}
                <div className="origin-top-right absolute right-0 mt-2 -mr-1 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5" aria-labelledby="mobile-menu" role="menu">
        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Edit</a>
        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">View</a>
      </div>
    </span>
        </div>
    </div>


    <div className="relative pb-5 border-b border-gray-200 sm:pb-0 container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mt-4">
            {/* Dropdown menu on small screens */}
            <div className="sm:hidden">
                <label htmlFor="selected-tab" className="sr-only">Select a tab</label>
                <select id="selected-tab" name="selected-tab" className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                    <option selected>Pages</option>
                    <option>Settings</option>
                </select>
            </div>
            {/* Tabs at small breakpoint and up */}
            <div className="hidden sm:block">
                <nav className="-mb-px flex space-x-8">
                    {/* Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" */}
                    <a href="#" className="border-indigo-500 text-indigo-600 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm" aria-current="page">
                        Pages
                    </a>
                    <a href="#" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm">
                        Settings
                    </a>
                </nav>
            </div>
        </div>
    </div>


</>

)
}