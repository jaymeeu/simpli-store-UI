import React, { useState } from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import Button from './Button';

import Input, { Select, Textarea } from './Input';
import { useEffect } from 'react';

const UpdateUser = ({ close, showClose }) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [description, setdescription] = useState('')
    const [storeName, setStoreName] = useState('')
    const [role, setRole] = useState('')

    const createUser = () => {
       
      }
    
      //update user
      const updateUser = () => {
        
      }

    const handleUpdateUser = (e) => {
        //call close function on successfull update
        e.preventDefault();

       
    }

    return (
        <div className="h-screen  bg-half-transparent w-full fixed nav-item top-0 right-0 z-20 flex justify-center align-middle p-4 ">
           
            <div className="h-auto duration-1000 ease-in-out dark:text-gray-200 transition-all dark:bg-[#484B52] bg-white w-400 p-8">
                <div className="flex justify-between items-center">
                    <p className="font-semibold text-lg">Update profile</p>
                    {
                        showClose &&
                        <Button
                            onClick={close}
                            icon={<MdOutlineCancel />}
                            color="rgb(153, 171, 180)"
                            bgHoverColor="light-gray"
                            size="2xl"
                            borderRadius="50%"
                        />
                    }
                </div>

                <div className="py-4 sm:py-6">
                    <form className="m-auto mt-8 max-w-xl">

                        <Input
                            handleChange={(e) => setName(e.target.value)}
                            value={name}
                            labelText='Name'
                            labelFor="name"
                            id="name"
                            name="name"
                            type="text"
                            isRequired={true}
                            placeholder='Fullname'
                        />
                        <Input
                            handleChange={(e) => setEmail(e.target.value)}
                            value={email}
                            labelText='Email'
                            labelFor="email"
                            id="email"
                            name="email"
                            type="email"
                            disabled={true}
                            isRequired={true}
                            placeholder='Email'
                        />
                       
                            <Select
                            options={
                                [
                                    { label: "Select how you want to operate", value: '' },
                                    { label: "Buyer", value: 'buyer' },
                                    { label: "Seller", value: 'seller' }
                                ]
                            }
                            handleChange={(e) => setRole(e.target.value)}
                            value={role}/>
                      
                        
                                <Input
                                    handleChange={(e) => setStoreName(e.target.value)}
                                    value={storeName}
                                    labelText='Store name'
                                    labelFor="storeName"
                                    id="storeName"
                                    name="storeName"
                                    type="text"
                                    isRequired={true}
                                    placeholder='Store name'
                                />

                                <Textarea
                                    handleChange={(e) => setdescription(e.target.value)}
                                    value={description}
                                    labelText='Description'
                                    labelFor="description"
                                    id="description"
                                    name="description"
                                    type="textarea"
                                    rol={4}
                                    isRequired={true}
                                    placeholder='Description'
                                />
                         



                        <Button
                            color="white"
                            bgColor='var(--main)'
                            text="Update profile"
                            borderRadius="10px"
                            width="full"
                            onClick={handleUpdateUser}
                        />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default UpdateUser;