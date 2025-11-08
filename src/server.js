import dotenv from "dotenv";
dotenv.config({path: "./.env"});
import app from "./app.js";

import connectDB from "./db/db.js";

connectDB()
.then(() => {
    app.listen (process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    })
})
.catch((error) => {
    console.error("Failed to connect to the database:", error);
    process.exit(1);
}); 





































