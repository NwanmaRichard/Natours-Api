// "use strict"
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const MyServiceAgent = require('msa-node');
const nodemailer = require("nodemailer")
// const Person = function(firstName, birthYear){

//     this.firstName = firstName
//     this.birthYear = birthYear

// }

// const jonas = new Person ("Jonas", 1991)
// const richard = new Person("Richard", 2003)
// console.log(jonas, richard)

// //prototypes
// console.log(Person.prototype);
// Person.prototype.calcAge = function(){
//     console.log(2037 - this.birthYear)
// }
// jonas.calcAge()

// //ES6 CLASSES

// //CLASS EXPRESSION
// //const PersonCl = class{}

// //CLASS DECLARATION
// class PersonCL{
//     constructor(fullName, birthYear){
//         this.fullName = fullName
//         this.birthYear = birthYear;
//     }

//     //methods will be added to .prototype property
//     calcAge(){
//         console.log(2037 - this.birthYear)
//     }

//     get age(){
//         return 2037- this.birthYear
//     }
// }
// const jessica = new PersonCL("jessica", 2001)
// console.log(jessica.age)
// jessica.calcAge()

// //1.Classes are NOT hoisted
// //2.Classes are first-class citizens
// //3. \Classes are executed in strict mode

// //SETTERS AND GETTERS in objects
// const account = {
//     owner: "Jonas",
//     movements: [200,500,120,300],

//     get latest(){
//         return this.movements.slice(-1).pop()
//     },

//     set latest(mov){
//         this.movements.push(mov)
//     }
// }
// account.latest = 50

// console.log(account.latest,account.movements)

// const msa = async () => {
//   try {
//     const result = await axios({
//       method: 'post',
//       url: 'https://api.myserviceagent.net/api/v1/otp/sms',
//       data: {
//         msisdn: '+2349045793369',
//         length: 6,
//         expires: 40,
//         alphanumeric: true,
//       },
//       headers: {
//         authorization: `Bearer ${process.env.MSA_SECRET_KEY}`,
//         'content-type': 'application/json',
//       },
//       redirect: 'follow',
//     });
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }

// };
// msa()

// const msaGetTelemarketingJobs = async () => {
//   try {
//     const result = await axios({
//       method: 'get',
//       url: 'https://api.myserviceagent.net/api/v1/telemarketing/customer',
//       data: {
//         page: 1,
//       },
//       headers: {
//         authorization: `Bearer ${process.env.MSA_SECRET_KEY}`,
//         'content-type': 'application/json',
//       },
//     });
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };
//msaGetTelemarketingJobs()

// const MSACreateSMSTeleJob = async () => {
//   try {
//     const result = await axios({
//       method: 'post',
//       url: 'https://api.myserviceagent.net/api/v1/telemarketing/sms',
//       data: {},
//       headers: {
//         authorization: `Bearer ${process.env.MSA_SECRET_KEY}`,
//         'content-type': 'application/json',
//       },
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };
//MSACreateSMSTeleJob()

// const sendSmsOtp = async () => {
//   try {
//     const MyServiceAgentClient = new MyServiceAgent({
//       apiKey: process.env.MSA_SECRET_KEY,
//     });
//     //send sms OTP
//     const payload = { 
//         msisdn: '2349045793369',
//         length: 6,
//         expires: 20,
//         alphanumeric: false
//     };
//     const data = await MyServiceAgentClient.sendSMSOTP(payload);
//     console.log(data);
//   } catch (err) {
//     console.error(err);
//   }
// };
//sendSmsOtp();

// const MSAVerifyOTP = async () => {
//   try {
//     const MyServiceAgentClient = new MyServiceAgent({
//       apiKey: process.env.MSA_SECRET_KEY,
//     });
//     //Verify OTP
//     const verifyPayload = {
//       msisdn: '2349045793369',
//       otp: "644194"
//     };
//     const data = await MyServiceAgentClient.verifyOTP(verifyPayload)
//     console.log(data)
//   } catch (err) {
//     console.log(err);
//   }
// };

//MSAVerifyOTP()

// const array = ["this is me", "Richard"]
// const join = array.join(" ")
// console.log(join)

let mailTransporter = nodemailer.createTransport({
  service: "gmail",
  auth:{
    user: "richardshmateo@gmail.com",
    pass: "richie2003"
  }
})

const details = {
  from: 'richardshmateo@gmail.com',
  to: "richardnwanma@mtu.edu.ng",
  subject: "testing our node mailer",
  text: "testing our first sender"
};

mailTransporter.sendMail(details, (err)=>{
  if(err){
    console.log("It has an err", err)
  }
  console.log("Email has sent YAAAAYYYY")
})
