const contentful = require("contentful");

const client = contentful.createClient({
    space: "nhrelrjfi7i2",
    accessToken: "T5tWHsOH_igUsfddR5PDejVS-SLwqmm2L8RoENr1PZ8",
  });

  async function fetchArticles() {
    const entries = await client.getEntries({
      content_type: 'article',
    });
  
    return entries.items;
  }
  console.log(fetchArticles());

  export default function Blog() {
    return (
        <section>
            <p>hey</p>

        </section >
    )
}