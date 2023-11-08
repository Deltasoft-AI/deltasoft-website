const contentful = require("contentful");

const client = contentful.createClient({
    space: "nhrelrjfi7i2",
    accessToken: "T5tWHsOH_igUsfddR5PDejVS-SLwqmm2L8RoENr1PZ8",
});
let articles = [];

function formatDate(inputDate) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    // Step 1: Parse the input date
    const parts = inputDate.split('-');
    const year = parts[0];
    const month = parseInt(parts[1], 10);
    const day = parseInt(parts[2], 10);
  
    // Create a new Date object
    const date = new Date(year, month - 1, day);
  
    // Step 2: Format the Date object
    const formattedDate = months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
  
    return formattedDate;
  }

export default function BlogArticle({ params }) {
    client.getEntries({content_type: 'pageBlogPost', 'fields.slug[in]': params.slug}).then(function (entries) {
        //console.log(entries.items);
        // log the title for all the entries that have it
        entries.items.forEach(function (entry) {
            if (entry.fields.featuredImage) {
                console.log(entry.fields);
                articles.push(entry.fields);
            }
    
        });
    });
    return (
        <>
        {articles.map((article) => (
        <article key={article.seoFields.sys.id}>
            
        <div class="m-auto w-full max-w-[1350px] px-8">
            <div class="mb-12 mt-12 flex flex-col items-center justify-center gap-x-4 md:mb-24 xl:flex-row xl:items-start">
                <div class="relative w-full xl:w-2/3">
                    <div class="relative mx-auto overflow-hidden rounded-lg md:w-2/3 xl:w-full shadow-2xl"><img src="https://images.unsplash.com/photo-1525824617522-ca036119a052?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="shopify online shopping popups" class="w-full" />
                        <div class="absolute bottom-5 left-5 flex gap-x-2 rounded-2xl bg-white px-3 py-1 font-biennale text-4xs leading-snug text-navy-900 sm:gap-x-4 sm:text-3xs md:gap-x-5 md:px-6 md:py-3 md:text-mini xl:bottom-16 xl:left-16"><img class="h-[5px] w-[5px] self-center sm:h-3 sm:w-3" src="https://www.personizely.net/_nuxt/time.b8409b46.svg" alt="" /><span>July 20, 2023</span></div>
                    </div>
                    <div class="mt-16 md:px-28">
                        <div class="post-text">
                            <div><a href="#" class="relative z-10 rounded-full bg-blue-600 hover:bg-blue-700 px-3 py-1.5 font-medium text-gray-100">
                                Developers
                            </a></div>
                            <h1 id="Introduction" class="text-[2.75rem] leading-[3.575rem] mb-[2rem] mt-[1.25rem]">
                                Empowering Developers in 2023: Key Technologies and Trends
                            </h1>
                            <p class="text-base leading-[1.75rem]">
                                In the ever-evolving world of software development, the year 2023 promises exciting advancements that will empower developers and shape the future of programming. From cutting-edge technologies to transformative trends, this article explores the key elements that will play a significant role in revolutionizing the way developers work and create software solutions.
                            </p>
                            <h2 id="1" class="text-[2rem] leading-[2.5rem] mb-[1rem] mt-[2rem]" id="title403">
                                1. AI-Powered Code Assistants
                            </h2>
                                <p class="text-base leading-[1.75rem]">
                                    One of the most impactful advancements in software development in recent years has been the rise of AI-powered code assistants. These intelligent tools, equipped with machine learning capabilities, have gained immense popularity among developers. A prominent example of such a code assistant is Microsoft's IntelliCode, which is integrated into Visual Studio Code. IntelliCode uses AI to analyze code patterns from millions of repositories on GitHub, providing context-aware code suggestions and predicting the next line of code in real-time. Developers benefit from increased productivity, reduced code errors, and faster development cycles thanks to these AI-driven code assistants.
                                </p>
                                <p class="text-base leading-[1.75rem]">
                                    <img class="my-8 rounded-2xl shadow-2xl" src="https://visualstudio.microsoft.com/wp-content/uploads/2023/01/intellicode-autocomplition.gif" alt="intellicode-autocomplition" />
                                </p>
                                <h2 id="2" class="text-[2rem] leading-[2.5rem] mb-[1rem] mt-[2rem]">
                                    2. Low-Code and No-Code Platforms
                                </h2>
                                <p class="text-base leading-[1.75rem]">
                                    The low-code and no-code movement has been gaining significant momentum, transforming how applications are developed. These platforms provide developers with the tools to build functional applications with minimal coding effort, accelerating the development process significantly. One notable example is Mendix, a low-code platform that allows developers to visually create applications using a drag-and-drop interface. Developers can focus on creativity and user experience, while the platform handles the backend complexities, making software development more accessible to a wider audience.
                                </p>
                                <h2 id="3" class="text-[2rem] leading-[2.5rem] mb-[1rem] mt-[2rem]" id="title404">
                                    3. Serverless Computing
                                </h2>
                                <p class="text-base leading-[1.75rem]">
                                    In 2022, serverless computing is revolutionizing cloud development. Services like AWS Lambda and Azure Functions have enabled developers to deploy code without managing servers directly. This approach ensures optimal scalability and cost-effectiveness, as resources are allocated dynamically based on demand. A classic example of serverless computing in action is the serverless architecture of a social media platform. Instead of provisioning and managing servers to handle varying loads, serverless functions can be triggered to handle specific tasks, allowing for efficient resource utilization and seamless scaling.
                                </p>
                                <h2 id="4" class="text-[2rem] leading-[2.5rem] mb-[1rem] mt-[2rem]">
                                    4. Integrated Development Environments (IDEs)
                                </h2>
                                <p class="text-base leading-[1.75rem]">
                                    Modern IDEs have evolved to become powerful and customizable hubs for developers. Visual Studio Code, developed by Microsoft, is a prime example of an IDE that has gained tremendous popularity among developers. It offers an extensive range of extensions, enabling developers to tailor their coding environment to their specific needs. With features like code autocompletion, version control integration, and seamless collaboration tools, IDEs have become essential tools in the developer's arsenal, facilitating efficient and enjoyable coding experiences.
                                </p>
                                <p class="text-base leading-[1.75rem]">
                                    <img class="my-8 rounded-2xl shadow-2xl" src="https://code.visualstudio.com/assets/updates/1_37/icons.gif" alt="Visual studio gif" />
                                </p>
                                <h2 id="5" class="text-[2rem] leading-[2.5rem] mb-[1rem] mt-[2rem]" id="title405">
                                    5. Collaboration and Project Management Tools
                                </h2>
                                <p class="text-base leading-[1.75rem]">
                                    Effective communication and project management are crucial for successful development projects. Collaboration tools like Slack and Microsoft Teams have become integral to developer workflows, allowing team members to communicate seamlessly, share ideas, and seek timely feedback. Additionally, project management tools like Asana aid in organizing tasks, tracking progress, and ensuring that development projects stay on schedule. These tools foster a collaborative and efficient work environment, enabling teams to deliver high-quality software products.
                                </p>
                                <p class="text-base leading-[1.75rem]">
                                    <img class="my-8 rounded-2xl shadow-2xl" src="https://capacity.com/wp-content/uploads/2020/06/slack-vs-teams-02-1536x970.png.webp" alt="shopify cross sell popup" />
                                </p>
                                <h2 id="6" class="text-[2rem] leading-[2.5rem] mb-[1rem] mt-[2rem]">
                                    6. Continuous Integration and Continuous Deployment (CI/CD)
                                </h2>
                                <p class="text-base leading-[1.75rem]">
                                    In 2023, CI/CD practices have become a standard in modern software development. Continuous Integration (CI) and Continuous Deployment (CD) workflows are automated processes that enable developers to build, test, and deploy code changes systematically. Tools like Jenkins and GitLab CI/CD have streamlined these processes, leading to faster delivery and increased software quality. As a result, developers can focus more on writing code and less on managing the development pipeline, resulting in improved productivity and code reliability.
                                </p>
                                <h2 id="7" class="text-[2rem] leading-[2.5rem] mb-[1rem] mt-[2rem]" id="title406">
                                    7. Containerization Technologies
                                </h2>
                                <p class="text-base leading-[1.75rem]">
                                    Containerization technologies like Docker and Kubernetes have been transforming the way applications are deployed and managed. Docker allows developers to package applications and their dependencies into containers, ensuring consistency across different environments. Kubernetes, an open-source container orchestration platform, simplifies the deployment and scaling of containerized applications. These technologies have led to more efficient and scalable development and deployment processes, making it easier for developers to manage complex applications.
                                </p>
                                <p>
                                    <img class="my-8 rounded-2xl shadow-2xl" src="https://www.cloudzero.com/hubfs/blog/docker-alternatives.jpg" alt="shopify promotional popup" />
                                </p>
                                <h2 id="Conclusion" class="text-[2rem] leading-[2.5rem] mb-[1rem] mt-[2rem]" id="title408">
                                    Conclusion
                                </h2>
                                <p class="text-base leading-[1.75rem]">
                                    As the software development landscape continues to evolve, developers in 2022 will witness remarkable technological advancements. From AI-powered code assistants to low-code platforms and serverless computing, these innovations empower developers to work more efficiently, foster creativity, and deliver cutting-edge solutions. Embracing these key technologies and trends will undoubtedly shape the future of software development and open doors to even greater possibilities. With the continuous evolution of tools and practices like <span class="font-semibold leading-6 text-indigo-600">Deltasoft AI</span>, developers will have access to even more powerful and accessible resources, further transforming the world of programming. As we move forward, developers must stay attuned to these trends, leveraging technology to its fullest potential and driving innovation across all industries. The future of software development is bright, and developers are at the forefront of this exciting journey.
                                </p>
                        </div>
                        <div class="mt-12 flex justify-center rounded-xl border border-gray-200 md:justify-start">
                            <div class="my-6 flex flex-col items-center justify-center gap-x-5 text-center md:my-9 md:mx-12 md:flex-row md:items-start md:text-left"><img src="/assets/JSmanLogo.jpg" alt="Polina Slepac" class="h-16 w-16 rounded-full" loading="lazy" />
                                <div class="flex flex-col">
                                    <p class="mt-3 mb-1 font-biennale text-lg font-bold leading-6 md:mt-0 md:mb-0">JSman225</p>
                                    <p class="mb-6 w-[200px] font-biennale text-tiny leading-8 text-gray-700 md:mb-0 md:w-full">Founder of <span class="font-semibold leading-6 text-indigo-600">Deltasoft</span></p>
                                    <p class="font-biennale text-xs text-gray-500 md:text-tiny"><span class="font-biennale text-xs text-gray-500 md:text-tiny">July 20, 2023</span><span class="ml-5 font-biennale text-xs text-gray-500 md:text-tiny">6:00 PM</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-4 flex flex-col gap-3 lg:flex-row xl:md:w-1/3 xl:mt-0 xl:flex-col xl:gap-x-0 z-10">
                    <div data-ply-placeholder="3" class="empty:hidden"></div>
                    <div class="flex rounded-xl border border-gray-200 shadow-2xl" header="">
                        <div class="mt-9 flex flex-col px-10 pb-10">
                            <h2 class="text-4xl">Content</h2>
                            <ul class="mt-6 list-none">
                                <li>
                                    <a href="#Introduction" class="flex cursor-pointer gap-x-5 font-semibold text-lg text-gray-700 hover:text-blue">
                                        <div class="my-auto flex flex h-5 w-5 min-w-[1.25rem] items-center justify-center rounded-2xl bg-blue-100">
                                            <div class="h-1 w-1 rounded-lg bg-blue-600"></div>
                                        </div>Introduction</a>
                                </li>
                                <li class="flex flex-col">
                                    <div class="relative py-4 after:absolute after:top-1/2 after:left-10 after:right-0 after:h-px after:bg-gray-200"></div>
                                    <a href="#1" class="flex cursor-pointer gap-x-5 font-semibold text-lg text-gray-700 hover:text-blue">
                                        <div class="my-auto flex flex h-5 w-5 min-w-[1.25rem] items-center justify-center rounded-2xl bg-blue-100">
                                            <div class="h-1 w-1 rounded-lg bg-blue-600"></div>
                                        </div>1. AI-Powered Code Assistants</a>
                                </li>
                                <li class="flex flex-col">
                                    <div class="relative py-4 after:absolute after:top-1/2 after:left-10 after:right-0 after:h-px after:bg-gray-200"></div>
                                    <a href="#2" class="flex cursor-pointer gap-x-5 font-semibold text-lg text-gray-700 hover:text-blue">
                                        <div class="my-auto flex flex h-5 w-5 min-w-[1.25rem] items-center justify-center rounded-2xl bg-blue-100">
                                            <div class="h-1 w-1 rounded-lg bg-blue-600"></div>
                                        </div>2. Low-Code and No-Code Platforms</a>
                                </li>
                                <li class="flex flex-col">
                                    <div class="relative py-4 after:absolute after:top-1/2 after:left-10 after:right-0 after:h-px after:bg-gray-200"></div>
                                    <a href="#3" class="flex cursor-pointer gap-x-5 font-semibold text-lg text-gray-700 hover:text-blue">
                                        <div class="my-auto flex flex h-5 w-5 min-w-[1.25rem] items-center justify-center rounded-2xl bg-blue-100">
                                            <div class="h-1 w-1 rounded-lg bg-blue-600"></div>
                                        </div>3. Serverless Computing</a>
                                </li>
                                <li class="flex flex-col">
                                    <div class="relative py-4 after:absolute after:top-1/2 after:left-10 after:right-0 after:h-px after:bg-gray-200"></div>
                                    <a href="#4" class="flex cursor-pointer gap-x-5 font-semibold text-lg text-gray-700 hover:text-blue">
                                        <div class="my-auto flex flex h-5 w-5 min-w-[1.25rem] items-center justify-center rounded-2xl bg-blue-100">
                                            <div class="h-1 w-1 rounded-lg bg-blue-600"></div>
                                        </div>4. Integrated Development Environments (IDEs)</a>
                                </li>
                                <li class="flex flex-col">
                                    <div class="relative py-4 after:absolute after:top-1/2 after:left-10 after:right-0 after:h-px after:bg-gray-200"></div>
                                    <a href="#5" class="flex cursor-pointer gap-x-5 font-semibold text-lg text-gray-700 hover:text-blue">
                                        <div class="my-auto flex flex h-5 w-5 min-w-[1.25rem] items-center justify-center rounded-2xl bg-blue-100">
                                            <div class="h-1 w-1 rounded-lg bg-blue-600"></div>
                                        </div>5. Collaboration and Project Management Tools</a>
                                </li>
                                <li class="flex flex-col">
                                  <div class="relative py-4 after:absolute after:top-1/2 after:left-10 after:right-0 after:h-px after:bg-gray-200"></div>
                                  <a href="#6" class="flex cursor-pointer gap-x-5 font-semibold text-lg text-gray-700 hover:text-blue">
                                      <div class="my-auto flex flex h-5 w-5 min-w-[1.25rem] items-center justify-center rounded-2xl bg-blue-100">
                                          <div class="h-1 w-1 rounded-lg bg-blue-600"></div>
                                      </div>6. Continuous Integration and Continuous Deployment (CI/CD)</a>
                              </li>
                              <li class="flex flex-col">
                                <div class="relative py-4 after:absolute after:top-1/2 after:left-10 after:right-0 after:h-px after:bg-gray-200"></div>
                                <a href="#7" class="flex cursor-pointer gap-x-5 font-semibold text-lg text-gray-700 hover:text-blue">
                                    <div class="my-auto flex flex h-5 w-5 min-w-[1.25rem] items-center justify-center rounded-2xl bg-blue-100">
                                        <div class="h-1 w-1 rounded-lg bg-blue-600"></div>
                                    </div>7. Containerization Technologies</a>
                            </li>
                                <li class="flex flex-col">
                                    <div class="relative py-4 after:absolute after:top-1/2 after:left-10 after:right-0 after:h-px after:bg-gray-200"></div>
                                    <a href="#Conclusion" class="flex cursor-pointer gap-x-5 font-semibold text-lg text-gray-700 hover:text-blue">
                                        <div class="my-auto flex flex h-5 w-5 min-w-[1.25rem] items-center justify-center rounded-2xl bg-blue-100">
                                            <div class="h-1 w-1 rounded-lg bg-blue-600"></div>
                                        </div>Conclusion</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   
    </article>
     ))}
    </>
    )
}