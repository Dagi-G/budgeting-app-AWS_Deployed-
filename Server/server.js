import express, { query } from 'express';
import { promises as fs } from 'fs';
import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';
import cors from 'cors';
import pg from 'pg';

dotenv.config();
const url = process.env.MONGO_DB_URL;
const dbName = process.env.MONGO_DB;


const app = express();
app.use(cors());
const PORT = 3000;


// 
app.get('/budget', async (req, res) => {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const collection = db.collection("Monthly-budget");
        const budget = await collection.find({}).toArray();
        res.json(budget);
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Hmmm, no budget data for you! ☹");
    }

});


// get request to get the budget of a specific month.
app.get('/budget/:month', async (req, res) => {
    try {
        const month = req.params.month;
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const collection = db.collection("Monthly-budget");
        console.log("Asking for the month ", month);
        const budget = await collection.find({month}).toArray();

         // Calculate the total amount
         const totalAmount = budget.reduce((total, item) => total + item.budget, 0);
        
         // Add the total amount as a new entry in the budget array
         budget.push({
             category: "Total Amount",
             budget: totalAmount,
             description: "Total amount of money budgeted for this month",
             type: "Variable",
             month: month.charAt(0).toUpperCase() + month.slice(1)
         });

        res.json(budget);
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Hmmm, no budget data this specific month for you! ☹");
    }
});

// This API endpoint added a budget data into the Database.
app.use(express.json());
app.post('/budget', async (req, res) => {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const collection = db.collection("Monthly-budget");
        const budgetToAdd = req.body;

        if (!budgetToAdd || !budgetToAdd.category || !budgetToAdd.budget || !budgetToAdd.month) {
            return res.status(400).send({ status: "Bad Request: 'budget' key missing in request body or budget data is not fully provided" });
        }
        const result = await collection.insertOne(budgetToAdd);
        res.status(200).send({status : "Budget added successfully"});
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Error adding sock! ☹");
    }

});


app.delete('/budget/:id', async (req, res) => {
    const { id } = req.params;
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    const collection = db.collection("Monthly-budget");
    try {
        const objectId = new ObjectId(id); // Convert to ObjectId
        const result = await collection.deleteOne({ _id: objectId });
        if (result.deletedCount === 1) {
            res.status(200).send({ message: 'Budget item deleted successfully' });
        } else {
            res.status(404).send({ message: 'Budget item not found' });
        }
    } catch (error) {
        res.status(500).send({ message: 'Error deleting the item', error });
    }
});




app.listen(PORT, '0.0.0.0' ,() => {
    console.log(`Server is running on ${PORT}`);
});

