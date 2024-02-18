import React from 'react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { Input } from 'postcss'

const Form = (Input) => {
return(
    <div className="absolute self-center bg-blue-900  text-gray-800">
     <form>
        <div className="">
            <Input name="firstName" placeholder="Type your first name here!" />

            <Input name="lastName" placeholder="Type your last name here!" />

            <Input name="Email" placeholder="Type your Email here!" />

            <Input name="Password" placeholder="Type your Password here!" />
        </div>
    <div className="bg-amber-300 justify-items-center"> 
     <button> 
        Submit
     </button>
    </div>
     </form>
    </div>
 )
}

export default Form;