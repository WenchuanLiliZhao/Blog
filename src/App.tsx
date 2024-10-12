import "./AppStyle/_app.scss";

import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Channels from "./Pages/Channels/_Channels";
import ChannelLayout from "./Pages/_Templates/Layouts/ChannelLayout";
import Template_Page from "./Pages/_Templates/Template_Page";
import Posts from "./Pages/Posts/_Posts";
import PostLayout from "./Pages/_Templates/Layouts/PostLayout";

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
          {/* <Route
            key="*"
            element={
              <>
                <ChannelLayout data={Channels.NotFound} />
              </>
            }
          /> */}

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

          {/* import posts */}
          {Object.values(Posts).map((item: Template_Page, i: number) => (
            <Route
              key={`${item}${i}`}
              path={`/${item.info.key}`}
              element={
                <>
                  <PostLayout data={item} />
                </>
              }
            />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
