import React from 'react';
import sculpture from '../../assets/img/sculpture-image.jpg';
import moss from '../../assets/img/moss.jpg';
import laptop from '../../assets/img/laptop.jpg';
import turtle from '../../assets/img/turtle.jpg';
import './About.css';
class About extends React.Component {
    render() {
        return (
            <section className="about__me"
                id="about">
                <div className="section__intro">
                    <h2 className="section__heading">About.</h2>
                    <p className="section__description">Get to know me</p>
                </div>
                <div className="about__div-container profile-data__container">
                    <div className="profile__data profile__image">

                    </div>
                    <div className="profile__data profile__description">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem impedit aperiam nam hic eos laudantium, ut facere consequuntur ullam voluptates suscipit, atque odio. Quia nobis ipsum expedita iusto impedit repellendus!</p>
                    </div>
                </div>
                <div className="about__right about__div-container"
                    id="about__create">
                    <div className="description">
                        <h3>Creating</h3>
                        <p>Have you ever come accross something, a service, an item, a game even, that made you think <q
                            className="quote"><span className="quotemark">"</span> I need this in my life, I'm so grateful it
                       exists!<span className="quotemarks">"</span></q>?</p>
                        <p>My goal in life is to create something that will last, something that will be of use to
                        people in their daily lives. Hence why I embarked on the Software Developer path, learning new things every day in order to
                   be able to one day create <span className="emphasis">MY THING</span>.</p>
                    </div>
                    <div className="slider">
                        <img src={sculpture} alt="Image of a male and female sculpture." />
                    </div>
                </div>

                <div className="about__left about__div-container"
                    id="about__photography">
                    <div className="slider">
                        <img src={moss} alt="Image moss closeup." />
                    </div>
                    <div className="description">
                        <h3>Photography 101</h3>
                        <p>To me Photography is a way of taking a shot of the world from a personal perspective. It is a
                        fact that all of us see the world differently. No one person sees the same thing when they
                   look at the same thing.</p>
                        <p>As a person who sees exosystems in ecosystems and entire cultures in the tiniest of places,
                   Photography gives me a way of sharing my perspective with others.</p>
                   <p>PS: This is just moss</p>
                    </div>
                </div>
                <div className="about__right about__div-container"
                    id="about__coding">
                    <div className="description">
                        <h3>Programming</h3>
                        <p>If you read the first paragraph, you would know that I love creating things. It's therefore
                   sensible why I love Programming.</p>
                        <p>Programming is one of the ways that give way to creativity and creation. </p>
                    </div>
                    <div className="slider">
                    <img src={laptop} alt="Image of a laptop." />
                    </div>
                </div>
                <div className="about__left about__div-container"
                    id="about__nature">
                    <div className="slider">
                    <img src={turtle} alt="Image of a turtle."/>
                    </div>
                    <div className="description">
                        <h3>Animals &#38; Nature</h3>
                        <p>The Earth is what provides us with everything we need in order to live a happy and fulfilling
                   life.</p>
                        <p>I strive to reconnect with nature and its beauty. Nature and animals are one of the things
                   that keep me going.</p>
                    </div>
                </div>
            </section>
        );
    }
}
export default About;