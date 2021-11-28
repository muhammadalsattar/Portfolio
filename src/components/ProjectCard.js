import React from "react";
import { BiLinkExternal } from "react-icons/bi";

export default function ProjectCard(props) {
    return(
        <div className="col-sm-6 mb-3">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">{props.name}<a href="#" className="btn btn-link"><BiLinkExternal/></a></h4>
                  <p className="card-text">{props.details}</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">{props.tools}</small>
                </div>
              </div>
        </div>
    )
}