// InterviewPrepAi/frontend/src/Pages/Tips/TipsAndTricks.jsx

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { FaRocket } from "react-icons/fa";
import { FiBriefcase, FiHelpCircle, FiUsers, FiCheck } from "react-icons/fi";

import TipsCard from "../../components/Tips/TipsAndTricks";
import Footer from "../../components/landingPage/Footer";
import "../../styles/tips.css";

import tips1Image from "../../assets/tips1.webp";
import tips2Image from "../../assets/tips2.webp";
import tips3Image from "../../assets/tips3.webp";

function TipsAndTricks() {

    const navigate = useNavigate();

    const tips = [
        {
            icon: <FiBriefcase />,
            title: "Research the company",
            text: "Spend time researching the company. This can help you tailor responses to questions and demonstrate your enthusiasm for the job."
        },
        {
            icon: <FiHelpCircle />,
            title: "Practice common questions",
            text: "Think of possible questions that can be asked and practice your answers, or simply use our interview preparations for a perfect job interview preparation."
        },
        {
            icon: <FiUsers />,
            title: "Present yourself professionally",
            text: "Dress appropriately, maintain eye contact, and speak clearly and confidently. Non-verbal cues can also play a significant role."
        }
    ];

    const communicationPoints = [
        "Listen actively",
        "Provide clear answers",
        "Maintain good non-verbal communication",
        "Stay positive and avoid negative comments",
        "Always maintain a confident and friendly tone",
        "Use examples to illustrate your skills"
    ];

    useEffect(() => {

        const revealElements = document.querySelectorAll(".reveal");
        const factsSection = document.querySelector(".reveal-facts");

        const observer = new IntersectionObserver((entries) => {

            entries.forEach((entry) => {

                if (!entry.isIntersecting) return;

                entry.target.classList.add("active");

                if (entry.target.classList.contains("reveal-facts")) {

                    const counters = document.querySelectorAll(".counter");

                    counters.forEach((counter) => {

                        const target = +counter.getAttribute("data-target");
                        let count = 0;

                        const updateCounter = () => {

                            const increment = target / 60;

                            if (count < target) {
                                count += increment;
                                counter.innerText = Math.ceil(count);
                                setTimeout(updateCounter, 20);
                            } else {
                                counter.innerText = target + "%";
                            }

                        };

                        updateCounter();
                    });

                }

                observer.unobserve(entry.target);

            });

        }, { threshold: 0.2 });

        revealElements.forEach(el => observer.observe(el));
        if (factsSection) observer.observe(factsSection);

    }, []);


    const handleStart = () => {

        const token = localStorage.getItem("token");

        if (token) {
            navigate("/dashboard");
        } else {
            navigate("/login");
        }

    };


    return (

        <div className="tips-page-bg">

            {/* HERO */}

            <section className="tips-hero">

                <div className="tips-container">

                    <h1 className="tips-title">
                        The Best Tips & Tricks to Ace Your <span>Job Interview.</span>
                    </h1>

                    <p className="tips-subtitle">
                        We help you get started with the best tips & tricks so you can enter your job interview with full confidence.
                    </p>

                </div>

            </section>


            {/* TIPS CARDS */}

            <section className="tips-section">

                <div className="tips-grid reveal">

                    {tips.map((tip, index) => (
                        <TipsCard key={index} {...tip} />
                    ))}

                </div>

            </section>


            {/* COMMUNICATION SECTION */}

            <section className="communication-section">

                <div className="communication-container">

                    {/* FIRST BLOCK */}

                    <div className="communication-block reveal">

                        <div className="communication-left">

                            <h2>
                                Achieve success with powerful <span>communication.</span>
                            </h2>

                            <p>
                                You make a perfect first impression with powerful communication.
                                Choose your words carefully, create a dialogue, showcase your skills,
                                and let your personality shine.
                            </p>

                            <div className="communication-list">

                                {communicationPoints.map((item, index) => (

                                    <div key={index} className="communication-item">

                                        <div className="check-icon">
                                            <FiCheck />
                                        </div>

                                        <span>{item}</span>

                                    </div>

                                ))}

                            </div>

                        </div>

                        <div className="communication-right">
                            <img src={tips1Image} alt="communication illustration" />
                        </div>

                    </div>


                    {/* NERVES SECTION */}

                    <div className="nerves-section reveal">

                        <div className="nerves-left">
                            <img src={tips2Image} alt="control nerves" />
                        </div>

                        <div className="nerves-right">

                            <h2>
                                Stay in control of yourself and your <span>nerves.</span>
                            </h2>

                            <p>
                                It's completely normal to feel nervous before a job interview,
                                but it can negatively impact your performance.
                                That's why it's important to keep your nerves under control.
                            </p>

                            <div className="nerves-list">

                                {[
                                    "Preparation is key, so ensure excellent preparation",
                                    "Arrive 10 to 15 minutes early",
                                    "Practice mindfulness and breathing techniques to stay calm",
                                    "Stay confident by reminding yourself of your skills and successes"
                                ].map((item, index) => (

                                    <div key={index} className="nerves-item">

                                        <div className="check-icon">
                                            <FiCheck />
                                        </div>

                                        <span>{item}</span>

                                    </div>

                                ))}

                            </div>

                        </div>

                    </div>


                    {/* INTERVIEWERS SECTION */}

                    <div className="interviewer-section reveal">

                        <div className="interviewer-left">

                            <h2>
                                Know your <span>interviewers.</span>
                            </h2>

                            <p>
                                If you know who your interviewers are, you can tailor your answers to their
                                background and expectations. This increases your chances of making a lasting
                                impression and makes your interview more personal.
                            </p>

                            <div className="interviewer-list">

                                {[
                                    {
                                        title: "Research your interviewers",
                                        text: "Look up your interviewers on LinkedIn to learn more about their background and skills."
                                    },
                                    {
                                        title: "Prepare questions based on your interviewers",
                                        text: "By preparing specific questions that you can expect from your interviewers."
                                    },
                                    {
                                        title: "Prepare questions you can ask to your interviewers",
                                        text: "Think of specific questions to ask your interviewers that will capture their interest."
                                    }
                                ].map((item, index) => (

                                    <div key={index} className="interviewer-item">

                                        <div className="check-icon">
                                            <FiCheck />
                                        </div>

                                        <div>

                                            <h4>{item.title}</h4>
                                            <p>{item.text}</p>

                                        </div>

                                    </div>

                                ))}

                            </div>

                        </div>

                        <div className="interviewer-right">
                            <img src={tips3Image} alt="interviewer research" />
                        </div>

                    </div>

                </div>

            </section>

            {/* FACTS SECTION */}

            <section className="facts-section reveal-facts">

                <div className="facts-header">

                    <h2>Interesting Facts to Keep in Mind</h2>

                    <p>Some key figures you definitely don't want to miss.</p>

                </div>

                <div className="facts-grid">

                    {[67, 71, 91].map((value, index) => (
                        <div key={index} className="fact-card">
                            <h3 className="counter" data-target={value}>0</h3>
                            <p>
                                {index === 0 && "Of all job interviews turn out more positively when the candidate maintains eye contact with the interviewers."}
                                {index === 1 && "Of all employers reject candidates who do not dress appropriately for their job interview."}
                                {index === 2 && "Of all employers strongly prefer candidates with relevant work experience."}
                            </p>
                        </div>
                    ))}

                </div>

            </section>

            {/* DO'S AND DON'TS SECTION */}

            <section className="dosdonts-section">

                <div className="dosdonts-container">

                    {/* DO'S */}

                    <div className="dos-column">

                        <h2>Do's</h2>

                        <div className="dosdonts-list">

                            {[
                                {
                                    title: "Show your enthusiasm",
                                    text: "Show your interest in the role and the company, and demonstrate your enthusiasm."
                                },
                                {
                                    title: "Articulate your value",
                                    text: "Clearly state what you bring to the table by showing how you are a strong candidate."
                                },
                                {
                                    title: "Show your initiative",
                                    text: "Highlight moments when you proactively seized opportunities and solved problems."
                                },
                                {
                                    title: "Ask questions",
                                    text: "By asking questions, you emphasize your interest and commitment to the company."
                                }
                            ].map((item, index) => (

                                <div key={index} className="dosdonts-item">

                                    <div className="check-icon">
                                        <FiCheck />
                                    </div>

                                    <div>
                                        <h4>{item.title}</h4>
                                        <p>{item.text}</p>
                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>


                    {/* DON'TS */}

                    <div className="dont-column">

                        <h2>Don'ts</h2>

                        <div className="dosdonts-list">

                            {[
                                {
                                    title: "Don't be late",
                                    text: "Punctuality is crucial, so aim to arrive 10-15 minutes early to avoid negative impressions."
                                },
                                {
                                    title: "Don't lie or exaggerate",
                                    text: "Be honest about your skills and experiences. Misrepresenting yourself can backfire."
                                },
                                {
                                    title: "Don't forget to listen",
                                    text: "Active listening is just as important as speaking. Ensure you understand the questions."
                                },
                                {
                                    title: "Don't be too confident",
                                    text: "Confidence is good, but arrogance is a turn-off. Try to find a good balance."
                                }
                            ].map((item, index) => (

                                <div key={index} className="dosdonts-item">

                                    <div className="cross-icon">
                                        ✕
                                    </div>

                                    <div>
                                        <h4>{item.title}</h4>
                                        <p>{item.text}</p>
                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>

                </div>

            </section>

            {/* CTA */}

            <section className="cta-section">

                <div className="cta-container">

                    <h2>
                        Perfectly Prepare Yourself for Your Next Job Interview?
                    </h2>

                    <p>
                        Let's get started and make your job interview a great success!
                    </p>

                    <button className="cta-button" onClick={handleStart}>
                        <FaRocket />
                        Get Started for Free
                    </button>

                </div>

            </section>


            <Footer />

        </div>

    );

}

export default TipsAndTricks;