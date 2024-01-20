import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'
import imageMl from '@/images/ml.png'
import imagePg from '@/images/pg.png'
import imageSd from '@/images/sd.png'
import imageVi from '@/images/vi.png'


function Section({ title, image, children }) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Discover() {
  return (
    <Section title="Data Engineer" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
        A data engineer in IT services plays a pivotal role in managing and optimizing {' '}
          <strong className="font-semibold text-neutral-950">data infrastructure.</strong>
        </p>
        <p>
        They are responsible for designing, building, and maintaining data pipelines, 
        ensuring the efficient and secure flow of data.
        These professionals collaborate with {' '}
          <strong className="font-semibold text-neutral-950">data scientists</strong>{' '} and analysts to extract
           valuable insights from the vast volumes of data, 
        enhancing decision-making processes.
        </p>
        <p>
        Their expertise in data storage, integration, and transformation is crucial for businesses 
        to harness the power of {' '}
          <strong className="font-semibold text-neutral-950">data-driven solutions</strong> and maintain a competitive edge.
        </p>
      </div>

      {/* <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>In-depth questionnaires</TagListItem>
        <TagListItem>Feasibility studies</TagListItem>
        <TagListItem>Blood samples</TagListItem>
        <TagListItem>Employee surveys</TagListItem>
        <TagListItem>Proofs-of-concept</TagListItem>
        <TagListItem>Forensic audit</TagListItem>
      </TagList> */}
    </Section>
  )
}

function Build() {
  return (
    <Section title="Cloud Computing" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
        Cloud computing is a technology that allows businesses and individuals to access and store data, applications, 
        and services on remote servers over the internet.
        </p>
        <p>
        It offers scalability, flexibility, cost-efficiency, and easy access to computing resources. Cloud services include Infrastructure as a Service (IaaS),
         Platform as a Service (PaaS), and Software as a Service (SaaS). 
        
        </p>
        <p>
        Cloud computing enables remote collaboration, data backup, and disaster recovery, making it a vital component of modern IT infrastructure.
        </p>
      </div>

      {/* <Blockquote
        author={{ name: 'Debra Fiscal', role: 'CEO of Unseal' }}
        className="mt-12"
      >
        Studio were so regular with their progress updates we almost began to
        think they were automated!
      </Blockquote> */}
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="Software Development" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
        Software development is the process of designing, coding, testing, and maintaining computer programs and applications.
        It involves creating software solutions to address specific needs or problems.
        </p>
        <p>
        Developers use various programming languages and tools to build software that can run on different platforms, from mobile devices to desktop computers.
        Effective software development requires teamwork, problem-solving skills, and a focus on delivering reliable and efficient software solutions.
        </p>
      </div>

      {/* <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List className="mt-8">
        <ListItem title="Testing">
          Our projects always have 100% test coverage, which would be impressive
          if our tests weren’t as porous as a sieve.
        </ListItem>
        <ListItem title="Infrastructure">
          To ensure reliability we only use the best Digital Ocean droplets that
          $4 a month can buy.
        </ListItem>
        <ListItem title="Support">
          Because we hold the API keys for every critical service your business
          uses, you can expect a lifetime of support, and invoices, from us.
        </ListItem>
      </List> */}
    </Section>
  )
}
function ML() {
  return (
    <Section title="Machine Learning" image={{ src: imageMl, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
        Machine Learning services harness the power of artificial intelligence to transform data into valuable insights and predictions. 
        Our experts leverage cutting-edge algorithms to build models that can analyze vast datasets, automate tasks, and make data-driven decisions.
        </p>
        <p>
        From personalized recommendations to fraud detection and natural language processing, our Machine Learning solutions empower businesses across various industries to enhance efficiency, improve decision-making, 
        and unlock new opportunities. 
        Discover the potential of Machine Learning with us today.
        </p>
       
      </div>

      {/* <Blockquote
        author={{ name: 'Debra Fiscal', role: 'CEO of Unseal' }}
        className="mt-12"
      >
        Studio were so regular with their progress updates we almost began to
        think they were automated!
      </Blockquote> */}
    </Section>
  )
}
function DE() {
  return (
    <Section title="Devops Engineer" image={{ src: imagePg, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
        DevOps Engineers are the backbone of IT service businesses, bridging the gap between development and operations. 
        They streamline workflows, automate processes, and ensure the smooth deployment of software. 
        </p>
        <p>
        Our dedicated DevOps team optimizes infrastructure, enhances security, and fosters collaboration, enabling faster and more reliable product delivery.
        We bring efficiency and agility to your IT operations, reducing downtime and maximizing performance. 
        Partner with us for a seamless, future-ready IT environment.
        </p>
      </div>
    </Section>
  )
}
function DV() {
  return (
    <Section title="Data Visualization" image={{ src: imageSd, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
        Data Visualization is the key to unlocking insights from complex data. 
        Our IT services business specializes in creating visually compelling representations of data, making it easy to understand and act upon. 
        </p>
        <p>
        With our expertise, you can transform raw information into interactive, intuitive dashboards and reports, aiding decision-making and identifying trends. 
        Harness the power of data with our visualization solutions, and gain a competitive edge in the information-driven world of it.
        </p>
       
      </div>
    </Section>
  )
}
function P() {
  return (
    <Section title="Programming" image={{ src: imageVi, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
        In the realm of IT services, programming is the cornerstone of innovation. Our team of skilled developers crafts tailored solutions to address your unique needs.
        We excel in a wide range of programming languages and technologies, ensuring that your applications are efficient, secure, and scalable.  
        </p>
        <p>
        Whether it’s web development, mobile apps, or custom software, we’re here to code your vision into reality. 
        Let us empower your business with cutting-edge programming solutions.
        </p>
      </div>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Our values"
        title="Balancing reliability and innovation"
      >
        <p>
          We strive to stay at the forefront of emerging trends and
          technologies, while completely ignoring them and forking that old
          Rails project we feel comfortable using. We stand by our core values
          to justify that decision.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Meticulous">
            The first part of any partnership is getting our designer to put
            your logo in our template. The second step is getting them to do the
            colors.
          </GridListItem>
          <GridListItem title="Efficient">
            We pride ourselves on never missing a deadline which is easy because
            most of the work was done years ago.
          </GridListItem>
          <GridListItem title="Adaptable">
            Every business has unique needs and our greatest challenge is
            shoe-horning those needs into something we already built.
          </GridListItem>
          <GridListItem title="Honest">
            We are transparent about all of our processes, banking on the simple
            fact our clients never actually read anything.
          </GridListItem>
          <GridListItem title="Loyal">
            We foster long-term relationships with our clients that go beyond
            just delivering a product, allowing us to invoice them for decades.
          </GridListItem>
          <GridListItem title="Innovative">
            The technological landscape is always evolving and so are we. We are
            constantly on the lookout for new open source projects to clone.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata = {
  title: 'Services',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Services" title="What we offer">
        <p>
          We believe in efficiency and maximizing our resources to provide the
          best value to our clients.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
        <ML />
        <DE />
        <DV />
        <P />
      </div>

      <Values />

      <ContactSection />
    </>
  )
}
