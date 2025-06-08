import research1 from "../../assets/research1.jpg";
import research2 from '../../assets/research2.jpg'
import research3 from '../../assets/research3.jpg'
import './Research.css'
export function Research(){
    return(
       <>
       <div className="innovation-container">
        <h1>Research And Innovation</h1>
        <div className="card-contents d-flex justify-content-between flex-wrap">
          <div className="card card-box">
            <img src={research1} alt="" className="card-img-top" width="100%" />
          </div>
          <div className="card card-box">
            <img src={research2} alt="" className="card-img-top" width="100%"/>
          </div>
          <div className="card card-box">
            <img src={research3} alt="" className="card-img-top" width="100%"/>
          </div>
          <div className="quality-text"><p>Top Quality and Learning Experience</p></div>
        </div>

{/* ================================================================ */}

<div className="research-parsent d-flex justify-content-around">
   <div className="parsent1 ">
    <h1>1000 <span className="bi bi-plus"></span></h1>
    <p>Publications</p>
   </div>
   <div className="vartical"></div>
   <div className="parsent1 ">
    <h1>3000 <span className="bi bi-plus"></span></h1>
    <p>Parents</p>
   </div>
   <div className="vartical"></div>
   <div className="parsent1">
    <h1>1.5Cr <span className="bi bi-plus"></span></h1>
    <p>Sponsored Budget</p>
   </div>
</div>
         

       </div>
       </>
    )
}