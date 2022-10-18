import React from 'react'
import './registration.scss'

function Registration({data, setData, file, setFile}) {

// Upload Image
const handleFile = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]))
}

// Accept number only
const numberOnly = (e) => {
    if (!/[0-9]/.test(e.key)) {
        e.preventDefault();
    }
}

//Create Account
const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e)
   setData([
    ...data,
    {
        id: e.target[0].value,
        firstName: e.target[1].value,
        lastName: e.target[2].value,
        email: e.target[3].value,
        contact: e.target[4].value,
        courses: e.target[5].value,
        gender: e.target[6].value,
        gender: e.target[7].value,
        file: e.target[8].value,
    }
   ])

   
   e.target[0].value = "";
   e.target[1].value = "";
   e.target[2].value = "";
   e.target[3].value = "";
   e.target[4].value = "";
   e.target[6].value = "";
   e.target[7].value = "";
   e.target[8].value = "";
}

  return (
    <div className='registrationForm'>
        <h1>Basic Information</h1>
        <form  onSubmit={handleSubmit}>
            <label>Student ID: </label>
            <section>
                <input type="text" className='inputValue' id="id" onKeyPress={numberOnly} required />
            </section>


             <label>First Name: </label>
            <section>
                <input type="text" className='inputValue' id="firstName" required/>
            </section>

            <label>Last Name: </label>
            <section>
                <input type="text" className='inputValue' id="lastName" required/>
            </section>

            <label>Email Address: </label>
            <section>
                 <input type="email"  className='inputValue' id="email" required/>
            </section>

            <label>Contact#: </label>
            <section>
                 <input type="text" className='inputValue' id="contact" onKeyPress={numberOnly} required />
            </section>

            <label>Course: </label>
            <section>
            <select className='inputValue' id="courses">  
                <option value = "BMW" id="course1"> Computer Science/Programming  
                </option>  
                <option value = "Mercedes" id="course2"> Civil Engineering   
                </option>  
                <option value = "Audi" id="course3"> Medical and healthcare
                </option>  
                <option value = "Skoda" id="course4"> Commerce or Economics  
                </option>  
                </select>
            </section>

            
            <section className='gender'>
            <label>Gender: </label>
                <input type="radio" id="male"  value="male" name="gender"/>
                <label htmlFor="male">Male</label>
                <input type="radio" id="female" value="female" name="gender" />
                <label htmlFor="female">Female</label>
            </section>
            
           
            <section>
            <label>Picture: </label>
                <input type="file" id="file" onChange={handleFile} />
            </section>

            <section className='createAccount'>
                <input type="submit" value="Create Account" />
            </section>


        </form>
    </div>
  )
}

export default Registration