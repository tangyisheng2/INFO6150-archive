import { useState } from 'react';

function Accordion({ data }) {
    const [expandedAccordion, setExpandedAccordion] = useState({});

    return (
        <div className="home__accordion">
            <h1>FAQ</h1>
            <ul className="home-accordion__list">
                <li className="home-accordion__item">
                    <button
                        onClick={() =>
                            setExpandedAccordion({
                                ...expandedAccordion,
                                about: !expandedAccordion['about'],
                            })
                        }
                        className={`home-accordion__title ${!expandedAccordion['about'] ? 'collapse' : 'expand'}`}
                    >
                        About me
                    </button>
                    <div
                        className={`home-accordion-item__body ${
                            !expandedAccordion['about'] ? 'hide' : ''
                        }`}
                    >
                        <p>👋Hi, welcome to my gallery.</p>
                        <p>👨‍🎓I am Eason from Northeastern Univerisity</p>
                        <p>⌨️I am mostly a programmer</p>
                        <p>
                            📷But this site is mostly used to share some of my
                            photographies
                        </p>
                        <p>😄Feel free to look around</p>
                        <p>📺And don't forget to subscribe my socal media!</p>
                        <p>📰and also the Newsletter</p>
                    </div>
                </li>
                <li
                    onClick={() =>
                        setExpandedAccordion({
                            ...expandedAccordion,
                            contact: !expandedAccordion['contact'],
                        })
                    }
                    className="home-accordion__item"
                >
                    <button className={`home-accordion__title ${!expandedAccordion['contact'] ? 'collapse' : 'expand'}`}>Contacts</button>
                    <div
                        className={`home-accordion-item__body ${
                            !expandedAccordion['contact'] ? 'hide' : ''
                        }`}
                    >
                        <a href="tangyisheng2@hotmail.com">Email</a>
                    </div>
                </li>
                <li className="home-accordion__item">
                    <button
                        onClick={() =>
                            setExpandedAccordion({
                                ...expandedAccordion,
                                share: !expandedAccordion['share'],
                            })
                        }
                        className={`home-accordion__title ${!expandedAccordion['share'] ? 'collapse' : 'expand'}`}
                    >
                        Share
                    </button>
                    <div
                        className={`home-accordion-item__body ${
                            !expandedAccordion['share'] ? 'hide' : ''
                        }`}
                    >
                        <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Itaque dolore porro nostrum at quae possimus
                            quod nihil! Recusandae vitae corrupti ipsum
                            obcaecati iusto, animi placeat, totam suscipit rem
                            quam magni?
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}
export default Accordion;
