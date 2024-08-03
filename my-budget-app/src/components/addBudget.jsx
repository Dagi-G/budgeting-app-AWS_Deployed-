import React, { useState } from 'react';
const apiUrl = import.meta.env.VITE_APP_API_URL;


const AddBudget = ({ onSubmit }) => {
    const [category, setCategory] = useState('');
    const [budget, setBudget] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('');
    const [month, setMonth] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Validation: Check if any required field is empty
        if (!category || !budget || !description || !type || !month) {
            setError('Please fill out all fields');
            return;
        }

        const newBudget = {
            category : category,
            budget : parseFloat(budget),
            description : description,
            type : type,
            month : month
        };

        console.log(newBudget);
        try {
            const response = await fetch(`${apiUrl}/budget`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newBudget),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
        }catch (error) {
            console.error('Error adding budget:', error);
            alert('Failed to add budget. Please try again.');
        }

        // Notify user with an alert upon successful submission
        alert('Budget added successfully!');
        // Clear the fields after submit.
        setCategory('');
        setBudget('');
        setDescription('');
        setType('');
        setMonth('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Category:</label>
                <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />
            </div>
            <div>
                <label>Budget:</label>
                <input type="number" value={budget} onChange={(e) => setBudget(e.target.value)} required />
            </div>
            <div>
                <label>Description:</label>
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
            </div>
            <div>
                <label>Type:</label>
                <input type="text" value={type} onChange={(e) => setType(e.target.value)} required />
            </div>
            <div>
                <label>Month:</label>
                <input type="text" value={month} onChange={(e) => setMonth(e.target.value)} required />
            </div>
            <button type="submit">Add Budget</button>
        </form>
    );
};

export default AddBudget;
