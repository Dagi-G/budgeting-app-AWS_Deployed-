import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import moment from 'moment';
import AddBudget from './addBudget';
import '../budget.css';

const Budget = () => {
 
    const [budgetData, setBudgetData] = useState([]);
    const location = useLocation();
    const { state } = location;
    const budgetMonth = state?.month;
    
    // Make an API request to a specific month's budget that the user has requested.
    useEffect(() => {
        const fetchData = async () => {

            try {
                console.log("Asked for this budget month ", budgetMonth);
                if (budgetData) {
                    
                    const response = await fetch(`http://localhost:3000/budget/${budgetMonth}`);
                    if (!response.ok) {
                        throw new Error('Data could not be fetched!');
                    }
                    const json_response = await response.json();
                    setBudgetData(json_response); // assign JSON response to the data variable.
                }
                else {
                    console.error('Error: budgetMonth is null or undefined');
                }
            }
            catch (error) {
                console.error('Error fetching socks:', error);
            }
        };

        fetchData();
    }, [budgetMonth]);


    //This function gets called when a budget item is going to be deleted.
    const handleDelete = async (id) => {
        console.log('Delete', {id});
        try {
            const response = await fetch(`http://localhost:3000/budget/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (!response.ok) {
                throw new Error('Error deleting the item');
            }
            // Remove the deleted item from the state
            setBudgetData(budgetData.filter(item => item._id !== id));
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <>
       
            {/* A table to display Budget data */}
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Category</th>
                        <th scope="col">Budget</th>
                        <th scope="col">Description</th>
                        <th scope="col">Type</th>
                        <th scope="col">Month</th>
                        {console.log(budgetData)}
                    </tr>
                </thead>
                <tbody>
                    {budgetData.map((item, index) => (
                        <tr key={item.id || index} className="budget-row">
                            <td>{index + 1}</td>
                            <td>{item.category}</td>
                            <td>{item.budget}</td>
                            <td>{item.description}</td>
                            <td>{item.type}</td>
                            <td>{item.month}</td>
                            <div className="budget-options">
                                <button onClick={() => handleEdit(item.id)}>Edit</button>
                                <button onClick={() => handleDelete(item._id)}>Delete</button>
                            </div>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>

        
    );
};

export default Budget;