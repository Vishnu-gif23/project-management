import LeftNav from "./navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Project = () =>{
    let projectdata = useSelector(state => state.MyProject);

    let [name, setName] = useState(projectdata.name);
    let [details, setDetails] = useState(projectdata.details);
    let [technology, setTechnology] = useState(projectdata.technology);
    let [url, setUrl] = useState(projectdata.url);

    let dispatch = useDispatch();
    let save = () =>{
        let userinfo = {
            "name": name,
            "details": details,
            "technology": technology,
            "url": url
        }
        let mydata = {type:"project", info:userinfo};
        dispatch(mydata);
        alert("Your project details saved successfully...");
    }

    return(
    <div className="container mt-4">
        <div className="row">
            <div className="col-xl-3 mb-4">
                <LeftNav/>
            </div>
            <div className="col-xl-6 mb-4 ">
                    <div className="card border-0 shadow-lg">
                        <div className="card-header bg-info text-white"> <i class="fa-solid fa-user-graduate"></i> Project Imformation </div>
                        <div className="card-body "> 
                                
                                <div className="form-group row">

                                    <div className="mb-4">
                                    <label className="mb-2">Project Name </label>
                                        <input type="text" placeholder="Project Name" className="form-control"
                                            onChange={obj => setName(obj.target.value)} value={name}/>
                                    </div>

                                    <div className="mb-4">
                                    <label className="mb-2"> Project Details</label>
                                    <textarea  placeholder="Project Details" className="form-control"
                                        onChange={obj => setDetails(obj.target.value)} value={details}></textarea>
                                    </div>

                                    <div className="mb-4">
                                    <label className="mb-2" > Technology </label>
                                    <textarea  placeholder="Technology" className="form-control"
                                        onChange={obj => setTechnology(obj.target.value)} value={technology}></textarea>

                                    </div>

                                    <div className="mb-4 ">
                                    <label className="mb-2"> Live Project URL</label>
                                    <input type="text" placeholder="URL" className="form-control"
                                        onChange={obj => setUrl(obj.target.value)} value={url}/>

                                    </div>
                                    <div class="text-center pb-2">
                                      <button class="btn btn-danger me-3" onClick={save}> Save & Contiue </button>
                                    </div>



                                </div>

                        </div>
                        
                    </div>
                </div>
            <div className="col-xl-3 mb-4"></div>
        </div>
    </div>
        )
    
}

export default Project;
