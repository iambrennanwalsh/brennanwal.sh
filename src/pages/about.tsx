import type { Article } from '@/'
import { Anchor, Box, Content, PageTitle, Seo, Slide, Tabs } from '@/components'
import { useApiContext } from '@/hooks'
import { Standard } from '@/layouts'
import { getAllResources } from '@/utils/getAllResources/GetAllResources'
import { InferGetStaticPropsType } from 'next'
import { ReactElement, useEffect } from 'react'

const aboutSeo = {
  title: 'About Me',
  description:
    'I am a full stack applications developer and entrepreneur living in Los Angeles.'
}

const languagesTab = (
  <>
    <Content
      heading="TypeScript"
      image={{ src: '/images/skills/typescript.png', alt: 'TypeScript' }}>
      <p>
        TypeScript is a strongly typed syntactical superset of ECMAScript 2015.
        Developed at MicroSoft, It adds optional static typing to the language.
      </p>
    </Content>

    <Content
      heading="PHP"
      image={{
        src: '/images/skills/php.png',
        alt: 'PHP'
      }}>
      <p>
        PHP: Hypertext Preprocessor is a general-purpose scripting language. PHP
        is primarily used for web development because it pairs well with html,
        works server side, and is easy to learn.
      </p>
    </Content>

    <Content
      heading="Swift"
      image={{ src: '/images/skills/swift.png', alt: 'Swift' }}>
      <p>
        Swift is a modern compiled programming language developed at Apple.
        Swift is designed to interoperate with Apple&apos;s Cocoa and Cocoa
        Touch frameworks as well as Apple&pos;s extensive body of Objective-C
        code.
      </p>
    </Content>

    <Content
      heading="GoLang"
      image={{
        src: '/images/skills/golang.png',
        alt: 'GoLang'
      }}>
      <p>
        GoLang is a modern compiled programming language that is being developed
        at Google. The langauges defining features are its small size and
        support for concurrent programming.
      </p>
    </Content>

    <Content
      heading="Rust"
      image={{
        src: '/images/skills/rust.png',
        alt: 'Rust'
      }}>
      <p>
        Rust is a modern compiled programming language originally developed at
        Mozilla. Designed for performance and safety, especially safe
        concurrency, the language is frequently compared to languages like C and
        C++.
      </p>
    </Content>
  </>
)

const frameworksTab = (
  <>
    <Content
      image={{
        src: '/images/skills/symfony.png',
        alt: 'Symfony'
      }}
      heading="Symfony">
      <p>
        Symfony is a PHP web application framework and a set of reusable PHP
        components / libraries. Many of the more well known PHP frameworks such
        as Laravel, and Drupal utilize components of this framework.
      </p>
    </Content>
    <Content
      image={{ src: '/images/skills/react.png', alt: 'React' }}
      heading="React">
      <p>
        React is a JavaScript library for building user interfaces. It is
        maintained by Facebook and a community of individual developers and
        companies.
      </p>
    </Content>
    <Content
      image={{ src: '/images/skills/swiftui.png', alt: 'SwiftUi' }}
      heading="SwiftUi">
      <p>
        Introduced in 2019 SwiftUI is Apple&pos;s brand new framework for
        building user interfaces for iOS, tvOS, macOS, and watchOS.
      </p>
    </Content>
  </>
)

const toolsTab = (
  <>
    <Content
      image={{ src: '/images/skills/docker.png', alt: 'Docker' }}
      heading="Docker">
      <p>
        Docker is a set of platform as a service products that use OS-level
        virtualization to deliver software in packages called containers.
      </p>
    </Content>
    <Content
      image={{ src: '/images/skills/heroku.png', alt: 'Heroku' }}
      heading="Heroku">
      <p>
        Heroku is a cloud platform as a service supporting several programming
        languages. Connect a github repository, and each push becomes a deploy.
      </p>
    </Content>
    <Content
      image={{
        src: '/images/skills/kubernetes.png',
        alt: 'kubernetes'
      }}
      heading="Kubernetes">
      <p>
        Developed at Google, Kubernetes is an open-source container
        orchestration system used for automating software deployment, scaling,
        and management.
      </p>
    </Content>
  </>
)

const tabs = [
  { title: 'Languages', children: languagesTab },
  { title: 'Frameworks', children: frameworksTab },
  { title: 'Tools', children: toolsTab }
]

