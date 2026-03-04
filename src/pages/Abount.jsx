
export const Abount = () => {
  return (
    <>
       <div className="container border  shadow-lg border-blue mt-5 p-5 pt-0" style={{borderRadius: "10px"}}>
                <div className="row mt-5">
                    <div className="col  p-3 mb-2 bg-light text-dark " style={{borderRadius: "10px"}}> 
                        <h1 style={{color: "#1176c9"}}>Join our community</h1>
                        <h5 className="mt-5" style={{color: "#82c911"}}>30-day, hassle-free money back guarantee</h5>
                        <p>Gain access to our full library of tutorials along with expert code reviews.<br /> Perfect for any developers who are serious about honing their skills.</p>
                    </div>
                </div>
                <div className="row ">
                    <div className="col-6 p-3 mb-2 bg-primary text-white p-5 " style={{borderRadius: "10px"}}>
                        <h4>Monthly Subscription</h4>
                         <p><span className="fw-bold fs-3 p-1">$29</span> per month</p>
                       
                        <p>Full access for less than $1 a day</p>
                        <button type="button" className="btn btn-success btn-lg" style={{ height: "50px", width: "240px", borderRadius: "10px" }}>Sign Up</button>
                    </div>
                    <div className="col-6 p-3 mb-2 bg-info text-white p-5" style={{borderRadius: "10px"}}>
                        <h5>Why Us</h5>
                        <p>Tutorials by industry experts <br/>

                            Peer & expert code review<br/>

                            Coding exercises<br/>

                            Access to our GitHub repos<br/>

                            Community forum<br/>

                            Flashcard decks<br/>

                            New videos every week</p>
                    </div>
                </div>
            </div>
        
    </>
  )
}
