import { Page, Name } from '../components/page'
import styles from '../styles/Resume.module.css'
import Layout from '../components/layouts/article'
import { Box, Heading, Image, Link, useColorModeValue } from '@chakra-ui/react'

const Resume = () => (
    <Layout>
        <Page >
            <Name>Stéphane Gelibert</Name>
            <Box className={styles["description"]}
                color={useColorModeValue('teal', 'glassTeal')}
            >
                <span className={styles["description-emphasize"]}>Computer engineering student</span>, specializing in <span className={styles["description-emphasize"]}>cybersecurity</span>
            </Box>

            <div className={styles["contact"]}>
                <Link className={styles["contact-item"]} target="_blank" href="https://www.google.com/maps/place/Paris/@48.864872,2.2183041,11z/data=!4m5!3m4!1s0x47e66e1f06e2b70f:0x40b82c3688c9460!8m2!3d48.856614!4d2.3522219">
                    <span className={styles["icon-font"]}>
                        location_on
                    </span> Paris, France
                </Link>

                <Link className={styles["contact-item"]} target="_blank" href="/">
                <span className={styles["icon-font"]}>
                    language
                </span> stephanegelibert.com
                </Link>

                <Link className={styles["contact-item"]} target="_blank" href="mailto:contact@stephanegelibert.com">
                    <span className={styles["icon-font"]}>
                        mail
                    </span> contact@stephanegelibert.com
                </Link>

                <Link className={styles["contact-item"]} target="_blank" href="https://www.linkedin.com/in/stephane-gelibert/">
                    <span className={styles["icon-font-brand"]}></span> stephane-gelibert
                </Link>
            </div>

            <div className={styles["section"]}>
                <Heading variant="section-title">
                    Education
                </Heading>

                <div className={styles["education"]}>
                    <div className={styles["item"]}>
                        <div className={styles["subtitle"]}>
                            <span className={styles["emphasize"]}><Link target="_blank" href="https://www.epita.fr/en/">École Pour l'Informatique et les Techniques Avancées - EPITA</Link></span>
                            &nbsp;(M.Eng. in Computer Science)
                        </div>

                        <div className={styles["education-icons"]}>
                            <div className={styles["location"]}>
                                <span className={styles["icon-font"]}>
                                    location_on
                                </span> Paris, France
                            </div>
                            <div className={styles["date"]}>
                                <span className={styles["icon-font"]}>
                                    calendar_month
                                </span> Sep. 2018 - Sep. 2024
                            </div>
                        </div>

                        <div className={styles["text"]}>
                            <ul>
                                <li>System, Network, Cybersecurity (SRS major)</li>
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
                                <span className={styles["emphasize"]}>Software Engineer Intern</span> at <Link target="_blank" rel="nofollow noopener noreferrer" href="https://odin-vision.com">Odin Vision</Link>
                            </div>
                            <div className={styles["experience-icons"]}>
                                <div className={styles["location"]}>
                                    <span className={styles["icon-font"]}>
                                        location_on
                                    </span> London, UK
                                </div>
                                <div className={styles["date"]}>
                                    <span className={styles["icon-font"]}>
                                        calendar_month
                                    </span> Sept. 2022 - Jan. 2023
                                </div>
                            </div>
                        </div>
                        <div className={styles["text"]}>
                            <ul>
                                <li>Worked on the company's main product called CADDIE by developing new features and fixing bugs.</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles["experience-image"]}>
                        <Image src="/images/resume/odin_logo.png" alt="icon-ov" />
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
                                C, C++, C#, Python, Java, JavaScript
                            </span>
                        </div>
                        <div className={styles["skills-header"]}>
                            <span className={styles["emphasize"]}>Tools</span>
                            <span className={styles["skills-list"]}>
                                Git, Docker, Shell, GNU Make, VS Code, JetBrains IDEs, Microsoft Office, LaTeX
                            </span>
                        </div>
                        <div className={styles["skills-header"]}>
                            <span className={styles["emphasize"]}>Databases</span>
                            <span className={styles["skills-list"]}>
                                PostgreSQL
                            </span>
                        </div>
                        <div className={styles["skills-header"]}>
                            <span className={styles["emphasize"]}>Operating Systems</span>
                            <span className={styles["skills-list"]}>
                                Windows, Linux
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
                                    <span className={styles["emphasize"]}>Tiger Compiler</span>
                                    <Image className={styles["projects-image"]} src="/images/resume/Cplusplus.svg" alt="Cplusplus" />
                                </div>
                                <div className={styles["date"]}>
                                    <span className={styles["icon-font"]}>
                                        calendar_month
                                    </span> Mar. 2022 - Apr. 2023
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
                                    <span className={styles["emphasize"]}>JWS</span>
                                    <Image className={styles["projects-image"]} src="/images/resume/Cplusplus.svg" alt="Cplusplus" />
                                </div>
                                <div className={styles["date"]}>
                                    <span className={styles["icon-font"]}>
                                        calendar_month
                                    </span> Fev. 2022
                                </div>
                            </div>
                            <div className={styles["text"]}>
                                Implementation of a Rest API, working in conjunction with a
                                PostgreSQL database.
                            </div>
                        </div>
                    </div>

                    <div className={styles["project"]}>
                        <div className={styles["projects-content"]}>
                            <div className={styles["projects-header"]}>
                                <div className={styles["subtitle"]}>
                                    <span className={styles["emphasize"]}>42sh</span>
                                    <Image className={styles["projects-image"]} src="/images/resume/Cplusplus.svg" alt="Cplusplus" />
                                </div>
                                <div className={styles["date"]}>
                                    <span className={styles["icon-font"]}>
                                        calendar_month
                                    </span> Nov. 2021 - Dec. 2021
                                </div>
                            </div>
                            <div className={styles["text"]}>
                                POSIX shell written within a group of 4 students.
                            </div>
                        </div>
                    </div>

                    <div className={styles["project"]}>
                        <div className={styles["projects-content"]}>
                            <div className={styles["projects-header"]}>
                                <div className={styles["subtitle"]}>
                                    <span className={styles["emphasize"]}>OCR</span>
                                    <Image className={styles["projects-image"]} src="/images/resume/Cplusplus.svg" alt="Cplusplus" />
                                </div>
                                <div className={styles["date"]}>
                                    <span className={styles["icon-font"]}>
                                        calendar_month
                                    </span> Sept. 2020 - Nov. 2020
                                </div>
                            </div>
                            <div className={styles["text"]}>
                                A simple OCR, used GTK3 and SDL2 for the GUI.
                            </div>
                        </div>
                    </div>

                    <div className={styles["project"]}>
                        <div className={styles["projects-content"]}>
                            <div className={styles["projects-header"]}>
                                <div className={styles["subtitle"]}>
                                    <span className={styles["emphasize"]}>Tales of Talris</span>
                                    <img className={styles["projects-image"]} src="/images/resume/Cplusplus.svg" alt="Cplusplus" />
                                </div>
                                <div className={styles["date"]}>
                                    <span className={styles["icon-font"]}>
                                        calendar_month
                                    </span> Feb. 2019 - May 2019
                                </div>
                            </div>
                            <div className={styles["text"]}>
                                A 3D multiplayer game done using Unity.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles["section"]}>
                ... and many more on my <Link target="_blank" href="https://github.com/ShinysArc" >GitHub</Link> / <Link href="/">website</Link>.
            </div>
        </Page>
    </Layout>
)

export default Resume