import{ React ,useState}from 'react'


function Feedback() {
 const [score, setScore]=useState(5)

function handleSubmit(e){
    e.preventDefault()
    setScore(5)
   }


  return (
    <div className="container px-5 pb-5">
     
      <hr />
      <div className="row gx-5 justify-content-center">
 <h2 className="display-5 fw-bolder">
        <span className="text-gradient d-inline">Feedback Form</span>
      </h2>

        <div className="col-lg-11 col-xl-9 col-xxl-8">
          <div className="card overflow-hidden shadow rounded-4 border-0 mb-5">
            <div className="card-body p-0">
              <div className=" align-items-center">
                <div className="p-5">
                  <h4>Score {score}</h4>

                  <form onSubmit={handleSubmit}>
                    <div className="form-control">
                      <input
                        type="range"
                        class="form-range"
                        min="0"
                        max="10"
                        value={score}
                        onChange={(e) => setScore(e.target.value)}
                      />
                    </div>
                    <div>
                      <button class="btn btn-primary p-2 my-3" type="submit">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback
