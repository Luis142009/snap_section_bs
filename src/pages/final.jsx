import React from 'react'

export const Final = () => {
  return (
    <>

      
     <div className="container-fluid bg-black bg-gradient mt-5 py-4">
  <div className="row">
    <div className="col">
      <div className="rounded-3 text-center py-5">
        <h2 className="fw-bold text-white">Ready to cook smarter?</h2>
        <p className="text-white">Hit the button, pick a recipe, and get dinner on the table—fast.</p>
        <button className="btn btn-dark px-4 py-2 mt-2">Browse recipes</button>
      </div>
    </div>
  </div>
</div>
     
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <p>Made with 👌 and 🥑 </p>
          </div>
          <div className="col text-end">
            <div className="d-flex gap-3 text-end justify-content-end">
            <img src="./missdelight_00.webp"  height="40"  alt="" />
            <img src="./poppy_00.webp"  height="40" alt="" />
            <img src="./mommy_00.webp" height="40" alt="" />
            </div>
          </div>
        </div>
      </div>

    </>
  )
}