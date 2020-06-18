import React from 'react';
import './App.css';
import logo from "./images/Stellated-Dodecahedron-white.png"

const TITLE = "FAQs"

const App = () => {
    return (
        <div id="root">
            <header id="header-container">
                <div id="menu-icon"></div>
                <div id="header-logo"><a href="http://supernova.ac/"><img src={logo} id="logo"/></a></div>
                <div id="header-links"></div>
                <div id="title">
                    <h1>FREQUENTLY ASKED QUESTIONS</h1>
                </div>
            </header>
            <main id="main">
                <div class="question-block">
                    <h2 class="question">Who is SuperNova for?</h2>
                    <p class="answer">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sagittis lectus ac aliquet egestas. Aenean turpis risus, aliquet a ligula ut, euismod convallis sem. Mauris fermentum felis in nibh egestas pretium. Integer hendrerit urna mi, ut facilisis magna placerat et. Aenean sit amet ipsum vitae velit volutpat dapibus. Pellentesque sed neque et ipsum tincidunt volutpat id sit amet erat. Nullam eu accumsan justo.</p>
                </div>
                <div class="question-block">
                    <h2 class="question">Can I refund my donation?</h2>
                    <p class="answer">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sagittis lectus ac aliquet egestas. Aenean turpis risus, aliquet a ligula ut, euismod convallis sem. Mauris fermentum felis in nibh egestas pretium. Integer hendrerit urna mi, ut facilisis magna placerat et. Aenean sit amet ipsum vitae velit volutpat dapibus. Pellentesque sed neque et ipsum tincidunt volutpat id sit amet erat. Nullam eu accumsan justo.</p>
                </div>
                <div class="question-block">
                    <h2 class="question">Can I create more than one project at once?</h2>
                    <p class="answer">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sagittis lectus ac aliquet egestas. Aenean turpis risus, aliquet a ligula ut, euismod convallis sem. Mauris fermentum felis in nibh egestas pretium. Integer hendrerit urna mi, ut facilisis magna placerat et. Aenean sit amet ipsum vitae velit volutpat dapibus. Pellentesque sed neque et ipsum tincidunt volutpat id sit amet erat. Nullam eu accumsan justo.</p>
                </div>
            </main>
        </div>
    );
}

export default App;
