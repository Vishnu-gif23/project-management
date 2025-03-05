const MySkill = (state, action) =>{
    
    let data = {
        "skill":"I am good"
    };

    let skillData = Object.assign( data, state);

    if (action.type === "skill"){
        skillData = action.info;
    }

    return skillData;
}

export default MySkill;