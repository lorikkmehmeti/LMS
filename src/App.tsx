import React from "react";
import { sprinkles } from "./styles/utilities/utility-styles.css";
import { Button } from "./components/Button/Button";
import ThemeProvider from "./providers/theme-provider";
import Text from "./components/global/Text/Text";
import Avatar from "./components/Avatar/Avatar";
import { IMAGES } from "./utils/constants";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuItemIndicator,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  RightSlot,
} from "./components/DropdownMenu/DropdownMenu";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { StyledToggle } from "./App.css";
import { DepartamentLine } from "./utils/Icons";
import { Radio, RadioGroup } from "./components/Radio/Radio";
import "./App.css.ts";
import { themes } from "./styles/theme";
import { Checkbox } from "./components/Checkbox/Checkbox";

export const Toggle = TogglePrimitive.Root;

export default function App() {
  return (
    <ThemeProvider>
      <div
        className={`App ${sprinkles({
          fontFamily: "body",
          padding: {
            desktop: 6,
            computer: 5,
            tablet: 3,
            mobile: 3,
          },
        })}`}
      >
        <div className={""}>
          <Button size="small" color="ghost">
            Learn more
          </Button>
          <Button size="small" color="secondary">
            Next step
          </Button>
          <Button size="small" color="primary">
            Sign in
          </Button>
          <Text key={1} as="h4">
            Lead Officer Senior Construction
          </Text>
          <Text as="title">
            Odio omnis ea et. Consectetur at nostrum a. Ipsa quia rerum.
          </Text>
          <br /> <br />
          <div>
            <Checkbox value={"ASP"} label={"Marathi"} />
            <Checkbox value={"QPL"} label={"English"} />
            <Checkbox value={"GM"} label={"Italian"} />
            <RadioGroup
              defaultValue={"Lorik Mehmeti"}
              aria-label="View density"
            >
              {[
                `Bachelor of Computer Science`,
                "Bachelor of Design",
                "Associate Degree in Communications",
              ].map((el) => (
                <Radio key={el} label={el} value={el} />
              ))}
            </RadioGroup>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <Avatar name="Lorik Mehmeti" image={IMAGES[3]} size={13} />
            <Avatar
              name="Eni Salihu"
              image={
                "https://i.pinimg.com/736x/9e/17/57/9e1757d831ec13c3e75547dd1b92db96.jpg"
              }
              size={11}
            />
            <Avatar name="Valmir Haxholli" size={9} />
            <Avatar name="Tame Impala" size={9} />
          </div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div style={{ display: "inline-flex", margin: "5px 150px" }}>
                  <Button size="small" color="secondary">
                    Save the draft
                  </Button>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {["Status", "Assignee", "Priority", "Labels"].map((el) => (
                  <DropdownMenuItem key={el + Date.now()}>
                    {el}
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem checked={true}>
                  <DropdownMenuItemIndicator>
                    <svg width="1em" height="1em" viewBox="0 0 256 256">
                      <path
                        fill="currentColor"
                        d="M232 128c0 12.5-17.8 22-22.7 33.7s1.4 30.6-7.8 39.8s-28.5 3.1-39.8 7.8S140.5 232 128 232s-22-17.8-33.7-22.7s-30.6 1.4-39.8-7.8s-3.1-28.5-7.8-39.8S24 140.5 24 128s17.8-22 22.7-33.7s-1.4-30.6 7.8-39.8s28.5-3.1 39.8-7.8S115.5 24 128 24s22 17.8 33.7 22.7s30.6-1.4 39.8 7.8s3.1 28.5 7.8 39.8S232 115.5 232 128Z"
                        opacity=".2"
                      ></path>
                      <path
                        fill="currentColor"
                        d="M225.9 102.8c-3.8-3.9-7.7-8-9.2-11.5s-1.4-8.7-1.5-14c-.1-9.7-.3-20.8-8-28.5s-18.8-7.9-28.5-8c-5.3-.1-10.7-.2-14-1.5s-7.6-5.4-11.5-9.2C146.3 23.5 138.4 16 128 16s-18.3 7.5-25.2 14.1c-3.9 3.8-8 7.7-11.5 9.2s-8.7 1.4-14 1.5c-9.7.1-20.8.3-28.5 8s-7.9 18.8-8 28.5c-.1 5.3-.2 10.7-1.5 14s-5.4 7.6-9.2 11.5C23.5 109.7 16 117.6 16 128s7.5 18.3 14.1 25.2c3.8 3.9 7.7 8 9.2 11.5s1.4 8.7 1.5 14c.1 9.7.3 20.8 8 28.5s18.8 7.9 28.5 8c5.3.1 10.7.2 14 1.5s7.6 5.4 11.5 9.2c6.9 6.6 14.8 14.1 25.2 14.1s18.3-7.5 25.2-14.1c3.9-3.8 8-7.7 11.5-9.2s8.7-1.4 14-1.5c9.7-.1 20.8-.3 28.5-8s7.9-18.8 8-28.5c.1-5.3.2-10.7 1.5-14s5.4-7.6 9.2-11.5c6.6-6.9 14.1-14.8 14.1-25.2s-7.5-18.3-14.1-25.2Zm-11.6 39.3c-4.8 5-9.7 10.2-12.4 16.5s-2.6 13.1-2.7 19.8s-.2 14.4-3.3 17.5s-10.4 3.2-17.5 3.3s-13.7.2-19.8 2.7s-11.5 7.6-16.5 12.4S132 224 128 224s-9.1-4.9-14.1-9.7s-10.2-9.7-16.5-12.4s-13.1-2.6-19.8-2.7s-14.4-.2-17.5-3.3s-3.2-10.4-3.3-17.5s-.2-13.7-2.7-19.8s-7.6-11.5-12.4-16.5S32 132 32 128s4.9-9.1 9.7-14.1s9.7-10.2 12.4-16.5s2.6-13.1 2.7-19.8s.2-14.4 3.3-17.5s10.4-3.2 17.5-3.3s13.7-.2 19.8-2.7s11.5-7.6 16.5-12.4S124 32 128 32s9.1 4.9 14.1 9.7s10.2 9.7 16.5 12.4s13.1 2.6 19.8 2.7s14.4.2 17.5 3.3s3.2 10.4 3.3 17.5s.2 13.7 2.7 19.8s7.6 11.5 12.4 16.5S224 124 224 128s-4.9 9.1-9.7 14.1Zm-36.5-43.6a8 8 0 0 1-.3 11.3l-58.6 56a8.1 8.1 0 0 1-5.6 2.2a7.9 7.9 0 0 1-5.5-2.2l-29.3-28a8 8 0 1 1 11-11.6l23.8 22.7l53.2-50.7a8 8 0 0 1 11.3.3Z"
                      ></path>
                    </svg>
                  </DropdownMenuItemIndicator>
                  Add Sub Issue
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked={false}>
                  <DropdownMenuItemIndicator>
                    <svg width="1em" height="1em" viewBox="0 0 256 256">
                      <path
                        fill="currentColor"
                        d="M104 192a8.5 8.5 0 0 1-5.7-2.3l-56-56a8.1 8.1 0 0 1 11.4-11.4l50.3 50.4L210.3 66.3a8.1 8.1 0 0 1 11.4 11.4l-112 112a8.5 8.5 0 0 1-5.7 2.3Z"
                      ></path>
                    </svg>
                  </DropdownMenuItemIndicator>
                  Set due date
                </DropdownMenuCheckboxItem>
                <DropdownMenuSeparator />
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    More information
                    <RightSlot>
                      <div>
                        <svg width="1em" height="1em" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M9.4 18L8 16.6l4.6-4.6L8 7.4L9.4 6l6 6Z"
                          ></path>
                        </svg>
                      </div>
                    </RightSlot>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent sticky="partial" sideOffset={0}>
                    {[
                      "Your profile",
                      "Your repositories",
                      "Your gists",
                      "7.5",
                      "Point Guard",
                      "MM7842",
                      "Tails",
                      "Super Saiyan Blue Goku",
                    ].map((el, index) => (
                      <DropdownMenuItem
                        key={Date.now() + el}
                        disabled={[2, 3, 4].includes(index)}
                      >
                        {el}
                      </DropdownMenuItem>
                    ))}
                    {/*<DropdownMenuItem disabled={true}>*/}
                    {/*  Save Page As…*/}
                    {/*</DropdownMenuItem>*/}
                    {/*<DropdownMenuItem>Create Shortcut…</DropdownMenuItem>*/}
                    {/*<DropdownMenuItem>Name Window…</DropdownMenuItem>*/}
                    {/*<DropdownMenuItem>Developer Tools</DropdownMenuItem>*/}
                    {/*<DropdownMenuItem>*/}
                    {/*  {new Date().toLocaleDateString("de-AT")}*/}
                    {/*</DropdownMenuItem>*/}
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
