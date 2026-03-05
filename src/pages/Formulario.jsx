
export const Formulario = () => {
  return (
    <>
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-dark">
      <div className="row shadow-lg " style={{ maxWidth: "800px", width: "100%" }}>

       
        <div className="col-md-5 p-1" style={{ minHeight: "520px" }}>
          <img
            src="./sir.jpeg "
            alt="character"
            className="w-100 h-100 rounded-4 border border-2"
            
            style={{ objectFit: "cover", objectPosition: "top" }}
          />
        </div>

      
        <div className="col-md-7 p-5 bg-dark text-white d-flex flex-column justify-content-center">
          <h3 className="fw-bold ">
            Login <span className="text-secondary fs-6 fw-normal">/ LOGIN</span>
          </h3>

          <div>
            <label className="form-label text-secondary small text-uppercase">Email</label>
            <input type="email" className="form-control bg-dark text-white border-secondary" placeholder="Enter your Email" />
          </div>

          <div>
            <label className="form-label text-secondary small text-uppercase">Password</label>
            <input type="password" className="form-control bg-dark text-white border-secondary" />
          </div>

    
          <div className="form-check mb-4">
            <input className="form-check-input" type="checkbox" id="check2" />
            <label className="form-check-label text-secondary small" htmlFor="check2">
              I would like to receive emails about betting and promotions.
            </label>
          </div>

          <button className="btn btn-info w-100 fw-bold text-dark text-uppercase mb-3">Login</button>

         
        </div>

      </div>
    </div>
    
    </>
  )
}
