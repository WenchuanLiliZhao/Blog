import "./AppStyle/_app.scss";

import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Channels from "./Pages/Channels/_Channels";
import ChannelLayout from "./Pages/_Templates/Layouts/ChannelLayout";
import Template_Page from "./Pages/_Templates/Template_Page";
import PostLayout from "./Pages/_Templates/Layouts/PostLayout";
import { Books } from "./Pages/Posts/Books/_Books";
import React from "react";

function App() {
  useState(() => {
    // console.log()
    const greetings = "Hello, World";
    console.log(greetings);
  });

  useEffect(() => {
    // console.log()
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={
              <>
                <ChannelLayout data={Channels.Channel_Home} />
              </>
            }
          />

          {/* import channels */}
          {Object.values(Channels).map((item: Template_Page, i: number) => (
            <Route
              key={`${item}${i}`}
              path={`/${item.info.key}`}
              element={
                <>
                  <ChannelLayout data={item} />
                </>
              }
            />
          ))}

          {/* import books and book pages */}
          {Object.values(Books).map((book, i_book) => (
            <React.Fragment key={i_book}>
              <Route
                path={`/${book.coverPage.info.key}`}
                element={<PostLayout data={book.coverPage} />}
              />

              {Object.values(book.toc).map((page, i_page) => (
                <Route
                  key={`${page}${i_page}`}
                  path={`/${page.info.key}`}
                  element={<PostLayout data={page} />}
                />
              ))}
            </React.Fragment>
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
