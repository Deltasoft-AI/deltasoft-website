const contentful = require("contentful");

const client = contentful.createClient({
    space: "3qjuz81t9uk8",
    accessToken: "JOowNxogcKMQoF39hSL7nNHtIGZKwRTczLr2B2X6dwY",
  });

  client.getEntries().then(function (entries) {
    // log the title for all the entries that have it
    entries.items.forEach(function (entry) {
      if (entry.fields.productName) {
        console.log(entry.fields.productName);
      }
    });
  });

  export default function Blog() {
    return (
        <section>
            <p>hey</p>

        </section >
    )
}