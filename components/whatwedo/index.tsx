import {Divider, Grid, Text} from '@nextui-org/react';
import React from 'react';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';
import {BoxIcon} from '../icons/BoxIcon';
import {FeatureIcon} from '../icons/FeatureIcon';

export const Whatwedo = () => {
   return (
      <>
         <Flex
            direction={'column'}
            css={{
               'gap': '1rem',
               'pt': '$20',
               'justifyContent': 'center',
               'alignItems': 'center',
               'px': '$6',
               '@sm': {
                  justifyContent: 'space-around',
                  px: '$32',
                  flexDirection: 'row',
               },
               '@md': {
                  px: '$64',
               },
            }}
         >
            <Flex direction="column">
               <Text css={{color: '$blue600'}} h3>What We Do</Text>
               <Flex
                  css={{
                     py: '$10',
                     gap: '$5',
                  }}
               >                  
               <BoxIcon />

                  <Flex direction={'column'}>
                     <Text h4 weight={'medium'}>
                        Competitions
                     </Text>
                     <Text
                        span
                        css={{
                           maxWidth: '400px',
                           color: '$accents8',
                        }}
                     >
                        Several of the activities that we organize provide participants with an incentive to complete them. For instance, our club has conducted various competitions like parachute contests, egg drop challenges, and marshmallow tower building competitions, all featuring enticing rewards for the winners.
                     </Text>
                  </Flex>
               </Flex>
               <Flex
                  css={{
                     py: '$10',
                     gap: '$5',
                  }}
               >
                                 <BoxIcon />

                  <Flex direction={'column'}>
                     <Text h4 weight={'medium'}>
                        Activities
                     </Text>
                     <Text
                        span
                        css={{
                           maxWidth: '400px',
                           color: '$accents8',
                        }}
                     >
                        Our STEM club conducts weekly activities that encompass various aspects of Science, Technology, Engineering, and Mathematics (STEM). These events comprise coding, physics, and mathematics projects, among others.

                     </Text>
                  </Flex>
               </Flex>
            </Flex>
            <Flex align={'center'}>
               <FeatureIcon />
            </Flex>
            </Flex>

      </>
   );
};
