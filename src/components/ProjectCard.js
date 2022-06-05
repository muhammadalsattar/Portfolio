import React from "react";

export default function ProjectCard(props) {
    return(
        <div className="col-sm-6 mb-3">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title"><mark>{props.name}</mark></h3>
                  <p className="card-text"><mark>{props.details}</mark></p>
                </div>
                <div className="card-footer">
                  <small><mark>{props.tools}</mark></small>
                  <div className="projectlinks">
                    <button className="btn btn-light" onClick={() => window.open(props.github, "_blank")}>Source Code</button>
                    {props.live && <button className="btn btn-light" onClick={() => window.open(props.live, "_blank")}>Live</button>}
                  </div>
                </div>
              </div>
        </div>
    )
}