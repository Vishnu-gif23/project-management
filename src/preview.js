import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const FinalPreview = () =>{
    let basicdata = useSelector( state => state.MyBasic );
    let contactdata = useSelector( state => state.MyContact );
    let edudata = useSelector( state => state.MyEducation );
    let skilldata = useSelector( state => state.MySkill );
    let projectdata = useSelector( state => state.MyProject );
    let expdata = useSelector( state => state.MyExperience );


    return(
        <div className="container mt-4 mb-2">
            <div className="row">

                <div className="col-xl-6 mb-5">
                    <div className="card border-0 shadow-lg">
                        <div className="card-header bg-info text-white"> Basic Details </div>
                        <div className="card-body">
                            <table className="table">
                                <tbody>
                                    <tr><td> Full Name </td> <td> {basicdata.fullname} </td></tr>
                                    <tr><td> Gender </td> <td> {basicdata.gender} </td></tr>
                                    <tr><td> Date Of Birth </td> <td> {basicdata.dob} </td></tr>
                                    <tr><td> Married </td> <td> {basicdata.married} </td></tr>
                                    <tr><td> Profile Status </td> <td> {basicdata.profilestatus} </td></tr>
                                    <tr><td> <b> About Me </b> </td><td> {basicdata.about} </td></tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="card-footer">
                            <Link to="/basic" className="text-decoration-none"> <i className="fa fa-edit"></i> Edit </Link>
                        </div>
                    </div>
                </div>

                <div className="col-xl-6 mb-5">
                    <div className="card border-0 shadow-lg">
                        <div className="card-header bg-info text-white"> Contact Details </div>
                        <div className="card-body">
                            <table className="table">
                                <tbody>
                                    <tr><td> Mobile No </td> <td> {contactdata.mobile} </td></tr>
                                    <tr><td> Email Id </td> <td> {contactdata.email} </td></tr>
                                    <tr><td> Local Address </td> <td> {contactdata.laddress} </td></tr>
                                    <tr><td> Permanent Address </td> <td> {contactdata.paddress} </td></tr>
                                    <tr><td> Reference </td> <td> {contactdata.reference} </td></tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="card-footer">
                            <Link to="/contact" className="text-decoration-none"> <i className="fa fa-edit"></i> Edit </Link>
                        </div>
                    </div>
                </div>

                <div className="col-xl-6 mb-5">
                    <div className="card border-0 shadow-lg">
                        <div className="card-header bg-info text-white"> Education Details </div>
                        <div className="card-body">
                            <table className="table">
                                <tbody>
                                    <tr><td> Highest education </td> <td> {edudata.higher} </td></tr>
                                    <tr><td> Passing Year </td> <td> {edudata.year} </td></tr>
                                    <tr><td> Grade/Percentage </td> <td> {edudata.grade} </td></tr>
                                    <tr><td> College/University </td> <td> {edudata.college} </td></tr>
                                    <tr><td> City </td> <td> {edudata.city} </td></tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="card-footer">
                            <Link to="/education" className="text-decoration-none"> <i className="fa fa-edit"></i> Edit </Link>
                        </div>
                    </div>
                </div>

                <div className="col-xl-6 mb-5">
                    <div className="card border-0 shadow-lg">
                        <div className="card-header bg-info text-white"> Skill Details </div>
                        <div className="card-body">
                            <table>
                                <tbody>
                                    <tr><td> Skill </td> <td> {skilldata.skill} </td></tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="card-footer">
                            <Link to="/skill" className="text-decoration-none"> <i className="fa fa-edit"></i> Edit </Link>
                        </div>
                    </div>
                </div>

                <div className="col-xl-6 mb-5">
                    <div className="card border-0 shadow-lg">
                        <div className="card-header bg-info text-white"> Project Details </div>
                        <div className="card-body">
                            <table className="table">
                                <tbody>
                                    <tr><td> Project Name </td> <td> {projectdata.name} </td></tr>
                                    <tr><td> Project Details </td> <td> {projectdata.details} </td></tr>
                                    <tr><td> Technology </td> <td> {projectdata.technology} </td></tr>
                                    <tr><td> Live Project URL </td> <td> {projectdata.url} </td></tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="card-footer">
                            <Link to="/project" className="text-decoration-none"> <i className="fa fa-edit"></i> Edit </Link>
                        </div>
                    </div>
                </div>

                <div className="col-xl-6 mb-5">
                    <div className="card border-0 shadow-lg">
                        <div className="card-header bg-info text-white"> Experience Details </div>
                        <div className="card-body">
                            <table className="table">
                                <tbody>
                                    <tr><td> Total Experience </td> <td> {expdata.total} </td></tr>
                                    <tr><td> About Experience </td> <td> {expdata.about} </td></tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="card-footer">
                            <Link to="/experience" className="text-decoration-none"> <i className="fa fa-edit"></i> Edit </Link>
                        </div>
                    </div>
                </div>

                <div className="col-xl-12 text-center">
                    <button className="btn btn-danger"> 
                        Submit My Details <i className="fa fa-arrow-right"></i>
                    </button>
                </div>

            </div>
        </div>
    
    )
}

export default FinalPreview;