const JOI = require("joi")

const validator = (schema) => (payload) =>{
    return schema.validate(payload,{abortEarly:false})
}

const dataSchema = JOI.object({
    id:JOI.number().required(),
    name:JOI.string().required(),
    owner:JOI.string().required()
})

const validateData = validator(dataSchema);

module.exports={validateData}