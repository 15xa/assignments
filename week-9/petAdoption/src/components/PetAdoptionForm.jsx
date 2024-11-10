import React, { useState } from 'react'

const PetAdoptionForm = ({ onSubmit }) => {

  const [petName, setPetName] = useState('')
  const [petType, setPetType] = useState('')
  const [breed, setBreed] = useState('')
  const [adoptorName, setAdopterName] = useState('')
  const [adopterEmail, setAdopterEmail] = useState('')
  const [adopterNumber, setAdopterNumber] = useState('')

  const SubmitedForm = (e) => {
    e.preventDefault();
    const formData = {
      petName,
      petType,
      breed,
      adoptorName,
      adopterEmail,
      adopterNumber

    }
    onSubmit(formData);

    setPetName('');
    
    setBreed('');
    setAdopterName('');
    setAdopterEmail('');
    setAdopterNumber('');
    
    return 
  }


    return <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center'}}>
      <div style={{
        backgroundColor: 'rgba(30, 234, 34, 0.26)', width: 405, height: '100vh', padding: 40
      }}>
        <form id='adopt' onSubmit={SubmitedForm}> 
          <h3>Pet Name</h3>
          <input type='text' placeholder='Pet Name' onChange={(e) => setPetName(e.target.value)}/>
          <h3>Pet type</h3>
          <select name='pet' placeholder='Pet type' onChange={(e) => setPetType(e.target.value)}>
            <option id='option1' className='options' value={'dog'}>Dog</option>
            <option id='option2' className='options' value={'cat'}>cat</option>
            <option id='option3' className='options' value={'donkey'}>donkey</option>
            <option id='option4' className='options' value={'none'}>exploring</option>
          </select>
          <h3>breed</h3>
          <input type='text' placeholder='Pet breed' onChange={(e) => setBreed(e.target.value)}/>
          <h3>Your Name</h3>
          <input type='text' placeholder='Your Name' onChange={(e) => setAdopterName(e.target.value)}/>
          <h3>Your Email</h3>
          <input type='email' placeholder='Your Email' onChange={(e) => setAdopterEmail(e.target.value)}/>
          <h3>Your Phone Number</h3>
          <input type='text' placeholder='Number' onChange={(e) => setAdopterNumber(e.target.value)}/>
          <input type='submit' value={'submit'}></input>
          
        </form>
      </div>
    </div>
  }

export default PetAdoptionForm