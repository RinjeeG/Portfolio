
import profilePic from '../assets/images/profilePic.jpg';

const Home = () => {
  return (
    <main>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img 
          src={profilePic} 
          alt="Profile"
          style={{ width: '200px', height: '200px', border: '3px solid black', borderRadius: '40%', marginRight: '20px' }}
        />
        <div>
          <h1>Welcome to My Portfolio</h1>
          <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Libero ullamcorper nec molestie ut conubia, iaculis consequat. Est lacinia justo nulla dui nec inceptos, imperdiet adipiscing a. Mi metus aliquam posuere nascetur molestie elementum. Neque ultrices imperdiet euismod finibus vivamus. Proin ullamcorper fermentum; eros posuere potenti metus scelerisque. Nunc varius quam nam ultricies maximus netus aenean phasellus.<br/>
          Id vivamus at efficitur hac cursus tellus gravida. Mollis lectus arcu donec senectus nec ipsum eleifend odio. Bibendum habitasse habitant cras turpis class euismod vitae nisi. Enim aliquet vivamus habitasse nisl semper platea. Ac elementum dignissim massa vulputate est efficitur magnis. Congue massa velit efficitur sagittis; duis semper. Neque imperdiet hendrerit per hac aptent felis dui ridiculus at. Fames luctus hac sociosqu quam laoreet et elementum. Odio blandit malesuada a id integer taciti.</p>
        </div>
      </div>
    </main>
  );
};

export default Home;
