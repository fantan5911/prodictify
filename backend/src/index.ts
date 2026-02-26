import express from 'express';
import dotenv from 'dotenv';
import { ENV } from './config/env';
import { clerkMiddleware } from '@clerk/express';
import cors from 'cors';


const app = express();

app.use(cors({origin: ENV.FRONTEND_URL}));
app.use(clerkMiddleware()); //auth obj will be attached to the req
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get("/", (req, res) => {
    res.json({
        message: "Welcome to Prodictify API - Powered by PostgreSQL, Drizzle ORM & Clerk Auth",
        endpoints: {
            users: "/api/users",
            products: "/api/products",
            comments: "/api/comments"
        }
    })
})


const start = () => {
    app.listen(ENV.PORT, () => console.log(`Server started on PORT: ${ENV.PORT}`));
}
start();