import React,{useState} from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ProductSlider from '../ProductsSlider/ProductSlider';
export default function Section0() {
   const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
     <section className='section_0 bg-white py-8'>
       <div className='container '>
          <div className='flex items-center justify-between'>
            
             <div className='left_Section'>
                <h3 className='text-[20px] font-[600]'>Popular Products</h3>
                <p className='font-[400]'>Do not miss the current offers until the end of the October </p>
             </div>

             <div className='right_section flex items-center w-[60%]  '>
     <Box sx={{ maxWidth: { xs: 320, sm: 480 , md:900 }, bgcolor: 'background.paper' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab label="Fashion" />
        <Tab label="Electronics" />
        <Tab label="Bags" />
        <Tab label="Footwear" />
        <Tab label="Purse" />
        <Tab label="Cosmetics" />
        <Tab label="Beauty" />
        <Tab label="Wellness" />
        <Tab label="Sunglasses" />
        <Tab label="Smart Tablet" />
        <Tab label="Furiture" />
      </Tabs>
    </Box>
</div>
 </div>
 <ProductSlider item={5}/>
</div>
</section>
    </>
  )
}
