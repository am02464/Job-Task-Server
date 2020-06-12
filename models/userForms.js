const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let userFormsSchema = new Schema(
    {
        mobileId: 
        {
            type: String,
            required: true
        },
        forms: {type: Schema.Types.ObjectId, ref:"Form",required: true},
        filledFields: 
        [
            {
                fieldId: { type: Schema.Types.ObjectId, ref: "FieldType",required: true},
                value: {type: String, required: true}            
            }
        ]
    }) 

function formHasField()
{
    if (this.fieldId === null)
    {
        return false;
    }
    else if (this.fieldId != null)
    {
        for (let eachField = 0; eachField < this.forms.fields.length; eachField++)
        {
            if (this.forms.fields[eachField].ObjectId === this.fieldId)
            {
                return true;
            }
        }
        return false;
    }
}


const UserForms = mongoose.model("UserForms", userFormsSchema);
module.exports = UserForms;
    
let UF = new UserForms(
{
    mobileId: "77777",
    forms: "5ee39d2e5fe5e633c99a33c4",
    filledFields: [{fieldId: "5ee39cb8e4acad2da4165e30", value:"Check Test Test2"}]
})      

userFormsSchema.pre('save', formHasField)

UF.save(function (err) {
    if (err){ console.log(err); }
    else{console.log("Success")}
    // saved!
  });

//   5ee39d2e5fe4e641c03a53c4
//form: 5ee39d2e5fe4e641c03a53c4
//field: 5ee39cb8e4acad2da4165e30

UserForms.find().exec((err, val)=>{

  console.log(err, val.pop())
})

