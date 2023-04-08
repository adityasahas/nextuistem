import {Button, Divider, Input, Text} from '@nextui-org/react';
import React from 'react';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';
import Image from 'next/image'

export const Hero = () => {
   return (
      <>
         <Flex
            css={{
               'gap': '$3',
               'px': '$6',
               'flexDirection': 'column',
               'alignContent': 'center',
               'justifyContent': 'center',
               'alignItems': 'center',
               'width': '100%',
               '@sm': {
                  flexDirection: 'row',
                  mt: '$20',
               },
            }}
            justify={'center'}
         >
            <Box
               css={{
                  pt: '$13',

                  display: 'flex',
                  flexDirection: 'column',
                  gap: '$5',
               }}
            >
               <Box
                  css={{
                     maxWidth: '600px',
                  }}
               >
                  <Text
                     h1
                     css={{
                        display: 'inline',
                     }}
                  >
                     Sierra Pacific{' '}
                  </Text>
                  <Text
                     h1
                     css={{
                        display: 'inline',
                     }}
                     color="primary"
                  >
                     STEM Club
                  </Text>
               </Box>

               <Text
                  css={{
                     color: '$accents8',
                     maxWidth: '400px',
                  }}
                  size={'$lg'}
                  span
               >
                  The STEM club at Sierra Pacific High School organizes weekly activities centered around science, technology, engineering, and mathematics. These events provide students with an opportunity to explore STEM subjects in a fun, unique and interactive way.
               </Text>
            </Box>
            <Box
               id='home'
               css={{
                  '& img': {
                     width: '475px',
                     objectFit: 'contain',
                     borderRadius: '10%',
                     marginLeft: '25px',
                     marginRight: '25px',

                  },
               }}
            >
               <Image alt="STEM picture" src="stem.png" />
            </Box>
         </Flex>
      </>
   );
};
