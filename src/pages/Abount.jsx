
export const Abount = () => {
  return (
    <>
     <div className="container-fluid mt-5 py-5">
                <div className="row mt-5">
                    <div className="col">
                        <h1 style={{ color: '#75ee7f' }} className="text-color">Join our community</h1>
                        <p style={{ color: '#1448d6', fontWeight: 'bold' }}>30-day, hassle-free money back guarantee</p>
                        <p>Gain access to our full library of tutorials along with expert code reviews.<br /> Perfect for any developers who are serious about honing their skills.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 p-3 mb-2 bg-primary text-white">
                        <h4>Monthly Subscription</h4>
                        <h2 className="fw-bold">$29 per month </h2>
                        <p>Full access for less than $1 a day</p>
                        <button type="button" className="btn btn-success btn-lg">Sign Up</button>
                    </div>
                    <div className="col-6 p-3 mb-2 bg-info text-white">
                        <h5>Why Us</h5>
                        <p className="w-10">Tutorials by industry experts
                            Peer & expert code review
                            Coding exercises
                            Access to our GitHub repos
                            Community forum
                            Flashcard decks
                            New videos every week
                        </p>
                    </div>
                </div>
            </div>
    </>
  )
}
