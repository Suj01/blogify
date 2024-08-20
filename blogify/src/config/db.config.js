import { mongoose } from 'mongoose';


export async function connect(){
    try {
        mongoose.connect(process.env.DB_URL);
        const connection = mongoose.connection;

        connection.on('Connected',()=>{
            console.log('DB Connected');
        })

        connection.on("error",(error)=>{
            console.log('Database connection error, Please make sure db is up and running',error);
            process.exit();
        })
    } catch (error) {
        console.log('Something went wrong in connecting to DB');
        Console.log(error);
    }
}