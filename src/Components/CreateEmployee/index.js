import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateEmployee = () => {
    const [employeeDetails, setEmployeeDetails] = useState({
        name: "",
        email: "",
        level: "",
        mobileNumber: ""
    }); 
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newEmployee = {...employeeDetails};
        try{
            const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/employees`, newEmployee);
            if(response){
                setEmployeeDetails({
                    name: "",
                    email: "",
                    level: "",
                    mobileNumber: ""
                });
                navigate('/');
            }
        }catch(err){
            console.log('Error: ', err);
        }
    };

    const handleForm = (value) => {
        return setEmployeeDetails(employee => {
            return {...employee, ...value}
        })
    }


    return (
        <div>
            <h3>Create an Employee</h3>
           <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input className="form-control" id="name" type="text" value={employeeDetails.name} onChange={e => handleForm({name: e.target.value})} />
                </div>
                <div className="form-group">
                    <label htmlFor="level">Level:</label>
                    <input className="form-control" id="level" type="text" value={employeeDetails.level} onChange={e => handleForm({level: e.target.value})} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input className="form-control" id="email" type="text" value={employeeDetails.email} onChange={e => handleForm({email: e.target.value})} />
                </div>
                <div className="form-group">
                    <label htmlFor="mobileNumber">Mobile Number:</label>
                    <input className="form-control" id="mobileNumber" type="text" value={employeeDetails.mobileNumber} onChange={e => handleForm({mobileNumber: e.target.value})} />
                </div>

                <div className="form-group">
                    <input
                        type="submit"
                        value="Create an Employee"
                        className="btn btn-primary"
                    />
                    </div>
           </form>
        </div>
    )
}

export default CreateEmployee;