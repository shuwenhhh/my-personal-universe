import {
  ArrowUpRight, Asterisk, CaretLeft, CaretRight, Cat,
  FilePdf, Heart, House,
} from "@phosphor-icons/react";
import { useState } from "react";

const catPhotos = [
  { src: "/cat-gallery/milk-cat-01.jpg", title: "SUNBEAM", note: "A tiny tongue, a very serious pose." },
  { src: "/cat-gallery/milk-cat-02.png", title: "HELLO, CLOSE-UP", note: "Curiosity arrived before the camera was ready.", crop: "close-crop" },
  { src: "/cat-gallery/milk-cat-03.jpg", title: "MOVIE NIGHT", note: "The smallest audience member has the best seat." },
  { src: "/cat-gallery/milk-cat-04.jpg", title: "NAP MODE", note: "Soft paws, green velvet, zero responsibilities." },
];

const workProjects = [
  { title: "AlphaEngine", url: "https://github.com/shuwenhhh/AlphaEngine" },
  { title: "DigestTool", url: "https://github.com/shuwenhhh/DigestTool" },
  { title: "PPTAgent", url: "https://github.com/shuwenhhh/PPTAgent" },
];

export function App() {
  const [view, setView] = useState("home");
  const [activePhoto, setActivePhoto] = useState(0);
  const [catLaunching, setCatLaunching] = useState(false);
  const [activeWorkProject, setActiveWorkProject] = useState(0);
  const [creativeProject, setCreativeProject] = useState(0);

  const openView = (nextView) => {
    setView(nextView);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const showGallery = () => {
    if (catLaunching) return;
    setCatLaunching(true);
    window.setTimeout(() => {
      openView("gallery");
      setCatLaunching(false);
    }, 520);
  };

  const changePhoto = (direction) => {
    setActivePhoto((current) => (current + direction + catPhotos.length) % catPhotos.length);
  };

  const currentPhoto = catPhotos[activePhoto];

  return (
    <main>
      {view === "home" && <section className="hero" id="home">
        <div className="meteor-field" aria-hidden="true">
          <img className="meteor meteor-one" src="/crayon-meteor.png" alt="" />
          <img className="meteor meteor-two" src="/crayon-meteor.png" alt="" />
          <img className="meteor meteor-three" src="/crayon-meteor.png" alt="" />
        </div>
        <div className="hero-copy">
          <div className="hero-brand"><span className="brand-dot">S</span><span>SHUWEN'S<br /><small>LITTLE UNIVERSE</small></span></div>
          <h1>WELCOME TO<br />MY PLANET</h1>
          <p className="role-title"><span>AI</span> PRODUCT <em>STORYTELLER</em></p>
          <p className="role-cn">AI PRODUCT NARRATIVE</p>
          <p className="hello-line">Hello, I'm Shuwen.</p>
          <p className="hero-tags">AI TECH — USER INSIGHT — CONTENT — BRAND</p>
          <nav className="planet-navigation" aria-label="Explore my planet">
            <button className="planet-link planet-ai" onClick={() => openView("work")} aria-label="Open AI works">
              <img src="/planet-ai-works.png" alt="" /><strong>AI WORKS</strong><small>IDEAS MEET INTELLIGENCE</small>
            </button>
            <button className="planet-link planet-creative" onClick={() => openView("creative")} aria-label="Open creative work">
              <img src="/planet-creative.png" alt="" /><strong>CREATIVE</strong><small>TURNING IDEAS INTO COLOR</small>
            </button>
            <button className="planet-link planet-journey" onClick={() => openView("notes")} aria-label="Open my journey">
              <img src="/planet-journey.png" alt="" /><strong>JOURNEY</strong><small>A BRIGHTER TOMORROW</small>
            </button>
            <button className="planet-link planet-resume" onClick={() => openView("experience")} aria-label="Open my resume">
              <img src="/planet-resume.png" alt="" /><strong>RESUME</strong><small>A RECORD OF GROWTH</small>
            </button>
          </nav>
        </div>
        <div className={`hero-art${catLaunching ? " cat-launching" : ""}`} aria-label="A little astronaut girl and her tuxedo cat on a purple planet">
          <img src="/shuwen-astronaut-with-cow-cat-hero.png" alt="Shuwen as a flower-haired astronaut with her black-and-white tuxedo cat" />
          <button className="cat-hotspot" onClick={showGallery} aria-label="Open my cat photo garden" aria-busy={catLaunching}>
            <span className="sr-only">Open my cat photo garden</span>
          </button>
          <div className="orbit-note note-left">little explorer</div>
          <div className="orbit-note note-right">big dreamer</div>
        </div>
        <div className="corner-mark" aria-hidden="true">
          <span>01</span><span>PERSONAL<br />UNIVERSE</span>
        </div>
      </section>}

      {view === "gallery" && <section className="cat-gallery-page" id="cat-gallery" aria-labelledby="cat-gallery-title">
        <div className="gallery-meteor-field" aria-hidden="true">
          <img className="meteor meteor-one" src="/crayon-meteor.png" alt="" />
          <img className="meteor meteor-two" src="/crayon-meteor.png" alt="" />
          <img className="meteor meteor-three" src="/crayon-meteor.png" alt="" />
        </div>
        <header className="gallery-toolbar">
          <button className="gallery-home" onClick={() => openView("home")}><House weight="bold" /> BACK TO MY PLANET</button>
          <h2 className="sr-only" id="cat-gallery-title">My Cat Photo Garden</h2>
          <div className="gallery-count" aria-live="polite"><strong>{String(activePhoto + 1).padStart(2, "0")}</strong><span>/ {String(catPhotos.length).padStart(2, "0")}</span></div>
        </header>

        <div className="gallery-stage" aria-label="Cat photo gallery">
          <div className="portrait-shell">
            <button className="photo-window" onClick={() => changePhoto(1)} aria-label="Show the next cat photo">
              <img className={currentPhoto.crop || ""} key={currentPhoto.src} src={currentPhoto.src} alt={`${currentPhoto.title}: Shuwen's black-and-white tuxedo cat`} />
            </button>
            <img className="oil-frame" src="/cat-gallery-space-frame.png" alt="" aria-hidden="true" />
          </div>
          <button className="gallery-arrow arrow-left" onClick={() => changePhoto(-1)} aria-label="Previous cat photo"><CaretLeft weight="bold" /></button>
          <button className="gallery-arrow arrow-right" onClick={() => changePhoto(1)} aria-label="Next cat photo"><CaretRight weight="bold" /></button>
          <div className="gallery-dots" aria-hidden="true">{catPhotos.map((photo, index) => <span className={index === activePhoto ? "active" : ""} key={photo.src} />)}</div>
        </div>
      </section>}

      {view === "work" && <><button className="subview-home light-back" onClick={() => openView("home")}><House weight="bold" /> BACK TO MY PLANET</button><section className="travel-work" id="work">
        <div className="ai-works-banner">
          <figure className="ai-works-scene">
            <img src="/ai-works-giant-laptop.png" alt="Tiny Shuwen and her tuxedo cat sitting together in front of a giant laptop beneath a crayon starry sky" />
            <div className="screen-project-links" aria-label="Featured GitHub projects">
              <a
                className="screen-project-title"
                href={workProjects[activeWorkProject].url}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${workProjects[activeWorkProject].title} on GitHub`}
              >
                <strong key={activeWorkProject}>{workProjects[activeWorkProject].title}</strong>
                <small>VIEW ON GITHUB <ArrowUpRight weight="bold" /></small>
              </a>
              <div className="screen-project-controls">
                <span>{String(activeWorkProject + 1).padStart(2, "0")} / {String(workProjects.length).padStart(2, "0")}</span>
                <button
                  type="button"
                  onClick={() => setActiveWorkProject((activeWorkProject + 1) % workProjects.length)}
                  aria-label="Show the next project"
                >
                  NEXT PROJECT <CaretRight weight="bold" />
                </button>
              </div>
            </div>
          </figure>
        </div>
      </section></>}

      {view === "creative" && <><button className="subview-home light-back" onClick={() => openView("home")}><House weight="bold" /> BACK TO MY PLANET</button><section className="creative-canvas-page" id="creative">
        <figure className="creative-canvas-scene">
          <img src="/creative-giant-canvas.png" alt="Tiny Shuwen and her tuxedo cat painting together beneath a giant canvas in a crayon starry universe" />
          <button className={`canvas-page with-project-image${creativeProject === 1 ? " portrait-project" : ""}`} onClick={() => setCreativeProject((creativeProject + 1) % 2)} aria-label="Turn the canvas to the next creative project">
            <span className={`canvas-project-title${creativeProject === 0 ? " long-title" : ""}`} key={creativeProject}>{creativeProject === 0 ? "Catastrophe" : "MediStar"}</span>
            <img
              className="canvas-project-image"
              key={`${creativeProject}-image`}
              src={creativeProject === 0 ? "/catastrophe-project.png" : "/medistar-project.png"}
              alt={creativeProject === 0 ? "Catastrophe project artwork featuring a playful tuxedo cat" : "MediStar medication companion home screen"}
            />
            <small>CLICK TO TURN THE PAGE</small>
          </button>
        </figure>
      </section></>}

      {view === "experience" && <><button className="subview-home" onClick={() => openView("home")}><House weight="bold" /> BACK TO MY PLANET</button><section className="experience-section" id="experience">
        <div className="experience-intro">
          <p className="eyebrow dark"><Asterisk weight="bold" /> EXPERIENCE</p>
          <h2>BUILDING AI<br /><span>WITH A HUMAN SIDE.</span></h2>
          <p>I am a machine learning engineer who turns complex technology into useful, understandable experiences. My work moves between LLM agents, retrieval systems, scientific computing, and user-facing products — always with a focus on reliability, clarity, and the people using what I build.</p>
          <p className="education-line">M.S. Computer Science, Northeastern University · B.S. Applied Mathematics, University of Washington</p>
          <a className="resume-link" href="/Shuwen-Wang-Resume.pdf" target="_blank" rel="noreferrer"><FilePdf weight="bold" /> VIEW FULL RESUME <ArrowUpRight weight="bold" /></a>
        </div>
        <div className="experience-list">
          <article className="experience-item">
            <div><span>2024 — NOW</span><strong>LEXISNEXIS</strong></div>
            <div><h3>Machine Learning Engineer</h3><p>Building LLM-powered multi-agent systems, RAG pipelines, and model orchestration strategies for complex analytical workflows — then studying performance and user behavior to make every result more accurate and dependable.</p></div>
          </article>
          <article className="experience-item">
            <div><span>2024</span><strong>BIOGEN</strong></div>
            <div><h3>Software Engineer</h3><p>Developed Roshambo, an open-source molecular alignment and 3D similarity system accelerated with C++ and CUDA, while contributing deep-learning models and scalable AWS infrastructure to molecular informatics research.</p></div>
          </article>
          <article className="experience-item">
            <div><span>2022</span><strong>GROWTH CHANNEL</strong></div>
            <div><h3>Software Engineer</h3><p>Created React analytics experiences for more than 2,000 users, developed serverless AWS services, and led a distributed ten-person Scrum team across multiple countries.</p></div>
          </article>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-title"><span>ABOUT ME</span><h2>I DRAW IDEAS,<br />AND DESIGN PRODUCTS.</h2></div>
        <div className="about-copy"><Cat weight="duotone" /><p>I build intelligent products at the intersection of engineering, research, and storytelling. From multi-agent financial analysis to computational drug discovery and automated presentation design, I enjoy making ambitious technical ideas feel clear, thoughtful, and genuinely useful.</p><a href="mailto:shuwenwang97@gmail.com">SHUWENWANG97@GMAIL.COM <ArrowUpRight weight="bold" /></a></div>
      </section></>}

      {view === "notes" && <><button className="subview-home light-back" onClick={() => openView("home")}><House weight="bold" /> BACK TO MY PLANET</button><section className="notes-section" id="notes">
        <div className="note-visual" aria-hidden="true"><div className="paper-sheet sheet-back"></div><div className="paper-sheet sheet-front"><span>NOTE 029</span><Heart weight="fill" /><p>TAKE IT SLOW.<br />YOU'RE STILL MOVING.</p></div></div>
        <div className="notes-copy">
          <p className="eyebrow"><Asterisk weight="bold" /> LATEST NOTE</p><h2>COLLECTING<br /><span>LITTLE MOMENTS.</span></h2>
          <p>I keep the things that do not quite fit inside a portfolio: a road, a cat, and the instant when a thought finally makes sense.</p>
          <button className="primary-button light" onClick={() => alert("The notebook is still growing. Thanks for stopping by!")}>READ THE LATEST NOTE <ArrowUpRight weight="bold" /></button>
        </div>
      </section></>}
    </main>
  );
}
