const contentful = require("contentful");

const client = contentful.createClient({
    space: "nhrelrjfi7i2",
    accessToken: "T5tWHsOH_igUsfddR5PDejVS-SLwqmm2L8RoENr1PZ8",
});
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
};

export default async function Page({ params }) {
    let articles = [];
    await client.getEntries({ content_type: 'pageBlogPost', 'fields.slug[in]': params.slug }).then(function (entries) {
        //console.log(entries.items);
        // log the title for all the entries that have it
        entries.items.forEach(function (entry) {
            if (entry.fields.featuredImage) {
                //console.log(entry.fields.relatedBlogPosts.fields);
                articles.push(entry.fields);
            }

        });
    });
    return (
        <>
            {articles.map((article) => (
                <section key={article.seoFields.sys.id}>
                    <article>
                        <div className="m-auto w-full max-w-[1350px] px-8">
                            <div className="mb-12 mt-12 flex flex-col items-center justify-center gap-x-4 md:mb-24 xl:flex-row xl:items-start">
                                <div className="relative w-full xl:w-2/3">
                                    <div className="relative mx-auto overflow-hidden rounded-lg md:w-2/3 xl:w-full md:h-2/3 lg:h-[482px] shadow-2xl"><img src={article.featuredImage.fields.file.url} alt="shopify online shopping popups" className="w-full" />
                                        <div className="absolute bottom-5 left-5 flex gap-x-2 rounded-2xl bg-white px-3 py-1 font-biennale text-4xs leading-snug text-navy-900 sm:gap-x-4 sm:text-3xs md:gap-x-5 md:px-6 md:py-3 md:text-mini xl:bottom-16 xl:left-16">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4 self-center sm:h-5 sm:w-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>

                                            <span>{formatDate(article.publishedDate)}</span>
                                        </div>
                                    </div>
                                    <div className="mt-16 md:px-28">
                                        <div className="post-text">
                                            <div>
                                                {article.deltasoftAiRelatedArticle && (
                                                    <a href="#" className="relative z-10 rounded-full bg-blue-600 hover:bg-blue-700 px-3 py-1.5 font-medium text-gray-100">
                                                        Deltasoft AI
                                                    </a>
                                                )}
                                            </div>
                                            <h1 id="Introduction" className="text-[2.75rem] leading-[3.575rem] mb-[2rem] mt-[1.25rem]">
                                                {article.title}
                                            </h1>
                                            {article.content.content.map((node, index) => {
                                                switch (node.nodeType) {
                                                    case 'heading-1':
                                                        return <h1 className="text-[2rem] leading-[2.5rem] mb-[1rem] mt-[2rem]" key={index}>{node.content[0].value}</h1>;
                                                    case 'paragraph':
                                                        return <p className="text-base leading-[1.75rem]" key={index}>{node.content[0].value}</p>;
                                                    case 'unordered-list':
                                                        let list = [];
                                                        node.content.map((node, index) => {
                                                            //console.log(node.content[0].content[0].value);
                                                            //console.log(node.content[1].content[0].content[0].content[0].value);
                                                            list.push({ title: node.content[0].content[0].value, body: node.content[1].content[0].content[0].content[0].value })

                                                        })
                                                        //console.log(list)
                                                        return (
                                                            <ul key={index} className="list-disc pl-8">
                                                                {list.map((node, index) => (
                                                                    <li key={index} className="pt-4"><b>{node.title}</b><br /><li style={{ listStyleType: 'circle', marginLeft: '32px' }}>{node.body}</li></li>
                                                                ))}
                                                            </ul>
                                                        )
                                                    case 'embedded-entry-block':
                                                        // Handle the embedded entry block. You might need to adjust this depending on the structure of your data.
                                                        //         
                                                        return (
                                                            <p key={index} className="text-base leading-[1.75rem]">
                                                                <img className="my-8 rounded-2xl shadow-2xl" src={node.data.target.fields.image.fields.file.url} alt={node.data.target.fields.image.fields.title} />
                                                            </p>
                                                        );//<div key={index}>Embedded Entry: {node.data.target.sys.id}</div>;
                                                    default:
                                                        return null;
                                                }
                                            })}
                                        </div>
                                        <div className="mt-12 flex justify-center rounded-xl border border-gray-200 md:justify-start">
                                            <div className="my-6 flex flex-col items-center justify-center gap-x-5 text-center md:my-9 md:mx-12 md:flex-row md:items-start md:text-left"><img src={article.author.fields.avatar.fields.file.url} alt="" className="h-16 w-16 rounded-full" loading="lazy" />
                                                <div className="flex flex-col">
                                                    <p className="mt-3 mb-1 font-biennale text-lg font-bold leading-6 md:mt-0 md:mb-0">{article.author.fields.name}</p>
                                                    <p className="mb-6 w-[200px] font-biennale text-tiny leading-8 text-gray-700 md:mb-0 md:w-full">{article.author.fields.occupation}</p>
                                                    <p className="font-biennale text-xs text-gray-500 md:text-tiny"><span className="font-biennale text-xs text-gray-500 md:text-tiny">{formatDate(article.publishedDate)}</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 hidden xl:flex flex-col gap-3 lg:flex-row xl:md:w-1/3 xl:mt-0 xl:flex-col xl:gap-x-0 z-10">
                                    <div data-ply-placeholder="3" className="empty:hidden"></div>
                                    <div className="flex rounded-xl border border-gray-200 shadow-2xl" header="">
                                        <div className="mt-9 flex flex-col px-10 pb-10">
                                            <h2 className="text-4xl">Content</h2>
                                            <ul className="mt-6 list-none">
                                                <li>
                                                    <a href="#Introduction" className="flex cursor-pointer gap-x-5 font-semibold text-lg text-gray-700 hover:text-blue">
                                                        <div className="my-auto flex h-5 w-5 min-w-[1.25rem] items-center justify-center rounded-2xl bg-blue-100">
                                                            <div className="h-1 w-1 rounded-lg bg-blue-600"></div>
                                                        </div>Introduction</a>
                                                </li>
                                                <li className="flex flex-col">
                                                    <div className="relative py-4 after:absolute after:top-1/2 after:left-10 after:right-0 after:h-px after:bg-gray-200"></div>
                                                    <a href="#1" className="flex cursor-pointer gap-x-5 font-semibold text-lg text-gray-700 hover:text-blue">
                                                        <div className="my-auto flex h-5 w-5 min-w-[1.25rem] items-center justify-center rounded-2xl bg-blue-100">
                                                            <div className="h-1 w-1 rounded-lg bg-blue-600"></div>
                                                        </div>1. AI-Powered Code Assistants</a>
                                                </li>
                                                <li className="flex flex-col">
                                                    <div className="relative py-4 after:absolute after:top-1/2 after:left-10 after:right-0 after:h-px after:bg-gray-200"></div>
                                                    <a href="#2" className="flex cursor-pointer gap-x-5 font-semibold text-lg text-gray-700 hover:text-blue">
                                                        <div className="my-auto flex h-5 w-5 min-w-[1.25rem] items-center justify-center rounded-2xl bg-blue-100">
                                                            <div className="h-1 w-1 rounded-lg bg-blue-600"></div>
                                                        </div>2. Low-Code and No-Code Platforms</a>
                                                </li>
                                                <li className="flex flex-col">
                                                    <div className="relative py-4 after:absolute after:top-1/2 after:left-10 after:right-0 after:h-px after:bg-gray-200"></div>
                                                    <a href="#3" className="flex cursor-pointer gap-x-5 font-semibold text-lg text-gray-700 hover:text-blue">
                                                        <div className="my-auto flex h-5 w-5 min-w-[1.25rem] items-center justify-center rounded-2xl bg-blue-100">
                                                            <div className="h-1 w-1 rounded-lg bg-blue-600"></div>
                                                        </div>3. Serverless Computing</a>
                                                </li>
                                                <li className="flex flex-col">
                                                    <div className="relative py-4 after:absolute after:top-1/2 after:left-10 after:right-0 after:h-px after:bg-gray-200"></div>
                                                    <a href="#4" className="flex cursor-pointer gap-x-5 font-semibold text-lg text-gray-700 hover:text-blue">
                                                        <div className="my-auto flex h-5 w-5 min-w-[1.25rem] items-center justify-center rounded-2xl bg-blue-100">
                                                            <div className="h-1 w-1 rounded-lg bg-blue-600"></div>
                                                        </div>4. Integrated Development Environments (IDEs)</a>
                                                </li>
                                                <li className="flex flex-col">
                                                    <div className="relative py-4 after:absolute after:top-1/2 after:left-10 after:right-0 after:h-px after:bg-gray-200"></div>
                                                    <a href="#5" className="flex cursor-pointer gap-x-5 font-semibold text-lg text-gray-700 hover:text-blue">
                                                        <div className="my-auto flex h-5 w-5 min-w-[1.25rem] items-center justify-center rounded-2xl bg-blue-100">
                                                            <div className="h-1 w-1 rounded-lg bg-blue-600"></div>
                                                        </div>5. Collaboration and Project Management Tools</a>
                                                </li>
                                                <li className="flex flex-col">
                                                    <div className="relative py-4 after:absolute after:top-1/2 after:left-10 after:right-0 after:h-px after:bg-gray-200"></div>
                                                    <a href="#6" className="flex cursor-pointer gap-x-5 font-semibold text-lg text-gray-700 hover:text-blue">
                                                        <div className="my-auto flex h-5 w-5 min-w-[1.25rem] items-center justify-center rounded-2xl bg-blue-100">
                                                            <div className="h-1 w-1 rounded-lg bg-blue-600"></div>
                                                        </div>6. Continuous Integration and Continuous Deployment (CI/CD)</a>
                                                </li>
                                                <li className="flex flex-col">
                                                    <div className="relative py-4 after:absolute after:top-1/2 after:left-10 after:right-0 after:h-px after:bg-gray-200"></div>
                                                    <a href="#7" className="flex cursor-pointer gap-x-5 font-semibold text-lg text-gray-700 hover:text-blue">
                                                        <div className="my-auto flex h-5 w-5 min-w-[1.25rem] items-center justify-center rounded-2xl bg-blue-100">
                                                            <div className="h-1 w-1 rounded-lg bg-blue-600"></div>
                                                        </div>7. Containerization Technologies</a>
                                                </li>
                                                <li className="flex flex-col">
                                                    <div className="relative py-4 after:absolute after:top-1/2 after:left-10 after:right-0 after:h-px after:bg-gray-200"></div>
                                                    <a href="#Conclusion" className="flex cursor-pointer gap-x-5 font-semibold text-lg text-gray-700 hover:text-blue">
                                                        <div className="my-auto flex h-5 w-5 min-w-[1.25rem] items-center justify-center rounded-2xl bg-blue-100">
                                                            <div className="h-1 w-1 rounded-lg bg-blue-600"></div>
                                                        </div>Conclusion</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </article>



                    <div className="bg-white pb-24">
                        <div className="mx-auto max-w-5xl px-6 lg:px-0">
                            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                                <div>
                                    <h1 className="text-[2.75rem] leading-[3.575rem] mb-[2rem] mt-[1.25rem]">Related Articles</h1>
                                    <p className="text-base leading-[1.75rem]">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    </p>
                                    <br />
                                    <br />
                                    <a href="https://discord.gg/AxUTv9Actu"
                                        className="rounded-md bg-blue-700 px-10 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700">
                                            See more <span aria-hidden="true">→</span></a>
                                </div>
                                {article.relatedBlogPosts.map((article) => (
                                    <article key={article.fields.seoFields.sys.id} className="flex max-w-xl flex-col items-start justify-between">
                                        <a href={'/blog/' + article.fields.slug}>
                                            <img alt="" className="shadow-xl rounded-xl object-cover w-96 h-52" src={article.fields.featuredImage.fields.file.url} />
                                        </a>
                                        <br />
                                        <div className="flex items-center gap-x-4 text-xs">
                                            <time dateTime={article.publishedDate} className="text-gray-500">{formatDate(article.fields.publishedDate)}</time>
                                            {article.deltasoftAiRelatedArticle && (
                                                <a href="#" className="relative z-10 rounded-full bg-blue-600 hover:bg-blue-700 px-3 py-1.5 font-medium text-gray-100">Deltasoft AI</a>
                                            )}
                                        </div>
                                        <div className="group relative">
                                            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                                <a href={'/blog/' + article.fields.slug}>
                                                    <span className="absolute inset-0"></span>
                                                    {article.fields.title}
                                                </a>
                                            </h3>
                                            <p className="mt-5 line-clamp-3 text-sm leading-6 h-[72px] text-gray-600">
                                                {article.fields.shortDescription}
                                            </p>
                                        </div>
                                        <div className="relative mt-8 flex items-center gap-x-4">
                                            {
                                                client
                                                    .getEntry(article.fields.author.sys.id)
                                                    .then((entry) => {
                                                        return (
                                                            <>
                                                                <img src={entry.fields.avatar.fields.file.url} alt="" className="h-10 w-10 rounded-full bg-gray-50 shadow-2xl" />
                                                                <div className="text-sm leading-5">
                                                                    <p className="font-semibold text-gray-900">
                                                                        <a href="#">
                                                                            <span className="absolute inset-0"></span>
                                                                            {entry.fields.name}
                                                                        </a>
                                                                    </p>
                                                                    <p className="text-gray-600">
                                                                        {entry.fields.occupation}
                                                                    </p>
                                                                </div>
                                                            </>
                                                        )
                                                    }
                                                    )
                                            }

                                        </div>
                                    </article>
                                ))
                                }
                            </div>
                        </div>
                    </div>
                </section >
            ))
            }
        </>
    )
}