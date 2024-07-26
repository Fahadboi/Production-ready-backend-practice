import app from "./app.js";
import connectDB from "./Database/db.js";

connectDB().then(() => {
    app.listen(4000, () => {
        console.log("App listening on PORT 4000");
    })
}).catch((err) => {
    console.log("App Failed to run", err);
});

