import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UpdateEmployee = () => {
    const [employeeDetails, setEmployeeDetails] = useState({
        name: "",
        email: "",
        level: "",
        mobileNumber: ""
    }); 
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        const id = params.id.toString();
        axios.get(`${process.env.REACT_APP_BASE_URL}/employees/${id}`).then(response => {
            setEmployeeDetails(response.data[0]);
            console.log(response)
        }).catch(err => {
            console.log('Error: ', err);
        })
    }, [params.id])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const id = params.id.toString();
        const newEmployee = {...employeeDetails};
        try{
            const response = await axios.put(`${process.env.REACT_APP_BASE_URL}/employees/${id}`, newEmployee);
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
            <h3>Update an Employee</h3>
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
                        value="Update Employee"
                        className="btn btn-primary"
                    />
                    </div>
           </form>
        </div>
    )
}

export default UpdateEmployee;