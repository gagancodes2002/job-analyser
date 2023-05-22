const NavBar = () => {
    return (
        <nav className="sticky top-0 z-20 sm:px-6 lg:px-8 bg-[#FFFFFF] shadow-lg">
            <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex item-center sm:hidden"></div>
                <div className="flex flex-1 items-center justify-center sm:item-stretch sm:justify-start">
                    <div className="flex justify-center align-middle">
                        <img className="block h-8 w-auto"
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                            alt="Your Company"
                        >
                        </img>
                    </div>
                    <div className="hidden sm:ml-6 sm:block">
                        <div className="flex space-x-5">
                            <a
                                href="/dashboard"
                                className=" rounder p-2 text-sm font-medium text-[#3F9A73]"
                            >
                                Dashboard
                            </a>
                            <a
                                href="/settings"
                                className=" text-gray-700 rounder p-2 text-sm font-medium"
                            >
                                Settings
                            </a>
                            <a
                                href="/about"
                                className="text-gray-700 rounder p-2 text-sm font-medium"
                            >
                                About
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;