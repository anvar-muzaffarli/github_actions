import React from 'react'

import {MovingComponent} from 'react-moving-text'


const Maintance = () => {
  return (
    <>

<MovingComponent
  type="popOut"
  duration="1000ms"
  delay="0s"
  direction="normal"
  timing="ease"
  iteration="infinite"
  fillMode="none">
<h1 className='text-center text-danger'>MERN stack üzrə kadr hazırlığının təşkili ( 4 ay) ixtisas proqramına qəbul başladı!</h1>
</MovingComponent>
    <marquee className='text-center text-warning bg-success p-3'>Sistem maintance modundadır. O zamanadək sizi sadəcə qeydiyyat formu qarşılayacaq. Lütfən, məlumatlarınızı doğru daxil edin və müqavilə bəndlərini diqqətlə oxuyun</marquee>
    </>
  )
}

export default Maintance