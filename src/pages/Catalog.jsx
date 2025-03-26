import React from 'react'
import { useParams } from 'react-router'
import { useState } from 'react';
import { categories } from '../services/apis';
import { apiConnector } from '../services/apiConnector';
import { useEffect } from 'react';
import CourseSlider from '../Components/core/Catalog/CourseSlider';
import { getCatalogaPageData } from '../services/operations/pageAndComponentData';
import CatalogCard from '../Components/core/Catalog/CatalogCard';
import { useDispatch } from 'react-redux';

const Catalog = () => {

  const Catalog = useParams();
  const [Desc, setDesc] = useState([]);
  const [CatalogPageData, setCatalogPageData] = useState(null);
  const [categoryID, setcategoryID] = useState(null);
  const [activeOption, setActiveOption] = useState(1);
  const dispatch = useDispatch();


  const fetchSublinks=  async ()=>{
    try {
        const result = await apiConnector("GET",categories.CATEGORIES_API);
        const category_id= result.data.data.filter((item)=>item.name=== Catalog.catalog)[0]._id;
        setcategoryID(category_id);      
        setDesc(result.data.data.filter((item)=>item.name=== Catalog.catalog)[0]);
        // console.log("Desc",Desc);  
        // console.log(category_id);
    } catch (error) {
        console.log("could not fetch sublinks");
        console.log(error);
    }
}
useEffect(() => {
    fetchSublinks();
}, [Catalog])

useEffect(() => {
    const fetchCatalogPageData = async () => {
        
            const result = await getCatalogaPageData(categoryID,dispatch);
            setCatalogPageData(result);
            // console.log("page data",CatalogPageData);
        
    }
    if (categoryID) {
        fetchCatalogPageData();
    }
}, [categoryID])


  return (
    <div>
      <div className='box-content px-4 bg-richblack-800'>
      <div className='mx-auto flex min-h-[260px]  flex-col justify-center gap-4 '>
        <p className='text-sm text-richblack-300'>Home / Catalog / <span className='text-yellow-25'>{Catalog.catalog}</span> </p>
        <p className='text-3xl text-richblack-5'>{Catalog?.catalog}</p>
        <p className='max-w-[870px] text-richblack-200'>
          {Desc?.description}
        </p>
      </div>
      </div>

      <div className='box-content w-full px-2 py-12 mx-auto max-w-maxContentTab lg:max-w-maxContent'>
        <h2 className='Courses to get you started'>
        Courses to get you started
        </h2>
        <div className='flex my-4 text-sm border-b border-b-richblack-600'>
          <button onClick={()=>{setActiveOption(1)}}  className={activeOption===1? `px-4 py-2 border-b border-b-yellow-25 text-yellow-25 cursor-pointer`:`px-4 py-2 text-richblack-500 cursor-pointer` }>Most Populer</button>
          <button onClick={()=>{setActiveOption(2)}} className={activeOption===1?'px-4 py-2 text-richblack-500 cursor-pointer':'px-4 py-2 border-b border-b-yellow-25 text-yellow-25 cursor-pointer'}>New</button>
        </div>
        <CourseSlider Courses={CatalogPageData?.selectedCourses}/>        
      </div>

      <div className='box-content w-full px-4 py-12 mx-auto max-w-maxContentTab lg:max-w-maxContent'>
        <h2 className='mb-6 text-xl section_heading md:text-3xl text-richblack-500'>
          Similar to {Catalog.catalog}
        </h2>
        <CourseSlider Courses={CatalogPageData?.differentCourses}/>
      </div>
      
      <div className='box-content w-full px-2 py-12 mx-auto max-w-maxContentTab lg:max-w-maxContent'>
        <h2 className='mb-6 text-xl section_heading md:text-3xl text-richblack-500'>
          Frequently BoughtTogether
          </h2>
          <div className='grid grid-cols-2 gap-3 pr-4 lg:gap-6 lg:grid-cols-2'>
            {
              CatalogPageData?.mostSellingCourses?.map((item,index)=>(
                <CatalogCard key={index} course={item} Height={"h-[100px] lg:h-[400px]"} />
              ))
            }
          </div>
      </div>

    </div>
  )
}

export default Catalog