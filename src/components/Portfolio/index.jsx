import './index.scss'
import Loader from "react-loaders";

const Portfolio = () => {
    return(
      <>
        <div className="container portfolio-page">
            <h1>
            My Work
            </h1>
            <div className="projects-wrapper">
                {/* Single Project */}
                <div className="project-card">
                    <div className="project-img">
                        <img src="Projects/2-ecommerce-product-page/desktop-preview.jpg" alt="project-2" />
                    </div>
                    <div className="project-meta">
                        <h3>Sneakers Product Page</h3>
                        <div className="cta">
                            <button>
                                <a href="https://ecommerce-product-page-master.netlify.app" target="_blank" rel="noopener noreferrer">
                                    Live Site
                                </a>
                            </button>
                            <button>
                                <a href="https://github.com/M1RAK/ecommerce-product-page" target="_blank" rel="noopener noreferrer">
                                View Code
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
                {/* End of Single Project */}
                <div className="project-card">
                    <div className="project-img">
                        <img src="Projects/3-news-homepage/desktop-preview.jpg" alt="project-3" />
                    </div>
                    <div className="project-meta">
                        <h3>News HomePage</h3>
                        <div className="cta">
                            <button>
                                <a href="https://news-homepage-master.netlify.app/" target="_blank" rel="noopener noreferrer">
                                    Live Site
                                </a>
                            </button>
                            <button>
                                <a href="https://github.com/M1RAK/news-homepage-main" target="_blank" rel="noopener noreferrer">
                                View Code
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-img">
                        <img src="Projects/4-four-feature-card-section/desktop-preview.jpg" alt="project-3" />
                    </div>
                    <div className="project-meta">
                        <h3>Four Feature Landing Page</h3>
                        <div className="cta">
                            <button>
                                <a href="https://four-feature-page.netlify.app" target="_blank" rel="noopener noreferrer">
                                Live Site
                                </a>
                                </button>
                            {/* <button>View Code</button> */}
                        </div>
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-img">
                        <img src="Projects/1-advice-generator/desktop-preview.jpg" alt="project-1" />
                    </div>
                    <div className="project-meta">
                        <h3>Advice Generator</h3>
                        <div className="cta">
                            <button>
                                <a href="https://quotables.netlify.app" target="_blank" rel="noopener noreferrer">
                                Live Site
                                </a>
                               </button>
                            <button>
                                <a href="https://github.com/M1RAK/advice-generatr-app" target="_blank" rel="noopener noreferrer">
                                View Code
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
              
            </div>
        </div>
      <Loader type='pacman' />
      </>
    )
}

export default Portfolio