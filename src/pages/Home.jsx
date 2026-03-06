import "../stylesheets/Home.css"
export const Home = () => {
  return (
    <>
            <div className="container">
                <div className="row">
                    <div className="col-6" >
                        <div className='d-flex flex-column justify-content-center h-100 gap-5'>
                            <div>
                            {/* contenido */}
                            <h1>Make<br/>remote work</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero veritatis doloribus sed dolor deleniti officiis repellat, dolorum animi saepe neque recusandae </p>
                            <a href='http://www.jango.com' className="btn btn-primary btn-lg">Learn more</a>
                            </div>
                                {/* logos */}
                            <div className='d-flex align-items-center gap-3'>
                                <img src="./cloud.png" height="25" alt="" />
                                <img src="./sanity.svg" height="25" alt="" />
                                <img src="./tonkotsu.png" height="25" alt="" />
                                <img src="./convex.svg" height="25" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="">
                                {/* liga */}
                                <img src="./death.jpg"  className="rounded-5 border border-5" height="300" alt="" />
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}


