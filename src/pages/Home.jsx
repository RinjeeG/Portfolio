
import profilePic from '../assets/images/profilePic.jpg';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';

const Home = () => {
  return (
    <main>
       {/* Home Section */}
       <section id="home" style={{ minHeight: '100vh' }}>
        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
        <img 
          src={profilePic} 
          alt="Profile picture of Rinjee" 
          style={{ width: '200px', height: '200px', border: '3px solid black', borderRadius: '40%', marginRight: '20px' }}
        />
        <div style={{ maxWidth: '600px' }}>
          <h1>Welcome to My Portfolio</h1>
          <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Libero ullamcorper nec molestie ut conubia, iaculis consequat. Est lacinia justo nulla dui nec inceptos, imperdiet adipiscing a. Mi metus aliquam posuere nascetur molestie elementum. Neque ultrices imperdiet euismod finibus vivamus. Proin ullamcorper fermentum; eros posuere potenti metus scelerisque. Nunc varius quam nam ultricies maximus netus aenean phasellus.<br/>
          Id vivamus at efficitur hac cursus tellus gravida. Mollis lectus arcu donec senectus nec ipsum eleifend odio. Bibendum habitasse habitant cras turpis class euismod vitae nisi. Enim aliquet vivamus habitasse nisl semper platea. Ac elementum dignissim massa vulputate est efficitur magnis. Congue massa velit efficitur sagittis; duis semper. Neque imperdiet hendrerit per hac aptent felis dui ridiculus at. Fames luctus hac sociosqu quam laoreet et elementum. Odio blandit malesuada a id integer taciti.</p>
        </div>
      </div>
      </section>
      {/* Portfolio Section */}
      <section id="portfolio" style={{ minHeight: '100vh' }}>
        <Portfolio />
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ minHeight: '100vh' }}>
        <Contact />
      </section>

      {/* Resume Section */}
      <section id="resume" style={{ minHeight: '100vh' }}>
        <Resume />
      </section>

    </main>
  );
};

export default Home;
