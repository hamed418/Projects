import React from 'react'
import styles from '../style'
import { clients } from '../contants';

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} mt-7 mb-7`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client)=>(
       <div className={`${styles.flexCenter} sm:min-w-[192px]
       min-w-[129px] flex-1`}>
       <img src={client.logo} alt='client__image' className='w-[120px]
       sm:w-[190px]'/>
       </div>
      ))}
    </div>
    </section>
  )
}

export default Clients