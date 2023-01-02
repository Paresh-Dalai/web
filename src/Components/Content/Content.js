import React from "react";
import './Content.css';


export default function Content(){
   

    return (
        <div className="midle_part">
        <div className="heading">
                <h1>Education Changes The World</h1>
            </div>
        <div className="content_container">
            <div className="left_side_of_container">
             <p>* create a diff. world with react</p>
             <p>* learn about the react world</p>
             <p>* change the world with react</p>
             <p>* stay updated with react</p>

            </div>
            <div className="right_side_of_container">
             <img src="https://media4.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif?cid=6c09b9524f9a9bb333170b139dca547d8a0ffebfd091416b&rid=giphy.gif&ct=g" alt="gif">
             </img>
            </div>
        </div>
        </div>
    )


}