const About = ({
  articles
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  const { resources, setResources } = useApiContext()

  useEffect(() => {
    if (!('articles' in resources))
      setResources({ ...resources, articles: articles })
  }, [articles, resources, setResources])

  return (
    <>
      <PageTitle {...aboutSeo} />
      <Seo {...aboutSeo} />
      <Box heading="Who am I?">
        <Content
          image={{
            src: '/images/me/me3.jpg',
            alt: 'Brennan Walsh',
            lightbox: true
          }}>
          <p>
            <s>Nobody really.</s> I am 24 years young, and living in Los Angeles
            where I was born and raised. I am a web, mobile, and desktop
            applications developer as well as an entrepreneur. When I&apos;m not
            busy developing one of my own projects, you&apos;ll probably find me
            working on a clients.
          </p>
        </Content>
        <Content heading="Developer">
          <p>
            My journey as a developer began when I was 16. I taught myself HTML
            and CSS over my Junior year of high school, and absolutely fell in
            love with it in the process. Coding engages my brain in all the
            right ways. It&apos;s something I can do all day long without the
            slightest burnout or fatigue.
          </p>
          <p>
            Almost a decade later, you&apos;ll find that I am proficient in an
            extensive list of languages, frameworks, platforms, and tools (you
            can find the complete list on my{' '}
            <Anchor href="/portfolio">Portfolio</Anchor>). I am fluent in PHP,
            JavaScript, Go, Objective-C, and Swift. My typical web app is built
            on Symfony 4, and Vue.js, Mainized with Docker, exhaustively tested
            via Behat and PHPSpec, and deployed to Heroku.
          </p>
        </Content>
        <Content heading="Entrepreneur">
          <p>
            If there’s anything to know about me, it’s that I have a burning
            passion for the business world. I started my 1st at 17, buying
            &apos;The Lord of the Rings&apos; prop replicas from China to resell
            them on eBay and etsy. 8 years and 3 ventures later, I’ve acquired
            extensive hands on experience in the many aspects of digital
            marketing, business operations, and project management.
          </p>
        </Content>
      </Box>

      <Box heading="What I'm All About">
        <Content heading="Behavior Driven Development">
          <p>
            BDD (a form of test driven development) at its core is a tool for
            &apos;closing the disconnect&apos; between a developer and client.
            An issue I run into time and time again as a freelancer, is
            efficiently communicating with my clients. I am a developer. I work
            with websites all day every day. I know how to make a website that
            is useable, efficient, and meets my clients goals. But before I can,
            the client needs to express those goals to me. But thats not always
            an easy thing for the non technical to do.
          </p>
          <p>
            Behavioral driven development was created to remedy this exact type
            of dissconnect. When I begin a new project, I&apos;ll ussually sit
            down with the client for aboout an hour. Through a collaborative
            back and forth process, I&apos;ll extensively document exactly what
            it is they&apos;re envisioning. At the end of this process,
            I&apos;ll have a set of well defined features and behaviors to
            impliment. The process helps the client express their vision and me
            know what to focus on.
          </p>
        </Content>
        <Content heading="The Law of Attraction">
          <p>
            The law of attraction is what enables my passion. What is the law of
            attraction? Whatever we focus on through our thoughts and
            intentions, we manifest into our lives. For example, let’s say your
            dream is to run a Fortune 500 company. Push away all the doubts, and
            allow yourself to just believe that you are 100% capable of becoming
            that CEO. That it&apos;s not just a dream. It&apos;s all about
            energy. When you believe that something you really want is within
            your capabilities, you’re going to be motivated to go get it. You’re
            not just going to be motivated, you’re going to be excited and
            passionate about it. By going about your life focusing on the things
            you want, you&apos;re happier.
          </p>
        </Content>
      </Box>
      <Slide
        type="losAngeles"
        source="Born and raised in the city of angels."
      />
      <Box heading="Some Of My Notable Skills">
        <Tabs tabs={tabs} />
      </Box>
    </>
  )
}

export default About

export const getStaticProps = async () => {
  const articles = getAllResources<Article>('articles')
  return {
    props: {
      articles
    }
  }
}

About.getLayout = function getLayout(page: ReactElement) {
  return <Standard>{page}</Standard>
}
