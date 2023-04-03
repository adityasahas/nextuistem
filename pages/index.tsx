import type {NextPage} from 'next';
import {Nav} from '../components/navbar/navbar';
import {Layout} from '../components/navbar/layout';
import {Hero} from '../components/hero';
import {Box} from '../components/styles/box';
import {Whatwedo} from '../components/whatwedo';
import {Leadership} from '../components/leadership';

const Home: NextPage = () => {
   return (
      <Layout>
         <Nav />
         <Box as="main">
            <Hero />
            <Whatwedo />
            <Leadership />
         </Box>
      </Layout>
   );
};

export default Home;
