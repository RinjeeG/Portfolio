import resumeFile from '../assets/documents/RinjeeSherpaMern.pdf'; // Replace with the path to your resume file

const proficiencies = [
  'JavaScript',
  'React',
  'Node.js',
  'MongoDB',
  'HTML & CSS',
  'Git & GitHub',
  'API Development',
  'Responsive Design',
];

const Resume = () => {
  return (
    <main>
    <section className="resume">
      <h2>Resume</h2>
      <a href={resumeFile} download className="resume-link">Download My Resume</a>
      <div className="proficiencies">
        <h3>Proficiencies</h3>
        <ul>
          {proficiencies.map((proficiency, index) => (
            <li key={index}>{proficiency}</li>
          ))}
        </ul>
      </div>
    </section>
    </main>
  );
};

export default Resume;
