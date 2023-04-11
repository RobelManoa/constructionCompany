import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Header() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      delay: 200,
      once: true
    });
  }, []);

  return (
    <div>
        <header>
	        <div className="navLeft">
			    <nav>
			        <ul>
					    <li>
						    <a href="/" data-aos="fade-right">Home</a>
					    </li>
					    <li>
						    <a href="/about" data-aos="fade-right" data-aos-delay="200">About</a>
					    </li>
					    <li>
						    <a href="/offers" data-aos="fade-right" data-aos-delay="400">Offers</a>
					    </li>
				    </ul>
			    </nav>
		    </div>
		    <div className="logo" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="600">
			    <h3>
				    <span>C</span>onstruction <br/><span>C</span>ompany
			    </h3>
		    </div>
		    <div className="navRight">
			    <nav>
				    <ul>
					    <li>
						    <a href="/gallerys" data-aos="fade-right" data-aos-delay="800">Gallery</a>
					    </li>
					    <li>
						    <a href="/blogs" data-aos="fade-right" data-aos-delay="1000">Blog</a>
					    </li>
					    <li>
						    <a href="/contacts" data-aos="fade-right" data-aos-delay="1200">Contact</a>
					    </li>
				    </ul>
			    </nav>
		    </div>
	    </header>
    </div>
  );
}

export default Header;
