const JOI = require("joi")

const validator = (schema) => (payload) =>{
    return schema.validate(payload,{abortEarly:false})
}

const dataSchema = JOI.object({
    id: JOI.number().required(),
    name: JOI.string().required().min(1),
    owner: JOI.string().required().min(3),
    created_by : JOI.string().required().min(3)
});


const validateData = validator(dataSchema);

module.exports={validateData}