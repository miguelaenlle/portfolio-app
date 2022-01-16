import "./App.css";
import About from "./pages/About";
import ContactMe from "./pages/ContactMe";
import Skills from "./pages/Skills";
import Work from "./pages/Work";
import "./App.css";
import HeaderWrapper from "./pages/HeaderWrapper";
import React, { useEffect, useRef, useState } from "react";

function App() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const [navBackground, setNavBackground] = useState("appBarTransparent");
  const [selectedPage, setSelectedPage] = useState("About");
  const [refLocations, setRefLocations] = useState<{[key: string]: number}>({})

  useEffect(() => {
    const handleScroll = () => {
      const location = window.scrollY
      const show = location > 300;
      if (show) {
        setNavBackground("appBarSolid");
      } else {
        setNavBackground("appBarTransparent");
      }
    };
    document.addEventListener("scroll", handleScroll);
  }, []);

  let timer: ReturnType<typeof setTimeout>;

  window.addEventListener('scroll', function() {
    if (refLocations !== {}) {
      if (timer !== null) {
        clearTimeout(timer);
      } 
      timer = setTimeout(function() {
        const currentLocation = window.scrollY
        let minimumDistance = null
        let page = null
        for (const key in refLocations) {
          const topLocation = refLocations[key]+50
          const distance = Math.abs(topLocation - currentLocation)
          
          if ((!minimumDistance) || (distance < minimumDistance)) {
            minimumDistance = distance
            page = key
          }

        }
        if (page) {
          setSelectedPage(page)
        }
        
      }, 10)
    }
  })


  useEffect(() => {
    if ((aboutRef) && (skillsRef) && (workRef) && (contactRef)) {
      setRefLocations(fetchAllLocations())
    }
  }, [aboutRef, skillsRef, workRef, contactRef]);

  const fetchLocation = (ref: React.RefObject<HTMLDivElement>): number => {
    if (ref.current) {
      const location = ref.current.offsetTop;
      return location;
    } else {
      return 0;
    }
  };

  const fetchAllLocations = () => {
    const aboutLocation = fetchLocation(aboutRef);
    const skillsLocation = fetchLocation(skillsRef);
    const workLocation = fetchLocation(workRef);
    const contactLocation = fetchLocation(contactRef);
    const list: {[key: string]: number} = {
      'About': aboutLocation,
      'Skills': skillsLocation-50,
      'Work': workLocation-50, 
      'Contact': contactLocation-50
    }
    return list
  };


  const handleSelectedPage = (page: string) => {
    setSelectedPage(page);
    console.log(page);
    const locations = fetchAllLocations();
    const location = locations[page];
    window.scrollTo({top: location, behavior: 'smooth'});
  };

  return (
    <HeaderWrapper
      navBackground={navBackground}
      selectedPage={selectedPage}
      onSelectPage={handleSelectedPage}
    >
      <div className={"wrapper"}>
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={skillsRef}>
          <Skills />
        </div>
        <div ref={workRef}>
          <Work />
        </div>
        <div ref={contactRef}>
          <ContactMe />
        </div>
      </div>
    </HeaderWrapper>
  );
}

export default App;
