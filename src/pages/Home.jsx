import "../stylesheets/home.css"
export const Home = () => {
  return (
    <>

      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="d-flex flex-column align-items-center justify-content-center h-100 gap-5">
              {/* contenido */}
              <div>
                <h1>Make <br /> remote work</h1>
                <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
                <a href="http://www.jango.com" className="btn btn-dark" >Learn more </a>
              </div>

              {/* logos */}
              <div className="d-flex gap-3 align-items-center ">
                <img src="./sanity.svg" height="25" alt="" />
                <img src="./convex.svg" height="25" alt="" />
                <img src="./tonkotsu.png" height="25" alt="" />
                <img src="./cloud.png" height="25" alt="" />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="i">
              <img src="./sir.jpeg" className="img-cropped" alt="" />
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
