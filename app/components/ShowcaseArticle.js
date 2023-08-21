'use client';

import { useState, useEffect } from "react";

const contentful = require("contentful");

const client = contentful.createClient({
    space: "3qjuz81t9uk8",
    environment: "master",
    accessToken: "3axwIpb57OdFfPKGRqUSwR8YA1NtVy88QH_6id3nejw",
  });
  
  export default function ShowcaseArticle(props) {
    const [loading, setLoading] = useState(true);
    const [entryData, setEntryData] = useState(null);
  
    useEffect(() => {
      client
        .getEntry(props.Entry)
        .then((entry) => {
          const authorRefrence = entry.fields.authorRefrence.fields;
          console.log(entry);
          setEntryData({
            Title: entry.fields.title,
            Description: entry.fields.description,
            Date: entry.fields.date,
            IntroParagraph: entry.fields.introParagraph,
            CoverImage: "https:" + entry.fields.coverImage.fields.file.url,
            AuthorRefrence: authorRefrence,
            AuthorName: authorRefrence.name,
            AuthorAvatar: "https:" + authorRefrence.avatar.fields.file.url,
          });
          setLoading(false); // Mark loading as false once data is fetched
        })
        .catch(console.error);
    }, [props.Entry]);
  
  return (
    <div className="relative isolate px-6 pt-4 lg:px-8">
        <div className="flex flex-wrap gap-8 mx-auto max-w-2xl lg:flex-row flex-col lg:max-w-5xl py-8 sm:py-8 lg:py-8">
      {loading ? (
        // Render loading skeleton while loading is true
        <div className="w-full p-4 bg-gray-300 rounded-md animate-pulse">
        <div className="h-20 bg-gray-400 mb-4 rounded"></div>
        <div className="h-4 bg-gray-400 w-3/4 mb-2 rounded"></div>
        <div className="h-4 bg-gray-400 rounded"></div>
      </div>
      ) : (
        // Render actual content when loading is false
        <>
        
        <a
          href="/blog/empowering-developers-in-2023-key-technologies-and-trends"
          className="flex-1"
        >
          <img
            className="rounded-xl shadow-2xl object-cover w-full h-80"
            src={entryData.CoverImage}
            alt="Cover Image"
          />
        </a>
        <div className="flex-1 flex justify-center flex-col">
          <div className="flex justify-center flex-col gap-2">
            <header>
              <div className="mb-3">
                <ul className="flex flex-wrap text-xs font-medium -m-1">
                  <li className="m-1">
                    <a
                      className="rounded-full bg-blue-600 hover:bg-blue-700 px-3 py-1.5 font-medium text-gray-100"
                      href=""
                    >
                      Technology
                    </a>
                  </li>
                </ul>
              </div>
              <h3 className="h3 text-2xl lg:text-3xl mb-2">
                <a
                  href="/blog/empowering-developers-in-2023-key-technologies-and-trends"
                  className="hover:text-gray-600 text-gray-900 transition duration-150 ease-in-out"
                >
                  {entryData.Title}
                </a>
              </h3>
            </header>
            <p className="text-md text-gray-800">
                {entryData.Description}
            </p>
            <footer className="flex items-center mt-4">
              <a>
                <img
                  className="rounded-full flex-shrink-0 mr-4 shadow-2xl"
                  src={entryData.AuthorAvatar}
                  width="50"
                  height="50"
                  alt="Profile"
                />
              </a>
              <div className="text-md">
                <a className="font-medium text-gray-900">{entryData.AuthorName}</a>
                <span className="text-gray-700"> - </span>
                <span className="text-gray-500">{new Date(entryData.Date).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) }</span>
              </div>
            </footer>
          </div>
        </div>
        </>
        )}
      </div>
    </div>
  );
}
