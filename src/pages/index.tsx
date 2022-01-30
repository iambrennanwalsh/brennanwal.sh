import {Anchor, Box, Content, Icon, Slide} from '@/components'
import {useApiContext} from '@/hooks'
import {Landing} from '@/layouts'
import {GetAllResources} from '@/utils/getAllResources'
import {LayoutState} from '@/utils/layoutState'
import {InferGetStaticPropsType} from 'next'
import {ReactElement, useEffect} from 'react'

const homeSeo = {
  title: 'Web Developer and Entrepreneur',
  description:
    'Hi, Im Brennan. Im a web, mobile, and desktop applications developer, and entrepreneur. Welcome to my personal blog, portfolio, and home page.',
}

const Home = ({
  layoutState,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  const {featured, categories} = layoutState
  const {resources, setResources} = useApiContext()

  useEffect(() => {
    const newResources = {}
    if (!('featured' in resources)) newResources['featured'] = featured
    if (!('categories' in resources)) newResources['categories'] = categories
    if (Object.keys(newResources).length > 0)
      setResources({...resources, ...newResources})
  }, [categories, featured, resources, setResources])

  return (
    <>
      <Box
        heading="A Little About Me"
        link={{href: '/about', children: <Icon icon="right" />}}
      >
        <Content
          heading="Hi, I'm Brennan Walsh"
          image={{
            src: '/images/me/me2.jpg',
            alt: 'Brennan Walsh',
            lightbox: true,
          }}
        >
          <p>
            I’m a full stack applications developer and entrepreneur based out
            of Los Angeles. I currently freelance my skills via{' '}
            <a href="https://www.freelancer.com/u/iambrennanwalsh">
              Freelancer.com
            </a>{' '}
            and{' '}
            <a href="https://www.freelancer.com/u/iambrennanwalsh">
              Upwork.com
            </a>
            .
          </p>
          <p>
            If theres anything to know about me it&apos;s that I love what I do.
            I&apos;m so beyond passionate about technology, and the business
            world, that I don&apos;t even consider what I do work. It&apos;s a
            hobby. My passion. Its something I can do all day without developing
            the slightest burnout or fatigue.
          </p>
          <p>
            I preach the power of a positive mindset, gratitude, and the law of
            attraction. Life is so fragile and precious. So be happy for the
            sake of being happy. Like a child. Happy for no reason at all.
            Change your mindset, change your life.
          </p>
        </Content>
      </Box>
      <Box
        heading="What I'm Working On"
        link={{href: '/portfolio', children: <Icon icon="right" />}}
      >
        <Content
          heading="Freelance"
          image={{
            src: '/images/portfolio/brennan.jpg',
            alt: 'Brennan Walsh',
            lightbox: true,
          }}
        >
          <p>
            My latest project is my freelance work. I freelance my application
            development skills to anyone with a project they need help with. I
            even offer free consultations, to help clear the confusion that
            surrounds the technical aspect of creating for the web. My clients,
            include individuals, small businesses, startups, non profits, and
            corportations. No matter the complexity of your idea, I can bring
            your vision to life.{' '}
            <Anchor href="https://www.freelancer.com/u/iambrennanwalsh">
              Hire me on freelancer.com.
            </Anchor>
          </p>
        </Content>
        <Content
          heading="WagRegistry"
          image={{
            src: '/images/portfolio/wagregistry.jpg',
            alt: 'WagRegistry',
            lightbox: true,
          }}
        >
          <p>
            WagRegistry is a project in the works. It&apos;s a web application
            that aims to simplify the process of registering service, therapy,
            and emotional support dogs. It can be a confusing process and people
            often come to it with anxiety, worried about getting on their plane,
            an uber, or staying at a hotel with their dog. My app seeks to be
            simple but informative.
          </p>
        </Content>
      </Box>
      <Slide
        type="steveJobs"
        quote="The people who are crazy enough to think that they can change the world, are the ones who do."
        source="Steve Jobs"
      />
      <Box
        heading="Github Repository"
        link={{
          href: 'https://github.com/iambrennanwalsh/brennanwal.sh',
          children: <Icon icon="right" />,
        }}
      >
        <Content>
          <p>
            The backend of this app is powered by the{' '}
            <a>Symfony 4 PHP framework</a>, and <a>Doctrine</a> for database
            management. The frontend is built on <a>Vue.js</a>, <a>webpack</a>{' '}
            for asset bundling, and the <a>Bulma css framework</a>. This site is
            tracked in version control using <a>git</a> and <a>Github</a>, and
            uses <a>Heroku</a> for deployment. Every push to the master branch
            triggers Heroku to deploy a new version of this app.
          </p>
          <p>
            See the <a>README.md</a> file in the root of the public github
            repository, for more detailed information regarding how this app
            utilizes the aformentioned technologies.
          </p>
        </Content>
      </Box>
    </>
  )
}

export default Home

export const getStaticProps = async () => {
  const articles = await GetAllResources('articles')
  const layoutState = LayoutState(articles)
  return {
    props: {
      layoutState,
    },
  }
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Landing seo={homeSeo} page="home">
      {page}
    </Landing>
  )
}
