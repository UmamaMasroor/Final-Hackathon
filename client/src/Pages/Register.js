import React from 'react'

const Register = () => {
  return (
    <>
   <div className='container shadow'>
<h2 className='text-center my-3'>Sign Up Here</h2>
<div className='col-md-12 my-3 d-flex items-center justify-content-center'>
  <div className='row'>
    <form>
      <div className='mb-3'>
        <label htmlFor='formGroupExampleInput' className='form-label'>Name</label>
        <input type='text' name='name' className='form-control' id='formGroupExampleInput' placeholder='Enter Name'/>
      </div>

      <div className='mb-3'>
      <label htmlFor='formGroupExampleInput' className='form-label'>Email</label>
      <input type='text' name='email' className='form-control' id='formGroupExampleInput' placeholder='Enter Email'/>
      </div>

      <div className='mb-3'>
      <label htmlFor='formGroupExampleInput' className='form-label'>Password</label>
      <input type='password' name='password' className='form-control' id='formGroupExampleInput' placeholder='Enter Password'/>
      </div>

      <div className='mb-3'>
        <button type='submit' className='btn btn-primary btn-block'>Sign Up</button>
      </div>
    </form>
  </div>
</div>
    </div>
    </>
  )
}

export default Register;