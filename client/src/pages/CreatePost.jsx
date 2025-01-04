import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { preview } from '../assets'
import { Loader, FormField } from '../components'
import { getRandomPromt } from '../utils'

const CreatePost = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: ''
  })

  const [generatingImg, setGeneratingImg] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = () => {

  }

  const handleChange = () => {

  }

  const handleSurpriseMe = () => {

  }

  return (
    <section className='max-w-7xl mx-auto'>
      <div>
        <h1 className='font-extrabold text-[32px] test-[#222328]'>Create</h1>
        <p1 className='text-[16px] text-[#666e75] mt-2 max-w-[500px]'>Create imaginative and visually stunning images through WALLE- AI and share it with Community</p1>
      </div>

      <form className='max-w-3xl mt-16' onSubmit={handleSubmit}>
        <div>
          <FormField
            labelName='Your Name'
            type='text'
            name='name'
            placeholder='Asif'
            value={form.name}
            handleChange={handleChange}
          />

          <FormField
            labelName='prompt'
            type='text'
            name='prompt'
            placeholder='an armchair in the shape of an avocado'
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />

          <div >
            {form.photo ? (
              <img
                src={form.photo}
                alt={form.prompt}
                className='w-full h-full object-contain'
              />
            ) : (
              <img 
                src={preview}
                alt={preview}
                className='w-8/12 h-8/12 object-contain opacity-40'
              />
            )}

          </div>
        </div>

      </form>
    </section>
  )
}

export default CreatePost