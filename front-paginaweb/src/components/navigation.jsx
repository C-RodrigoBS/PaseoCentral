export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
            Paseo Central
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#features' className='page-scroll'>
                Cine
              </a>
            </li>
            <li>
              <a href='#about' className='page-scroll'>
                Artistas
              </a>
            </li>
            <li>
              <a href='#services' className='page-scroll'>
              Restaurantes
              </a>
            </li>
            <li>
              <a href='#portfolio' className='page-scroll'>
                Eventos
              </a>
            </li>
            <li>
              <a href='#testimonials' className='page-scroll'>
                Diversión
              </a>
            </li>
            <li>
              <a href='#team' className='page-scroll'>
                Servicios
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
                Informacion
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
