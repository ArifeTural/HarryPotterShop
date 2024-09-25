import React from 'react'

const Login = () => {
  return (
    <div className='loginDiv  text-white'>

        <div className=' logginn  h-[500px] w-11/12 sm:w-[475px] rounded-[20px] p-5 flex flex-col justify-center text-center'>
        <div className='flex justify-center items-center mt-2 gap-3'>
            <span className='w-[6px] h-[39px] bg-red-900 '></span>
            <h1 className='text-[22px] sm:text-[32px] font-montserrat font-700'>Harry Potter Store</h1>
        </div>

        <div className='my-2'>
            <h3 className=' font-montserrat font-[600] text-[22px] '> SIGN IN</h3>
            <p className='text-labelColor text-label mt-1'>Enter your credetentials to access your account</p>
        </div>
        <form className='flex flex-col text-left p-3 gap-5'>
            <div className='flex flex-col gap-2'>
                <label className="font-montserrat text-label hover:after:content-['harry@potter.com'] hover:after:l-3 hover:after:underline hover:cursor-pointer " htmlFor="email">
                Email
                </label>
                <input className='login-input' type="email" />
            </div>
        </form>


        </div>
    </div>
  )
}

export default Login