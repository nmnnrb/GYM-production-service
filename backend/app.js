 import express from "express";
 import cors from "cors";
import {config} from "dotenv";
import { sendEmail } from "./utils/sendEmail.js";


const app = express();
const router = express.Router(); 

config({path: "./config.env"});


app.use(cors({
    origin: [process.env.frontend_url],
    methods: ["POST"],
    credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));





router.get('/' ,  (req,res,next) => {
       res.send({
        text: "server working fine",
        sucess: true
                });
       })

///

router.post('/send/mail' , async (req,res,next) => {
       const {name ,email , message} = req.body;
        
       if(!name || !email || !message){
        return next(
            resizeBy.status(400).json({
                sucess:false,
                message: "Please fill in all fields"
            })
        );
       }

        try {
            await sendEmail({
                email: "snaman9967@gmail.com",
                subject: "Someone Contacts from Gym Website",
                message: message,
                userEmail: email, 
            });
            resizeBy.status(200).json({
                sucess: true,
                message: "Email sent successfully"
            })
        } catch (error) {
             resizeBy.status(500).json({
                sucess: false,
                message: "Server ERROR"
            })
        }

}) 


app.use(router);

app.listen(process.env.PORT);
