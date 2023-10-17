<header className="relative z-50">
<nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
  <div className="flex lg:flex-1">
    <a href="/" className="-m-1.5 p-1.5">
      <span className="sr-only">Deltasoft</span>
      <img className="h-8 w-auto" src="https://i.ibb.co/BBWm0p3/Frame-1.png" alt="" />
    </a>
  </div>
  <div className="flex lg:hidden">
    <button onclick="toggleMenuVisibility()" type="button"
      className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
      <span className="sr-only">Open main menu</span>
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    </button>
  </div>
  <div className="lg:flex hidden items-center lg:gap-x-12">
    <div className="relative dropdown-block">
      <button type="button" className="flex items-center h-10 gap-x-1 text-sm font-semibold leading-6 text-gray-900"
        aria-expanded="false">
        Product
        <svg className="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clip-rule="evenodd" />
        </svg>
      </button>
      <div
        className="dropdown-container hidden absolute -left-8 top-7 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
        <div className="p-4">
          <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
            <div
              className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
              <svg className="h-6 w-6 text-gray-600 group-hover:text-blue-700" fill="none" viewBox="0 0 24 24"
                stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
              </svg>
            </div>
            <div className="flex-auto">
              <a href="#" className="block font-semibold text-gray-900">
                Analytics
                <span className="absolute inset-0"></span>
              </a>
              <p className="mt-1 text-gray-600">Get a better understanding of your traffic</p>
            </div>
          </div>
          <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
            <div
              className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
              <svg className="h-6 w-6 text-gray-600 group-hover:text-blue-700" fill="none" viewBox="0 0 24 24"
                stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
              </svg>
            </div>
            <div className="flex-auto">
              <a href="#" className="block font-semibold text-gray-900">
                Engagement
                <span className="absolute inset-0"></span>
              </a>
              <p className="mt-1 text-gray-600">Speak directly to your customers</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <a href="/blog" className="text-sm font-semibold leading-6 text-gray-900">Blog</a>
    <a href="/company" className="text-sm font-semibold leading-6 text-gray-900">Company</a>
    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Join Us</a>
  </div>
  <div className="hidden lg:flex lg:flex-1 lg:justify-end">

  </div>
</nav>
<script>
  function toggleMenuVisibility() {
    document.getElementById("mobileMenu").classNameList.toggle("hidden");
  }
</script>
<div id="mobileMenu" className="lg:hidden hidden" role="dialog" aria-modal="true">
  <div className="fixed inset-0 z-10"></div>
  <div
    className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
    <div className="flex items-center justify-between">
      <a href="/" className="-m-1.5 p-1.5">
        <span className="sr-only">Deltasoft</span>
        <img className="h-8 w-auto" src="https://i.ibb.co/BBWm0p3/Frame-1.png" alt="">
      </a>
      <button onclick="toggleMenuVisibility()" type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700">
        <span className="sr-only">Close menu</span>
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
    <div className="mt-6 flow-root">
      <div className="-my-6 divide-y divide-gray-500/10">
        <div className="space-y-2 py-6">
          <div className="-mx-3">
            <script>
              function toggleMenu() {
                document.getElementById("menuIcon").classNameList.toggle("rotate-180");
                document.getElementById("menu").classNameList.toggle("hidden");
              }
            </script>
            <button onclick="toggleMenu()" type="button"
              className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              aria-controls="disclosure-1" aria-expanded="false">
              Product
              <svg id="menuIcon" className="rotate-180 h-5 w-5 flex-none" viewBox="0 0 20 20" fill="currentColor"
                aria-hidden="true">
                <path fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd" />
              </svg>
            </button>
            <!-- 'Product' sub-menu, show/hide based on menu state. -->
            <div id="menu" className="hidden mt-2 space-y-2" id="disclosure-1">
              <a href="#"
                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">Analytics</a>
              <a href="#"
                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">Engagement</a>
            </div>
          </div>
          <a href="/blog"
            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Blog</a>
          <a href="/company"
            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Company</a>
          <a href="#"
            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Join
            Us</a>
        </div>
      </div>
    </div>
  </div>
</div>
</header>