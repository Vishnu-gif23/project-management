const MyProject = ( state, action) =>{
    
    let data = {
        "name":"",
        "details":"",
        "technology":"",
        "url":""
    };

    let projectData = Object.assign( data, state);

    if (action.type === "project"){
        projectData = action.info;
    }

    return projectData;
}

export default MyProject;