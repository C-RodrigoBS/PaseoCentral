export const Services = (props) => {
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>NUESTROS RESTAURANTES</h2>
          <p>
          Nunca te arrepientas de haber comido poco, solamente hazlo si no lo disfrutaste.
          </p>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4'>
                  {' '}
                  <img src={d.img} alt='' />
                  <div className='service-desc'>
                    <h3>{d.name}</h3>
                    
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
