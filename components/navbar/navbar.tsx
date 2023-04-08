import {Button, Dropdown, Link, Navbar, Switch, Text} from '@nextui-org/react';
import React from 'react';
import {icons} from './icons';
import {AcmeLogo} from './logo';
import {useTheme as useNextTheme} from 'next-themes';
import {useTheme} from '@nextui-org/react';

export const Nav = () => {
   const {setTheme} = useNextTheme();
   const {isDark, type} = useTheme();
   const collapseItems = [
      'About',
      'Leadership',
      'What We Do',
      'Contact',
   ];
   return (
      <Navbar
      isBordered variant="floating"
      >
         <Navbar.Brand>
            <Navbar.Toggle aria-label="toggle navigation" showIn="xs" />
            <AcmeLogo />
            <Text b color="inherit" hideIn="xs">
               Sierra Pacific STEM Club
            </Text>
            <Navbar.Content
               hideIn="sm"
               css={{
                  pl: '6rem',
               }}
               >
               <Navbar.Link href="#">
                  About
               </Navbar.Link>
               <Navbar.Link href="#">Leadership</Navbar.Link>
               <Navbar.Link href="#">What We Do</Navbar.Link>
               <Navbar.Link href="#">Contact</Navbar.Link>
            </Navbar.Content>
         </Navbar.Brand>

         <Navbar.Collapse>
            {collapseItems.map((item, index) => (
               <Navbar.CollapseItem key={item}>
                  <Link
                     color="inherit"
                     css={{
                        minWidth: '100%',
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
                  onChange={(e) =>
                     setTheme(e.target.checked ? 'dark' : 'light')
                  }
               />
            </Navbar.CollapseItem>
            
         </Navbar.Collapse>
         <Navbar.Content>

            <Navbar.Item>
               <Button auto flat href="#">
                  Join Our Club!
               </Button>
            </Navbar.Item>
            <Navbar.Item hideIn={'xs'}>
               <Switch
                  checked={isDark}
                  onChange={(e) =>
                     setTheme(e.target.checked ? 'dark' : 'light')
                  }
               />
            </Navbar.Item>
            <Text css={{ ml: "$3" }}>Light Mode & Dark Mode Switch</Text>
         </Navbar.Content>
      </Navbar>
   );
};
