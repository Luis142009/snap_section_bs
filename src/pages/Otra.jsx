import React from 'react'

export const Otra = () => {
  return (
    <>

      <div className="mt-5" >
        <div className='d-flex justify-content-center h-100 gap-5 mt-5'>
          <div>
            <h1 className='fs-1 container text-center'>What you'll get</h1>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row ms-5">
          <div className="col mt-3 text-start ms-4" >
            <img src="./doctor.webp" height="150" className="ms-5" alt="" />
            <h2>Whole-food recipes</h2>
            <p className="w-60">Each dish uses everyday, unprocessed ingredients.</p>
          </div>
          <div className="col mt-3 text-start">
            <img src="./huggysss.webp" height="150" className="ms-5" alt="" />
            <h2>Minimum fuss</h2>
            <p className="w-75"  >All recipes are designed to make eating healthy quick and easy.</p>
          </div>
          <div className="col mt-3 text-start ">
            <img src="./catnap_00.webp" height="150" className="ms-5"  alt="" />
            <h2>Search in seconds</h2>
            <p className="w-75">Filter by name or ingredient and jump straight to the recipe you need.</p>
          </div>
        </div>
      </div>


    </>
  )
}
