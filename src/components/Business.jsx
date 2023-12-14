import React from 'react'
import styles,{layout} from '../style'
import { features } from '../contants'
import Button from './Button';

const FeatureCard=({icon,title,content,index})=>(
   <div className={`flex flex-row p-6 rounded-[20px] 
   ${index !== features.length-1 ? "mb-6": "mb-0"} feature-card`}> 
   <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter}
   bg-dimBlue`}>
    <img src={icon} alt='icon' className='w-[50%] h-[50%] object-contain'/>
   </div>
   <div className={`flex flex-1 flex-col ml-3`}>
    <h4 className='font-poppins text-white font-[18px]
    leading-[23px] mb-1 font-semibold'>{title}</h4>
    <p className='font-poppins text-dimWhite font-[16px]
    leading-[23px] font-normal'>{content}</p>
   </div>
   </div>
)
function Business() {
  return (
    <section className={layout.section} >
    <div className={layout.sectionInfo}>
    <h2 className={styles.heading2}>
    You do the business, <br className="sm:block hidden" /> we’ll handle
    the money.
    </h2>
     
     <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
     With the right credit card, you can improve your financial life by
     building credit, earning rewards and saving money. But with hundreds
     of credit cards on the market.
     </p>

    <div className='mt-10'>
    <Button/>
    </div>
    </div>
    
    <div className={`${layout.sectionImg} flex-col`}>
     {features.map((features,index)=>(
      <FeatureCard key={features.id} {...features}/>
     ))}
    </div>
    </section>
  )
}
 
export default Business