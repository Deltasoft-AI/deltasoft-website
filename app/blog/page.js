const contentful = require("contentful");

const client = contentful.createClient({
    space: "nhrelrjfi7i2",
    accessToken: "T5tWHsOH_igUsfddR5PDejVS-SLwqmm2L8RoENr1PZ8",
  });

  client.getEntries().then(function (entries) {
    console.log(entries.items);
    // log the title for all the entries that have it
    entries.items.forEach(function (entry) {
      if (entry.fields.pageTitle) {
        console.log(entry.fields.pageTitle);
      }
    });
  });

export default function Blog() {
    return (
        <section>
            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                    <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#2563eb] to-[#2563eb] opacity-40 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
                </div>
                <div className="mx-auto max-w-2xl lg:max-w-5xl py-8 sm:py-8 lg:py-8">
                    <h1 className="text-4xl max-w-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">Empowering Developers, One Article at a Time</h1>
                    <p className="mt-6 text-lg max-w-2xl leading-8 text-gray-600">Explore empowering articles that ignite developers' passion and enhance their coding journey, all in one place.</p>
                </div>
                <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
                    <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr v opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
                </div>
            </div>

            <div className="relative isolate px-6 pt-4 lg:px-8">
                <div className="flex flex-wrap gap-8 mx-auto max-w-2xl lg:flex-row flex-col lg:max-w-5xl py-8 sm:py-8 lg:py-8">
                    <a href="/blog/empowering-developers-in-2023-key-technologies-and-trends.html" className="flex-1">
                        <img className="rounded-xl shadow-2xl object-cover w-full h-52 sm:h-80" src="https://images.unsplash.com/photo-1525824617522-ca036119a052?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" />
                    </a>
                    <div className="flex-1 flex justify-center flex-col">
                        <div className="flex justify-center flex-col gap-2">
                            <header>
                                <div className="mb-3">
                                    <ul className="flex flex-wrap text-xs font-medium -m-1">

                                        <li className="m-1">
                                            <a className="rounded-full bg-blue-600 hover:bg-blue-700 px-3 py-1.5 font-medium text-gray-100" href="">Technology</a>
                                        </li>

                                        <li className="m-1">
                                            <a className="rounded-full bg-blue-600 hover:bg-blue-700 px-3 py-1.5 font-medium text-gray-100" href="">Developers</a>
                                        </li>

                                    </ul>
                                </div>
                                <h3 className="h3 text-2xl lg:text-3xl mb-2">
                                    <a href="/blog/empowering-developers-in-2023-key-technologies-and-trends.html" className="hover:text-gray-600 text-gray-900 transition duration-150 ease-in-out">Empowering Developers in 2023: Key Technologies and Trends</a>
                                </h3>
                            </header>
                            <p className="text-md text-gray-800">From AI-powered code assistants to low-code platforms and serverless computing, this article unveils the empowering innovations that will redefine how developers create cutting-edge solutions and streamline their workflows.</p>
                            <footer className="flex items-center mt-4">
                                <a>
                                    <img className="rounded-full flex-shrink-0 mr-4 shadow-2xl" src="/assets/JSmanLogo.png" width="50" height="50" alt="Harm Aarts" />
                                </a>
                                <div className="text-md">
                                    <a className="font-medium text-gray-900">JSman225</a>
                                    <span className="text-gray-700"> - </span>
                                    <span className="text-gray-500">July 20, 2023</span>
                                </div>
                            </footer>
                        </div>
                    </div>
                </div>
            </div>




            <div className="bg-white pb-24">
                <div className="mx-auto max-w-5xl px-6 lg:px-0">
                    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        <article className="flex max-w-xl flex-col items-start justify-between">
                            <a href="/blog/deltasoft-ai-elevating-software-development-efficiency.html">
                                <img className="shadow-xl rounded-xl object-cover w-full h-52" src="https://i.ibb.co/2NT6JHd/image-12.png" />
                            </a>
                            <br />
                            <div className="flex items-center gap-x-4 text-xs">
                                <time dateTime="2020-03-16" className="text-gray-500">Mar 16, 2020</time>
                                <a href="#" className="relative z-10 rounded-full bg-blue-600 hover:bg-blue-700 px-3 py-1.5 font-medium text-gray-100">Deltasoft AI</a>
                                <a href="#" className="relative z-10 rounded-full bg-blue-600 hover:bg-blue-700 px-3 py-1.5 font-medium text-gray-100">Developers</a>
                            </div>
                            <div className="group relative">
                                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                    <a href="/blog/deltasoft-ai-elevating-software-development-efficiency.html">
                                        <span className="absolute inset-0"></span>
                                        Deltasoft AI: Elevating Software Development Efficiency
                                    </a>
                                </h3>
                                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Discover how Deltasoft AI streamlines the software development process. From automated code reviews to intelligent bug detection, see how this AI-powered tool enhances efficiency and productivity for programmers.</p>
                            </div>
                            <div className="relative mt-8 flex items-center gap-x-4">
                                <img src="/assets/JSmanLogo.png" alt="" className="h-10 w-10 rounded-full bg-gray-50 shadow-2xl" />
                                <div className="text-sm leading-5">
                                    <p className="font-semibold text-gray-900">
                                        <a href="#">
                                            <span className="absolute inset-0"></span>
                                            JSman225
                                        </a>
                                    </p>
                                    <p className="text-gray-600">Founder</p>
                                </div>
                            </div>
                        </article>
                        <article className="flex max-w-xl flex-col items-start justify-between">
                            <img className="shadow-xl rounded-xl object-cover w-full h-52" src="https://visualstudiomagazine.com/-/media/ECG/redmondmag/Images/IntroImages2017/0917red_F1a_TeamBots.jpg" />
                            <br />
                            <div className="flex items-center gap-x-4 text-xs">
                                <time dateTime="2020-03-16" className="text-gray-500">Mar 16, 2020</time>
                                <a href="#" className="relative z-10 rounded-full bg-blue-600 hover:bg-blue-700 px-3 py-1.5 font-medium text-gray-100">AI</a>
                                <a href="#" className="relative z-10 rounded-full bg-blue-600 hover:bg-blue-700 px-3 py-1.5 font-medium text-gray-100">Programming</a>
                            </div>
                            <div className="group relative">
                                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                    <a href="#">
                                        <span className="absolute inset-0"></span>
                                        The Future of Programming: Embracing AI Assistants
                                    </a>
                                </h3>
                                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Step into the era of AI-powered programming assistants. Explore the benefits of using AI to assist programmers in tasks like code generation, debugging, and code completion, revolutionizing the way we write code.</p>
                            </div>
                            <div className="relative mt-8 flex items-center gap-x-4">
                                <img src="/assets/JSmanLogo.png" alt="" className="h-10 w-10 rounded-full bg-gray-50 shadow-2xl" />
                                <div className="text-sm leading-5">
                                    <p className="font-semibold text-gray-900">
                                        <a href="#">
                                            <span className="absolute inset-0"></span>
                                            JSman225
                                        </a>
                                    </p>
                                    <p className="text-gray-600">Founder</p>
                                </div>
                            </div>
                        </article>
                        <article className="flex max-w-xl flex-col items-start justify-between">
                            <img className="shadow-xl rounded-xl object-cover w-full h-52" src="https://www.itprotoday.com/sites/itprotoday.com/files/styles/article_featured_retina/public/Padlock_Circuit_Board.jpg?itok=gp3I6l8I" />
                            <br />
                            <div className="flex items-center gap-x-4 text-xs">
                                <time dateTime="2020-03-16" className="text-gray-500">Mar 16, 2020</time>
                                <a href="#" className="relative z-10 rounded-full bg-blue-600 hover:bg-blue-700 px-3 py-1.5 font-medium text-gray-100">Developers</a>
                                <a href="#" className="relative z-10 rounded-full bg-blue-600 hover:bg-blue-700 px-3 py-1.5 font-medium text-gray-100">Cybersecurity</a>
                            </div>
                            <div className="group relative">
                                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                    <a href="#">
                                        <span className="absolute inset-0"></span>
                                        Cybersecurity for Developers: Best Practices and Tools
                                    </a>
                                </h3>
                                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">A comprehensive guide to cybersecurity essentials for developers. Learn about secure coding practices, essential security tools, and how to integrate security measures into the software development lifecycle.</p>
                            </div>
                            <div className="relative mt-8 flex items-center gap-x-4">
                                <img src="/assets/JSmanLogo.png" alt="" className="h-10 w-10 rounded-full bg-gray-50 shadow-2xl" />
                                <div className="text-sm leading-5">
                                    <p className="font-semibold text-gray-900">
                                        <a href="#">
                                            <span className="absolute inset-0"></span>
                                            JSman225
                                        </a>
                                    </p>
                                    <p className="text-gray-600">Founder</p>
                                </div>
                            </div>
                        </article>
                        <article className="flex max-w-xl flex-col items-start justify-between">
                            <img className="shadow-xl rounded-xl object-cover w-full h-52" src="https://cdn.dribbble.com/users/2920041/screenshots/15469045/media/8ddd8485720aafff1fb1249f0ed388f3.png?resize=400x0" />
                            <br />
                            <div className="flex items-center gap-x-4 text-xs">
                                <time dateTime="2020-03-16" className="text-gray-500">Mar 16, 2020</time>
                                <a href="#" className="relative z-10 rounded-full bg-blue-600 hover:bg-blue-700 px-3 py-1.5 font-medium text-gray-100">Technology</a>
                                <a href="#" className="relative z-10 rounded-full bg-blue-600 hover:bg-blue-700 px-3 py-1.5 font-medium text-gray-100">Developers</a>
                            </div>
                            <div className="group relative">
                                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                    <a href="#">
                                        <span className="absolute inset-0"></span>
                                        Advancements in Cloud Computing: Empowering Developers
                                    </a>
                                </h3>
                                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Stay ahead in the cloud era. Delve into the latest advancements in cloud computing, including serverless architecture, containerization, and cloud-native technologies, and learn how developers can leverage these innovations.</p>
                            </div>
                            <div className="relative mt-8 flex items-center gap-x-4">
                                <img src="/assets/JSmanLogo.png" alt="" className="h-10 w-10 rounded-full bg-gray-50 shadow-2xl" />
                                <div className="text-sm leading-5">
                                    <p className="font-semibold text-gray-900">
                                        <a href="#">
                                            <span className="absolute inset-0"></span>
                                            JSman225
                                        </a>
                                    </p>
                                    <p className="text-gray-600">Founder</p>
                                </div>
                            </div>
                        </article>
                        <article className="flex max-w-xl flex-col items-start justify-between">
                            <img className="shadow-xl rounded-xl object-cover w-full h-52" src="https://www.builder.ai/images/low-code-development.png" />
                            <br />
                            <div className="flex items-center gap-x-4 text-xs">
                                <time dateTime="2020-03-16" className="text-gray-500">Mar 16, 2020</time>
                                <a href="#" className="relative z-10 rounded-full bg-blue-600 hover:bg-blue-700 px-3 py-1.5 font-medium text-gray-100">Software Development</a>
                            </div>
                            <div className="group relative">
                                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                    <a href="#">
                                        <span className="absolute inset-0"></span>
                                        The Rise of Low-Code Development: A Developer's Perspective
                                    </a>
                                </h3>
                                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Explore the low-code revolution and its impact on traditional software development. Learn how low-code platforms can accelerate development and empower developers to build applications with speed and efficiency.</p>
                            </div>
                            <div className="relative mt-8 flex items-center gap-x-4">
                                <img src="/assets/JSmanLogo.png" alt="" className="h-10 w-10 rounded-full bg-gray-50 shadow-2xl" />
                                <div className="text-sm leading-5">
                                    <p className="font-semibold text-gray-900">
                                        <a href="#">
                                            <span className="absolute inset-0"></span>
                                            JSman225
                                        </a>
                                    </p>
                                    <p className="text-gray-600">Founder</p>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>

        </section >
    )
}