
import './Body.css'
import SchoolCard from '../SchoolCard/SchoolCard';
const Body = () => {

  const cardFooters = [
    'School of Computer & Engineering',
    'School of Electronics & Engineering',
    'School of Mechanical & Engineering',
    'School of Electrical & Engineering',
    'School of Civil & Engineering',
    'School of Chemical & Engineering',
    'School of Advanced Sciences & Engineering',
  ];

  return (
  <div>
      <div>
      <h2 className="custom-header mb-3">Our Schools</h2>
      <p className="custom-paragraph "> At VIT-Ap the entire teaching-learning process is concentrated around six schools. A reserch center is also part of the schools, that encourages students to participate in exciting reserch projects amongst these departments.</p>
    </div>

     
    <div
  className="d-flex flex-wrap justify-content-center"
  style={{ gap: '1px', paddingLeft: '3px' , maxWidth: '1221px', margin: '0 auto' }}
>
  {cardFooters.map((footer, idx) => (
    <SchoolCard footerText={footer} key={idx} />
  ))}
</div>

  
  </div>


    
  )
}

export default Body;

