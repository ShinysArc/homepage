import { Page, Name } from '../components/page'
import styles from '../styles/Resume.module.css'
import Layout from '../components/layouts/article'
import { IoCalendarOutline, IoGlobeOutline, IoLocationOutline, IoLogoLinkedin, IoMailOutline } from 'react-icons/io5'
import { Box, Button, Heading, Image, Link, useColorModeValue } from '@chakra-ui/react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export const ResumeContent = () => (
    <div className={styles["resume"]}>
        <Page>
            <Name>Stéphane Gelibert</Name>
            <Box className={styles["description"]}
                color={useColorModeValue('teal', 'glassTeal')}
            >
                <span className={styles["description-emphasize"]}>Software Engineer</span>, specializing in <span className={styles["description-emphasize"]}>DevOps</span> and <span className={styles["description-emphasize"]}>Cloud</span>
            </Box>

            <div className={styles["contact"]}>
                <Link className={styles["contact-item"]} target="_blank" href="https://www.google.com/maps/place/Berlin">
                    <IoLocationOutline className={styles["icon-font"]} /> Berlin, Germany
                </Link>

                <Link className={styles["contact-item"]} target="_blank" href="/">
                    <IoGlobeOutline className={styles["icon-font"]} /> stephanegelibert.com
                </Link>

                <Link className={styles["contact-item"]} target="_blank" href="mailto:contact@stephanegelibert.com">
                    <IoMailOutline className={styles["icon-font"]} /> contact@stephanegelibert.com
                </Link>

                <Link className={styles["contact-item"]} target="_blank" href="https://www.linkedin.com/in/stephane-gelibert/">
                    <IoLogoLinkedin className={styles["icon-font"]} /> stephane-gelibert
                </Link>
            </div>

            <div className={styles["section"]}>
                <Heading variant="section-title">
                    Education
                </Heading>

                <div className={styles["education"]}>
                    <div className={styles["item"]}>
                        <div className={styles["subtitle"]}>
                            <span className={styles["emphasize"]}><Link target="_blank" href="https://www.epita.fr/en/">École Pour l&apos;Informatique et les Techniques Avancées - EPITA</Link></span>
                            &nbsp;(M.Eng. in Computer Science)
                        </div>

                        <div className={styles["education-icons"]}>
                            <div className={styles["location"]}>
                                <IoLocationOutline className={styles["icon-font"]} /> Paris, France
                            </div>
                            <div className={styles["date"]}>
                                <IoCalendarOutline className={styles["icon-font"]} /> Sep. 2018 - Aug. 2024
                            </div>
                        </div>

                        <div className={styles["text"]}>
                            <ul>
                                <li>Systems, Network, Security (SRS major)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles["section"]}>
                <Heading variant="section-title">
                    Experience
                </Heading>

                <div className={styles["experience"]}>
                    <div className={styles["experience-content"]}>
                        <div className={styles["experience-header"]}>
                            <div className={styles["subtitle"]}>
                                <span className={styles["emphasize"]}>Software Engineer</span> at <Link target="_blank" rel="nofollow noopener noreferrer" href="https://www.aws.amazon.com">Amazon Web Services</Link>
                            </div>
                            <div className={styles["experience-icons"]}>
                                <div className={styles["location"]}>
                                    <IoLocationOutline className={styles["icon-font"]} /> Berlin, DE
                                </div>
                                <div className={styles["date"]}>
                                    <IoCalendarOutline className={styles["icon-font"]} /> Oct. 2024 - Present
                                </div>
                            </div>
                        </div>
                        <div className={styles["text"]}>
                            <ul>
                                <li>
                                    Currently working on <Link target="_blank" rel="nofollow noopener noreferrer" href="https://aws.amazon.com/codebuild/">AWS CodeBuild</Link>, a fully managed continuous integration service that compiles source code, runs tests, and produces ready-to-deploy software packages.
                                </li>
                                <li>
                                    Worked on AWS MDE, a fully managed service that provides secure, scalable, and sandboxed compute containers for software development, powering and integrating with various AWS and third-party services.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles["experience-content"]}>
                        <div className={styles["experience-header"]}>
                            <div className={styles["subtitle"]}>
                                <span className={styles["emphasize"]}>Site Reliability Engineer Intern</span> at <Link target="_blank" rel="nofollow noopener noreferrer" href="https://www.criteo.com">Criteo</Link>
                            </div>
                            <div className={styles["experience-icons"]}>
                                <div className={styles["location"]}>
                                    <IoLocationOutline className={styles["icon-font"]} /> Paris, FR
                                </div>
                                <div className={styles["date"]}>
                                    <IoCalendarOutline className={styles["icon-font"]} /> Feb. 2024 - Aug. 2024
                                </div>
                            </div>
                        </div>
                        <div className={styles["text"]}>
                            <ul>
                                <li>
                                    Tasked with the integration of a new PostgreSQL database into the company&apos;s infrastructure leveraging Kubernetes orchestration
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles["experience-content"]}>
                        <div className={styles["experience-header"]}>
                            <div className={styles["subtitle"]}>
                                <span className={styles["emphasize"]}>Software Engineer Intern</span> at <Link target="_blank" rel="nofollow noopener noreferrer" href="https://odin-vision.com">Odin Vision</Link>
                            </div>
                            <div className={styles["experience-icons"]}>
                                <div className={styles["location"]}>
                                    <IoLocationOutline className={styles["icon-font"]} /> London, UK
                                </div>
                                <div className={styles["date"]}>
                                    <IoCalendarOutline className={styles["icon-font"]} /> Sept. 2022 - Jan. 2023
                                </div>
                            </div>
                        </div>
                        <div className={styles["text"]}>
                            <ul>
                                <li>
                                    Worked on the company&apos;s main product called CADDIE by developing new features and fixing bugs.
                                    Implemented a feature that improved the speed of tumor predictions by 9 times.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles["experience-content"]}>
                        <div className={styles["experience-header"]}>
                            <div className={styles["subtitle"]}>
                                <span className={styles["emphasize"]}>Core Team Member</span> at <Link target="_blank" rel="nofollow noopener noreferrer" href="https://gdsc.community.dev/epita/">GDSC EPITA</Link>
                            </div>
                            <div className={styles["experience-icons"]}>
                                <div className={styles["location"]}>
                                    <IoLocationOutline className={styles["icon-font"]} /> Le Kremlin-Bicêtre, FR
                                </div>
                                <div className={styles["date"]}>
                                    <IoCalendarOutline className={styles["icon-font"]} /> Sept. 2022 - Aug. 2023
                                </div>
                            </div>
                        </div>
                        <div className={styles["text"]}>
                            <ul>
                                <li>
                                    Google Developer Student Clubs are community-driven groups that are officially recognized by Google to help students interested in
                                    technology and development enhance their skills, collaborate on projects, and connect with industry professionals
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles["section"]}>
                <Heading variant="section-title">
                    Skills
                </Heading>

                <div className={styles["skills"]}>
                    <div className={styles["skills-content"]}>
                        <div className={styles["skills-header"]}>
                            <span className={styles["emphasize"]}>Programming</span>
                            <span className={styles["skills-list"]}>
                                Golang, C, C++, C#, Python, Java, JavaScript, TypeScript
                            </span>
                        </div>
                        <div className={styles["skills-header"]}>
                            <span className={styles["emphasize"]}>Tools</span>
                            <span className={styles["skills-list"]}>
                                AWS EC2, ECS, CloudFormation, Cloudwatch, CDK; VMWare ESXi, Ansible, Docker, Kubernetes
                            </span>
                        </div>
                        <div className={styles["skills-header"]}>
                            <span className={styles["emphasize"]}>Databases</span>
                            <span className={styles["skills-list"]}>
                                AWS S3, DynamoDB; PostgreSQL, MongoDB
                            </span>
                        </div>
                        <div className={styles["skills-header"]}>
                            <span className={styles["emphasize"]}>Operating Systems</span>
                            <span className={styles["skills-list"]}>
                                Windows, Linux, MacOS
                            </span>
                        </div>
                        <div className={styles["skills-header"]}>
                            <span className={styles["emphasize"]}>Languages</span>
                            <span className={styles["skills-list"]}>
                                French (native tongue), Chinese mandarin (maternal tongue), English
                                (TOEIC 965/990)
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles["section"]}>
                <Heading variant="section-title">
                    Projects
                </Heading>

                <div className={styles["projects"]}>
                    <div className={styles["project"]}>
                        <div className={styles["projects-content"]}>
                            <div className={styles["projects-header"]}>
                                <div className={styles["subtitle"]}>
                                    <span className={styles["emphasize"]}>ARS</span>
                                    <Image className={styles["projects-image"]} src="/images/resume/esxi.png" alt="Esxi" />
                                </div>
                                <div className={styles["date"]}>
                                    <IoCalendarOutline className={styles["icon-font"]} /> Feb. 2023 - Dec. 2023
                                </div>
                            </div>
                            <div className={styles["text"]}>
                                Creation of an infrastructure associated with an Active Directory, all virtualized on VMware ESXi.
                                Configuration of applications, security tools (MISP, Graylog, SNORT, etc.) and networks.
                            </div>
                        </div>
                    </div>

                    <div className={styles["project"]}>
                        <div className={styles["projects-content"]}>
                            <div className={styles["projects-header"]}>
                                <div className={styles["subtitle"]}>
                                    <span className={styles["emphasize"]}>Forum International de la Cybersécurité</span>
                                    <Image className={styles["projects-image"]} src="/images/resume/fic.png" alt="Fic" />
                                </div>
                                <div className={styles["date"]}>
                                    <IoCalendarOutline className={styles["icon-font"]} /> Mar. 2023 - Dec. 2023
                                </div>
                            </div>
                            <div className={styles["text"]}>
                                Creation of forensics challenges with different levels of difficulty (OSINT, Reverse, etc.).
                                The challenges will be presented for the ECC (European Cyber Cup) during the FIC (Forum International de la Cybersécurité).
                            </div>
                        </div>
                    </div>

                    <div className={styles["project"]}>
                        <div className={styles["projects-content"]}>
                            <div className={styles["projects-header"]}>
                                <div className={styles["subtitle"]}>
                                    <span className={styles["emphasize"]}>Tiger Compiler</span>
                                    <Image className={styles["projects-image"]} src="/images/resume/Cplusplus.svg" alt="Cplusplus" />
                                </div>
                                <div className={styles["date"]}>
                                    <IoCalendarOutline className={styles["icon-font"]} /> Mar. 2022 - Apr. 2022
                                </div>
                            </div>
                            <div className={styles["text"]}>
                                Compiler for the toy language <Link target="_blank" href="https://assignments.lrde.epita.fr/reference_manual/reference_manual.html">Tiger</Link>, used Flex/Bison.
                            </div>
                        </div>
                    </div>

                    <div className={styles["project"]}>
                        <div className={styles["projects-content"]}>
                            <div className={styles["projects-header"]}>
                                <div className={styles["subtitle"]}>
                                    <span className={styles["emphasize"]}>42sh</span>
                                    <Image className={styles["projects-image"]} src="/images/resume/C.svg" alt="C" />
                                </div>
                                <div className={styles["date"]}>
                                    <IoCalendarOutline className={styles["icon-font"]} /> Nov. 2021 - Dec. 2021
                                </div>
                            </div>
                            <div className={styles["text"]}>
                                POSIX shell written within a group of 4 students.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles["section"]}>
                ... and many more on my <Link target="_blank" href="https://github.com/ShinysArc" >GitHub</Link> / <Link href="/">website</Link>.
            </div>

            <div className={styles["footer"]}>
                An up-to-date version of this resume is available <Link target="_blank" href="https://stephanegelibert.com/resume">here</Link>.
            </div>
        </Page>
    </div>
)

const DownloadButton = () => {
    const theme = useColorModeValue('light', 'dark')
    const downloadUrl = `/api/download?theme=${theme}`
    return (
        <Box align="center" my={4}>
            <a href={downloadUrl} rel="noreferrer" target="_blank">
                <Button colorScheme="teal">
                    Download PDF
                </Button>
            </a>
        </Box>
    )
}

const Resume = () => (
    <Layout title="Resume">
        <ResumeContent />
        <DownloadButton />
    </Layout>
)

export async function getStaticProps({ locale }) {
    return {
        props: {
        ...(await serverSideTranslations(locale, [
            'common'
        ])),
        },
    }
}

export default Resume
