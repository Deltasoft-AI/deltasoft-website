export const dynamicParams = true
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


export async function generateStaticParams() {
    let posts = [];
    await client.getEntries().then(function (entries) {
        //console.log(entries.items);
        // log the title for all the entries that have it
        entries.items.forEach(function (entry) {
            if (entry.fields.featuredImage) {
                console.log(entry.fields.slug);
                posts.push(entry.fields);
            }
    
        });
    });
    console.log(posts);
    return posts.map((post) => ({
      slug: post.slug,
    }))
  }




export default function BlogArticle({ params }) {
    client.getEntries({ content_type: 'pageBlogPost', 'fields.slug[in]': params.slug }).then(function (entries) {
        //console.log(entries.items);
        // log the title for all the entries that have it
        entries.items.forEach(function (entry) {
            if (entry.fields.featuredImage) {
                console.log(entry.fields.content.content[1].data.target.fields.image.fields);
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
                                <div class="relative mx-auto overflow-hidden rounded-lg md:w-2/3 xl:w-full md:h-2/3 lg:h-[482px] shadow-2xl"><img src={article.featuredImage.fields.file.url} alt="shopify online shopping popups" class="w-full" />
                                    <div class="absolute bottom-5 left-5 flex gap-x-2 rounded-2xl bg-white px-3 py-1 font-biennale text-4xs leading-snug text-navy-900 sm:gap-x-4 sm:text-3xs md:gap-x-5 md:px-6 md:py-3 md:text-mini xl:bottom-16 xl:left-16">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="h-4 w-4 self-center sm:h-5 sm:w-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>

                                        <span>{formatDate(article.publishedDate)}</span>
                                    </div>
                                </div>
                                <div class="mt-16 md:px-28">
                                    <div class="post-text">
                                        <div>
                                            {article.deltasoftAiRelatedArticle && (
                                                <a href="#" class="relative z-10 rounded-full bg-blue-600 hover:bg-blue-700 px-3 py-1.5 font-medium text-gray-100">
                                                    Deltasoft AI
                                                </a>
                                            )}
                                        </div>
                                        <h1 id="Introduction" class="text-[2.75rem] leading-[3.575rem] mb-[2rem] mt-[1.25rem]">
                                            {article.title}
                                        </h1>
                                        {article.content.content.map((node, index) => {
                                            switch (node.nodeType) {
                                                case 'heading-1':
                                                    return <h1 class="text-[2rem] leading-[2.5rem] mb-[1rem] mt-[2rem]" key={index}>{node.content[0].value}</h1>;
                                                case 'paragraph':
                                                    return <p class="text-base leading-[1.75rem]" key={index}>{node.content[0].value}</p>;
                                                case 'embedded-entry-block':
                                                    // Handle the embedded entry block. You might need to adjust this depending on the structure of your data.
                                                    //         
                                                    return (
                                                        <p key={index} class="text-base leading-[1.75rem]">
                                                        <img class="my-8 rounded-2xl shadow-2xl" src={node.data.target.fields.image.fields.file.url} alt={node.data.target.fields.image.fields.title} />
                                                        </p>
                                                    );//<div key={index}>Embedded Entry: {node.data.target.sys.id}</div>;
                                                default:
                                                    return null;
                                            }
                                        })}
                                </div>
                                <div class="mt-12 flex justify-center rounded-xl border border-gray-200 md:justify-start">
                                    <div class="my-6 flex flex-col items-center justify-center gap-x-5 text-center md:my-9 md:mx-12 md:flex-row md:items-start md:text-left"><img src={article.author.fields.avatar.fields.file.url} alt="" class="h-16 w-16 rounded-full" loading="lazy" />
                                        <div class="flex flex-col">
                                            <p class="mt-3 mb-1 font-biennale text-lg font-bold leading-6 md:mt-0 md:mb-0">{article.author.fields.name}</p>
                                            <p class="mb-6 w-[200px] font-biennale text-tiny leading-8 text-gray-700 md:mb-0 md:w-full">{article.author.fields.occupation}</p>
                                            <p class="font-biennale text-xs text-gray-500 md:text-tiny"><span class="font-biennale text-xs text-gray-500 md:text-tiny">{formatDate(article.publishedDate)}</span></p>
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
                                                <div class="my-auto flex h-5 w-5 min-w-[1.25rem] items-center justify-center rounded-2xl bg-blue-100">
                                                    <div class="h-1 w-1 rounded-lg bg-blue-600"></div>
                                                </div>Introduction</a>
                                        </li>
                                        <li class="flex flex-col">
                                            <div class="relative py-4 after:absolute after:top-1/2 after:left-10 after:right-0 after:h-px after:bg-gray-200"></div>
                                            <a href="#1" class="flex cursor-pointer gap-x-5 font-semibold text-lg text-gray-700 hover:text-blue">
                                                <div class="my-auto flex h-5 w-5 min-w-[1.25rem] items-center justify-center rounded-2xl bg-blue-100">
                                                    <div class="h-1 w-1 rounded-lg bg-blue-600"></div>
                                                </div>1. AI-Powered Code Assistants</a>
                                        </li>
                                        <li class="flex flex-col">
                                            <div class="relative py-4 after:absolute after:top-1/2 after:left-10 after:right-0 after:h-px after:bg-gray-200"></div>
                                            <a href="#2" class="flex cursor-pointer gap-x-5 font-semibold text-lg text-gray-700 hover:text-blue">
                                                <div class="my-auto flex h-5 w-5 min-w-[1.25rem] items-center justify-center rounded-2xl bg-blue-100">
                                                    <div class="h-1 w-1 rounded-lg bg-blue-600"></div>
                                                </div>2. Low-Code and No-Code Platforms</a>
                                        </li>
                                        <li class="flex flex-col">
                                            <div class="relative py-4 after:absolute after:top-1/2 after:left-10 after:right-0 after:h-px after:bg-gray-200"></div>
                                            <a href="#3" class="flex cursor-pointer gap-x-5 font-semibold text-lg text-gray-700 hover:text-blue">
                                                <div class="my-auto flex h-5 w-5 min-w-[1.25rem] items-center justify-center rounded-2xl bg-blue-100">
                                                    <div class="h-1 w-1 rounded-lg bg-blue-600"></div>
                                                </div>3. Serverless Computing</a>
                                        </li>
                                        <li class="flex flex-col">
                                            <div class="relative py-4 after:absolute after:top-1/2 after:left-10 after:right-0 after:h-px after:bg-gray-200"></div>
                                            <a href="#4" class="flex cursor-pointer gap-x-5 font-semibold text-lg text-gray-700 hover:text-blue">
                                                <div class="my-auto flex h-5 w-5 min-w-[1.25rem] items-center justify-center rounded-2xl bg-blue-100">
                                                    <div class="h-1 w-1 rounded-lg bg-blue-600"></div>
                                                </div>4. Integrated Development Environments (IDEs)</a>
                                        </li>
                                        <li class="flex flex-col">
                                            <div class="relative py-4 after:absolute after:top-1/2 after:left-10 after:right-0 after:h-px after:bg-gray-200"></div>
                                            <a href="#5" class="flex cursor-pointer gap-x-5 font-semibold text-lg text-gray-700 hover:text-blue">
                                                <div class="my-auto flex h-5 w-5 min-w-[1.25rem] items-center justify-center rounded-2xl bg-blue-100">
                                                    <div class="h-1 w-1 rounded-lg bg-blue-600"></div>
                                                </div>5. Collaboration and Project Management Tools</a>
                                        </li>
                                        <li class="flex flex-col">
                                            <div class="relative py-4 after:absolute after:top-1/2 after:left-10 after:right-0 after:h-px after:bg-gray-200"></div>
                                            <a href="#6" class="flex cursor-pointer gap-x-5 font-semibold text-lg text-gray-700 hover:text-blue">
                                                <div class="my-auto flex h-5 w-5 min-w-[1.25rem] items-center justify-center rounded-2xl bg-blue-100">
                                                    <div class="h-1 w-1 rounded-lg bg-blue-600"></div>
                                                </div>6. Continuous Integration and Continuous Deployment (CI/CD)</a>
                                        </li>
                                        <li class="flex flex-col">
                                            <div class="relative py-4 after:absolute after:top-1/2 after:left-10 after:right-0 after:h-px after:bg-gray-200"></div>
                                            <a href="#7" class="flex cursor-pointer gap-x-5 font-semibold text-lg text-gray-700 hover:text-blue">
                                                <div class="my-auto flex h-5 w-5 min-w-[1.25rem] items-center justify-center rounded-2xl bg-blue-100">
                                                    <div class="h-1 w-1 rounded-lg bg-blue-600"></div>
                                                </div>7. Containerization Technologies</a>
                                        </li>
                                        <li class="flex flex-col">
                                            <div class="relative py-4 after:absolute after:top-1/2 after:left-10 after:right-0 after:h-px after:bg-gray-200"></div>
                                            <a href="#Conclusion" class="flex cursor-pointer gap-x-5 font-semibold text-lg text-gray-700 hover:text-blue">
                                                <div class="my-auto flex h-5 w-5 min-w-[1.25rem] items-center justify-center rounded-2xl bg-blue-100">
                                                    <div class="h-1 w-1 rounded-lg bg-blue-600"></div>
                                                </div>Conclusion</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                </article >
            ))
}
        </>
    )
}