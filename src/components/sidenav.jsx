import { React, useState } from "react";
import Tab from "@material-tailwind/react/Tab";
import TabList from "@material-tailwind/react/TabList";
import TabItem from "@material-tailwind/react/TabItem";
import TabContent from "@material-tailwind/react/TabContent";
import TabPane from "@material-tailwind/react/TabPane";
import { GoGlobe } from "react-icons/go";
import { GiLion } from "react-icons/gi";
import { FaPhotoVideo } from "react-icons/fa";

function Sidenav() {
  const [openTab, setOpenTab] = useState(1);

  return (
    <div className="ml-[-36px] w-md">
      <Tab>
        <div className="flex justify-start mt-10 text-xs">
          <TabList
            className="max-w-[200px]  h-screen rounded-none bg-sky-300"
            color="blueGray"
          >
            <div className="grid h-[400px]">
              <TabItem
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                ripple="cyan"
                active={openTab === 1 ? true : false}
                href="tabItem"
                className="flex-col"
              >
                <GoGlobe />
                Browse
              </TabItem>
              <TabItem
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                ripple="light"
                active={openTab === 2 ? true : false}
                href="tabItem"
                className="flex-col"
              >
                <GiLion />
                Suggest Attraction
              </TabItem>
              <TabItem
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                ripple="light"
                active={openTab === 3 ? true : false}
                href="tabItem"
                className="flex-col"
              >
                <FaPhotoVideo />
                Videos
              </TabItem>
              <TabItem
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                ripple="light"
                active={openTab === 4 ? true : false}
                href="tabItem"
                className="flex-col"
              >
                Blog
              </TabItem>
              <TabItem
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(5);
                }}
                ripple="light"
                active={openTab === 5 ? true : false}
                href="tabItem"
                className="flex-col"
              >
                About
              </TabItem>
            </div>
          </TabList>

          <TabContent className="bg-gray-800">
            <TabPane active={openTab === 1 ? true : false}>
              <p>
                I think that’s a responsibility that I have, to push
                possibilities, to show people, this is the level that things
                could be at. So when you get something that has the name Kanye
                West on it, it’s supposed to be pushing the furthest
                possibilities. I will be the leader of a company that ends up
                being worth billions of dollars, because I got the answers. I
                understand culture. I am the nucleus.
              </p>
            </TabPane>
            <TabPane active={openTab === 2 ? true : false}>
              <p>
                I will be the leader of a company that ends up being worth
                billions of dollars, because I got the answers. I understand
                culture. I am the nucleus. I think that’s a responsibility that
                I have, to push possibilities, to show people, this is the level
                that things could be at. I think that’s a responsibility that I
                have, to push possibilities, to show people, this is the level
                that things could be at.
              </p>
            </TabPane>
            <TabPane active={openTab === 3 ? true : false}>
              <p>
                I think that’s a responsibility that I have, to push
                possibilities, to show people, this is the level that things
                could be at. So when you get something that has the name Kanye
                West on it, it’s supposed to be pushing the furthest
                possibilities. I will be the leader of a company that ends up
                being worth billions of dollars, because I got the answers. I
                understand culture. I am the nucleus.
              </p>
            </TabPane>
          </TabContent>
        </div>
      </Tab>
    </div>
  );
}

export default Sidenav;
