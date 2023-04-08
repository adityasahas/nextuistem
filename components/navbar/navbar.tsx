import {
   Modal,
   Divider,
   Button,
   Link,
   Navbar,
   Switch,
   Text,
   Card,
 } from "@nextui-org/react";
 import React from "react";
 import { icons } from "./icons";
 import { AcmeLogo } from "./logo";
 import { useTheme as useNextTheme } from "next-themes";
 import { useTheme } from "@nextui-org/react";
 
 export const Nav = () => {
   const [visible, setVisible] = React.useState(false);
   const handler = () => setVisible(true);
   const closeHandler = () => {
     setVisible(false);
     console.log("closed");
   };
   const { setTheme } = useNextTheme();
   const { isDark, type } = useTheme();
   const collapseItems = ["About", "What We Do", "Leadership"];
   return (
     <Navbar isBordered variant="floating">
       <Navbar.Brand>
         <Navbar.Toggle aria-label="toggle navigation" showIn="xs" />
         <AcmeLogo />
         <Text b color="inherit" hideIn="xs">
           Sierra Pacific STEM Club
         </Text>
         <Navbar.Content
           hideIn="sm"
           css={{
             pl: "6rem",
           }}
         >
           <Navbar.Link href="#hero">About</Navbar.Link>
           <Navbar.Link href="#whatwedo">What We Do</Navbar.Link>
           <Navbar.Link href="#leadership">Leadership</Navbar.Link>
         </Navbar.Content>
       </Navbar.Brand>
 
       <Navbar.Collapse>
         {collapseItems.map((item, index) => (
           <Navbar.CollapseItem key={item}>
             <Link
               color="inherit"
               css={{
                 minWidth: "100%",
               }}
               href="#"
             >
               {item}
             </Link>
           </Navbar.CollapseItem>
         ))}
 
         <Navbar.CollapseItem>
           <Switch
             checked={isDark}
             onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
           />
         </Navbar.CollapseItem>
       </Navbar.Collapse>
       <Navbar.Content>
         <Navbar.Item>
           <div>
             <Button auto flat onPress={handler}>
               Join Our Club!
             </Button>
             <Modal
 
               noPadding
               open={visible}
               onClose={closeHandler}
             >
               <Card>
                 <Card.Body >
                   <Card.Header color="primary">
                     <Text css={{ color: "#17C964" }} h3>
                       Google Classroom
                     </Text>
                   </Card.Header>
                   <Card.Body>
                     <p>Code: ddugr5p</p>
                   </Card.Body>
 
                   <Divider />
                   <Card.Header color="primary">
                     <Text css={{ color: "#9750DD" }} h3>
                       Instagram
                     </Text>
                   </Card.Header>
                   <Card.Body>
                     <p>@spstemclub</p>
                   </Card.Body>
                   <Divider/>
                   <Card.Header color="primary">
                    <Text color="#0952A5" h3>
                      Discord
                    </Text>
                   </Card.Header>
                   <Card.Body>
                    <p>Discord link is in Google Classroom.</p>
                   </Card.Body>
                 </Card.Body>
               </Card>
             </Modal>
           </div>
         </Navbar.Item>
         <Navbar.Item hideIn={"xs"}>
           <Switch
             checked={isDark}
             onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
           />
         </Navbar.Item>
       </Navbar.Content>
     </Navbar>
   );
 };