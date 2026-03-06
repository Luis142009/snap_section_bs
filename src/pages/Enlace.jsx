
export const Enlace = () => {
  return (
    <>

    <div className=" text-center mt-5" >

      <h1 className="titulo">
        <span className="subrayado">Healthy</span>
        <span className="verde"> meals, zero fuss</span>
      </h1>

      <p className="subtitulo">
        Discover eight quick, whole-food recipes that you can cook tonight
        —no processed junk, no guesswork.
      </p>

      <button className="btn btn-danger" >Start exploring</button>

      <div className="imagen-wrapper mt-4">
        <img
          src="catnap.png"  className="rounded-5 border border-5" height="500"
          alt=""
        />
      </div>

    </div>
  


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
    
<div className="container mt-5">
      <div className="row align-items-center">

        <div className="col">
          <h2 className="fw-bold">Built for real life</h2>
          <p>Cooking shouldn't be complicated. These recipes come in under 30 minutes of active time, fit busy schedules, and taste good enough to repeat.</p>
          <p>Whether you're new to the kitchen or just need fresh ideas, we've got you covered.</p>
        </div>

        <div className="col">
          <img src="./peluche.jpg" className="img-fluid rounded-3" alt="cooking" />
        </div>

      </div>
    </div>

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
