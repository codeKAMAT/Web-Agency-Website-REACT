 {/* ulternate method */}
      <h1>Ulternate method</h1>
      <div className='my-5'>
        <h1 className='text-center'>Our Services</h1>
      </div>
      <div className='container-fluid mb-5'>
        <div className='row'>
          <div className='col-10 mx-auto'>
            <div className='row gy-4'>
              {/* card mapping */}
              {CardData.map((value, index) => {
                return (
                  <div key={index} className='col-md-4 col-10 mx-auto'>
                    <div className='card' style={{ width: '18rem' }}>
                      <img
                        src={value.imgsrc}
                        className='card-img-top'
                        alt={value.title}
                      />
                      <div className='card-body'>
                        <h5 className='card-title font-weight-bold'>
                          {value.title}
                        </h5>
                        <p className='card-text'>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <NavLink to='#' className='btn btn-primary'>
                          Go somewhere
                        </NavLink>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>