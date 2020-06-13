const Form = require("./models/Form");
const FieldType = require("./models/FieldType");
const UserForm = require("./models/UserForm");
let validTypes = require("./models/allowedTypes");
const { Mongoose } = require("mongoose");

async function generate() {
  try {
    FieldType.create(
      [
        {
          name: "Amount",
          type: validTypes[0]
        },
        {
          name: "Integer",
          type: validTypes[1]
        }
      ],
      err => {
        if (err.code === 11000) {
          console.log("\nField Types already exit\n");
        }
      }
    );

    let types = await FieldType.find();
    console.log(types)
    Form.create(
      [
        {
          name: "Form 1099",
          fields: [
            {
              name: "Total income",
              field: await types.find(t => t.type === "FLOAT")._id
            },
            {
              name: "Total business expenses",
              field: await types.find(t => t.type === "FLOAT")._id
            },
            {
              name: "Total miles driven",
              field: await types.find(t => t.type === "INT")._id
            }
          ]
        },
        {
          name: "Form W-2",
          fields: [
            {
              name: "Total income",
              field: await types.find(t => t.type === "FLOAT")._id
            },
            {
              name: "Total taxes paid",
              field: await types.find(t => t.type === "FLOAT")._id
            }
          ]
        }
      ],
      err => {
        if (err.code === 11000) {
          console.log("\nForms already exit\n");
        }
      }
    );

      // await UserForm.deleteMany({});      
      // await UserForm.create(
      //   [
      //     {
      //       deviceId: "12345",
      //       form: "5ee404cd1a80610388668fca",
      //       fields: 
      //       [
      //         {
      //           name: "Total income",
      //           field: await types.find(t => t.type === "FLOAT")._id,
      //           value: "222"
      //         },
      //         {
      //           name: "Total taxes paid",
      //           field: await types.find(t => t.type === "FLOAT")._id,
      //           value: "2020"
      //         }

      //       ]
      //     }
      //   ])


    let forms = await Form.find().populate({ path: "fields.field" });

  } catch (err) {
    console.error("\nError :\n", err.message);
  }
}

generate();
