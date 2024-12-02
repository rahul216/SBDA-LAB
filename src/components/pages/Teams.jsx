import React from "react";
import Navbar from "../Navbar";
import "./Teams.css";
import Teamsdata from "../../data/Teamsdata";
import abhishek_sir_pic from "../../assets/Abhishek sir pic.jpg";
import priyanka_mam_pic from "../../assets/priyanka mam pic.jpg";
import Cardslider from "../Cardslider";
import Footer from "../Footer";
const Teams = () => {
  return (
    <div className="teams-main-container">
      <Navbar></Navbar>
      <div className="team-container">
        <p>TEAM</p>
        <p>SYSTEMS BIOLOGY AND DATA ANALYTICS LAB</p>
        <h2 className="quote quote-part1">Alone we can do so little;</h2>
        <h2 className="quote quote-part2">Together we can do so much.</h2>
        <h4 className="quote author">- Helen Keller</h4>
        <div className="arrow-container">
          <div className="arrow"></div>
          <div className="arrow"></div>
        </div>
        <p className="scroll">SCROLL DOWN</p>
      </div>
      <div className="team-content-container">
        <div className="team-leader">
          <h1 className="tl-head-no">01</h1>
          <h1 className="tl-heading">Group Leader And Investigator</h1>
          <div className="tl-section">
            <div className="tl-image">
              <img
                className="tl-img1"
                src={abhishek_sir_pic}
                alt="Abhishek Sir"
              />
              <h2 className="tl-name">Dr Abhishek Sengupta</h2>
              <p className="tl-desg">Group Leader and Investigator</p>
              <div className="tl-sm-profile">
                <a href="https://twitter.com/Sengupta_PhD">
                  <div className="tl-twitter"></div>
                </a>
                <a href="https://www.linkedin.com/in/drabhisheksengupta83/">
                  <div className="tl-linkedin"></div>
                </a>
              </div>
            </div>
            <div className="tl-about">
              <p>
                I am a Bioinformatician and a Systems Biologist with a diverse
                background spanning Biotechnology, Healthcare Data and
                Pharmaceutical Market Data. The common thread that ties these
                areas together is my passion for Data, High-throughput
                Technology and Mathematical Modeling.
              </p>
              <p
                style={{
                  margin: "10px",
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                }}
              >
                My primary areas of research (but not limited to) are:
              </p>
              <ul></ul>
              <li className="bullet-li">Reproductive Health </li>
              <li className="bullet-li">
                Microbes, Microbiome and Human Health
              </li>
              <li className="bullet-li">Mental Health and Well Being</li>
              <li className="bullet-li">
                Vitiligo Pathogenesis and Therapeutics.
              </li>
              <p style={{ textAlign: "justify", margin: "1.5rem" }}>
                My research involves biological network construction and
                integration, logical modelling, kinetic and constraint-based
                modelling, multi-omics integration through Machine Learning and
                Graph Theory (Network) approaches, and data-driven hypothesis
                generation. We primarily focus on multi-omics data sets to
                better understand and treat human disease using computational
                methods. My research team also works on computational methods to
                study metabolic, signalling and gene regulatory disease
                networks, understand disease progression, molecular mechanisms
                and determine new drug targets and propose drug repurposing
                strategies. My lab's research goal is broadly focused on
                developing and applying predictive computational models,
                biological networks and associated web tools/databases for
                predicting and analysing the behaviours of complex physiological
                systems ranging over multiple scales of organisation from the
                molecular level to the tissue/organ/organism/population level.
              </p>

              <p
                style={{
                  margin: "10px",
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                }}
              >
                My Lab's Research Activities focus on these:
              </p>
              <div>
                <li className="numerical-li">
                  Clinical data analytics and predictive modelling
                </li>
                <li className="numerical-li">
                  Biological network inference, community and topology analysis
                  and visualisation.
                </li>
                <li className="numerical-li">
                  Identification of vital biological functions and pathways.
                </li>
                <li className="numerical-li">
                  Identification of potential biomarkers and targetable
                  genes/proteins/metabolites through modelling and biological
                  network analysis.
                </li>
                <li className="numerical-li">
                  Application of key machine learning methods for multi-omics
                  analysis.
                </li>
                <li className="numerical-li">
                  Condition-specific and personalized modelling through
                  Genome-scale Metabolic models based on the/ integration of
                  transcriptomic, proteomic and metabolomic data.
                </li>
                <li className="numerical-li">
                  Interactive and static web implementation
                </li>
                <li className="numerical-li">
                  Comprehensive clinical and biological database designing
                </li>
                <li className="numerical-li">
                  Network pharmacology-based drug repurposing
                </li>
                <li className="numerical-li">
                  Molecular modelling, docking and MD simulation studies
                </li>
              </div>
              <p style={{ margin: "1rem" }}>
                Please reach out to my lab for research collaboration and
                high-throughput project design and execution. At my lab, we
                believe in delivering meaningful models and data analysis.
              </p>
              <p style={{ margin: "1rem" }}>
                {" "}
                Outside of my professional work, you can see me spending time
                with my family/friends, networking and reading books (mostly
                science fiction, and health tech). Apart from this, I am fond of
                art and painting.
              </p>
            </div>
          </div>
        </div>

        {/* the below section is for priyanka mam.. containers classname is same cause no change in css is required. */}
      
        <div className="team-leader">
          <h1 className="tl-head-no">02</h1>
          <h1 className="tl-heading">Founder and Former PI</h1>
          <div className="tl-section">
            <div className="founder-image">
              <img
                className="founder-img"
                src={priyanka_mam_pic}
                alt="Abhishek Sir"
              />
              <h2 className="tl-name">Dr Priyanka Narad</h2>
              <p className="tl-desg">Founder and Former PI</p>
              <div className="tl-sm-profile">
                <a href="https://x.com/priyankanarad">
                  <div className="tl-twitter"></div>
                </a>
                <a href="https://www.linkedin.com/in/priyanka-narad-phd-b35320b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                  <div className="tl-linkedin"></div>
                </a>
              </div>
            </div>
            <div className="tl-about">
              <p style ={{ textAlign:"justify" } }>
              I am an experienced bioinformatics professional with PhD in Biotechnology and a specialization in Network Modelling and Analysis. 
              With proficiency in bioinformatics tools, techniques, and R & Python programming, I have gained a diversified portfolio as an Assistant Professor, Academic Administrator,
               and founding member of SBDA research lab
               in my previous professional experience at Amity University Uttar Pradesh.
              </p>
              
              <p style={{ textAlign: "justify", marginTop: "1.5rem" }}>
              Currently, I am working as a scientist and researcher in the Bioinformatics Division,
               Indian Council of Medical Research (ICMR), Department of Health Research (DHR), 
               Ministry of Health & Family Welfare (MoH&FW), New Delhi. 
               Here, I am handling the research projects undertaken by the division 
               and building policies and guidelines in bioinformatics and artificial intelligence. 
              </p>
              <p style={{ textAlign: "justify", marginTop: "1.5rem" }}>
              I have more than 50 published research and review articles in high-impact factor
               peer-reviewed national/international journals like Scientific Reports, Journal
                of Biomolecular Structure and Dynamics, and Human Gene to name a few. I have 
                3 copyrights registered and 1 technology transferred to industry.
              </p>
              <p style={{ textAlign: "justify", marginTop: "1.5rem" }}>
              As an individual, I am upbeat, enthusiastic, and have a problem-solving attitude. 
              My exceptional communication skills, commitment, and ownership of assigned work 
              allow me to work efficiently in a fast-paced environment.
              </p>
              <p style={{ textAlign: "justify", marginTop: "1.5rem" }}>
              Feel free to connect with me to learn more about my work interests and mutual collaborations.
              </p>

              
            </div>
          </div>
        </div>
        <div className="team-members">
          <h1 className="tm-head-no">03</h1>
          <h1 className="tm-heading">Team Members</h1>
          <div className="team-memb-slider">
            <Cardslider
              slideWidth="200px"
              slideHeight="200px"
              Data={Teamsdata}
              slides={2}
              speed={3500}
            ></Cardslider>
          </div>
        </div>
        
        <h2 className="teams-ch-text">Do you have a project?</h2>
        <div className="teams-ch-link">
          
          <a className="team-link-contact" href="./#/contact">
            LET'S DISCUSS
          </a>
          <a className="team-link-research" href="./#/research">
           OUR RESEARCH
          </a>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Teams;
