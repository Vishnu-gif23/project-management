const MyExperience = (state, action) =>{
    
    let data = {
        "total":"Hi",
        "about":""
    };

    let expData = Object.assign(data, state);

    if (action.type === "experience"){
        expData = action.info;
    }

    return expData;
}

export default MyExperience;