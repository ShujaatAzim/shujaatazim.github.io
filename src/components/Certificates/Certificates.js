import { certificates } from '../../portfolio'
import './Certificates.css'

const Certificates = () => {
  return (
    <section className='section' style={{ textAlign: 'center'}}>
      <h2 style={{ color: "var(--clr-primary)"}} className='section__title'>Certificates</h2>
      <div className='certificates-container'>
        {certificates.map((cert) => {
          return (
            <div key={cert.name} className='certificate'>
              <img
                src={cert.image}
                alt='Certificate preview'
                onClick={() => window.open(cert.pdf, '_blank')}
              />
            </div>
          )})
        }
      </div>
    </section>
  );
}

export default Certificates