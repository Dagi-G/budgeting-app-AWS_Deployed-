import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import Loans from './components/Loans';
import Budget from './components/budget.jsx';
import Home from './components/Home.jsx';
import moment from 'moment';    
import AddBudget from './components/addBudget.jsx';
import Income from './components/Income.jsx';
import logo from './../public/budget-app.svg';

function App() {
  const NextMonth = moment().add(1,'months').format('MMMM');
  const currentMonth = moment().format('MMMM');
  const pastMonth = moment().subtract(1, 'months').format('MMMM');
  const twoMonthsPast = moment().subtract(2, 'months').format('MMMM');
  const threeMonthsPast = moment().subtract(3, 'months').format('MMMM');
  const fourMonthsPast = moment().subtract(4, 'months').format('MMMM');
  const fiveMonthsPast = moment().subtract(5, 'months').format('MMMM');
  return (
    <Router>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <img src = {logo} style={{ height: '120px', width: 'auto' }} />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <Link className="nav-link" to='home'> Home </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to='loans'>Debts</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to='income'>Income</Link>
              </li>

              <li>
                <div class="dropdown">
                  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Budget
                  </a>
                  <ul class="dropdown-menu">
                  <li><Link to="budget" state={{month:NextMonth}}  class="dropdown-item">{NextMonth}</Link></li>
                    <li><Link to="budget" state={{month:currentMonth}}  class="dropdown-item">{currentMonth}</Link></li>
                    <li><Link to="budget" state={{month:pastMonth}} class="dropdown-item">{pastMonth}</Link></li>
                    <li><Link to="budget" state={{month:twoMonthsPast}} class="dropdown-item">{twoMonthsPast}</Link></li>
                    <li><Link to="budget" state={{month:threeMonthsPast}} class="dropdown-item">{threeMonthsPast}</Link></li>
                    <li><Link to="budget" state={{month:fourMonthsPast}} class="dropdown-item">{fourMonthsPast}</Link></li>
                    <li><Link to="budget" state={{month:fiveMonthsPast}} class="dropdown-item">{fiveMonthsPast}</Link></li>
                    <li><Link to="addBudget" type="button" class="btn btn-primary btn-lg"
                      style={{
                        backgroundColor: 'blue',
                        color: 'white',
                        padding: '10px 20px',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        fontSize: '.75rem',
                        float: 'right',
                        marginTop: '20px'
                      }}>
                      Insert Budget
                    </Link></li>
                  </ul>
                </div>
              </li>

            </ul>


            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="loans" Component={Loans} />
        <Route path="budget" Component={Budget} />
        <Route path="income" Component={Income} />
        <Route path="home" Component={Home} />
        <Route path="addBudget" Component={AddBudget} />
      </Routes>
    </Router>
  )
}

export default App
