import React from 'react'
import SubHeaderButton from '../SubHeaderButton/SubHeaderButton'
import './SubHeader.css'
function SubHeader() {
    const About ={
        'Title':['TESTIMONIAL','VISUAL SHOWROOMS'],
        'link':['/testemonial','/Visual_Showrooms']
    }
    const Kitchen = {
        'Title':['Modern Kitchen','Hampton Kitchens'],
        'link':['/modern_kitchen','/Hampton_Kitchens']
    }
    const WARDROBES ={
        'Title':['Walk-Ins','Sliders','Hinge'],
        'link':['/Walk-Ins','/Sliders','/Hinge']
    }
    
    const CUSTOM_JOINERY={
        'Title':['Bathroom Varities','Laundries','Enterainment Units','BBQs'],
        'link':['/Bathroom_Varities','/Laundries','/Enterainment_Units','/BBQs']
    }
    const MATERIALS={
        'Title':['Accessories','Colours','Surfaces','Doors'],
        'link':['/Accessories','/Colours','/Surfaces','/Doors']
    }
    const CONTACT={
        'Title':['Why Renovate', 'Get A Quote','CAREER'],
        'link':['/Why_Renovate', '/Get_A_Quote','/Career']
    }
    return (
        <div className='subHeader'>
            <div className="button_subheader">
            <SubHeaderButton Name='HOME' link='/'/>
            <SubHeaderButton Name="ABOUT US" subName= {About} link='/About Us'/>
            <SubHeaderButton Name="KITCHEN" subName={Kitchen} link='/kitchen'/>
            <SubHeaderButton Name='LIVING ROOM' link='/LivingRoom' />
            {/* <SubHeaderButton Name='CUSTOM JOINERY' subName={CUSTOM_JOINERY}/> */}
            <SubHeaderButton Name='BLOG' link='/blog' />
            <SubHeaderButton Name='CONTACT US' link='/ContactUs'subName={CONTACT}/>

            </div>
        </div>
    )
}

export default SubHeader
