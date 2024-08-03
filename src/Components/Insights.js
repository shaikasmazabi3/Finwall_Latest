import React from 'react'
import { Card, useTheme } from "@mui/material";
import { tokens } from "../theme";
const Insights = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <div className='p-8'>
    <div className='grid grid-cols-4 gap-2'>
    <Card className='shadow-none ' style={{height:'25.5rem', backgroundColor:  colors.primary[300] }}>
    </Card>
    <div className='col-span-2 grid grid-cols-3 gap-2'>
    <Card className='shadow-none col-span-3' style={{height:'10rem', backgroundColor:  colors.primary[300] }}>
    </Card>
    <Card className='shadow-none ' style={{height:'15rem', backgroundColor:  colors.primary[300] }}>
    </Card>
    <Card className='shadow-none ' style={{height:'15rem', backgroundColor:  colors.primary[300] }}>
    </Card>
    <Card className='shadow-none ' style={{height:'15rem', backgroundColor:  colors.primary[300] }}>
    </Card>
    </div>
    <Card className='shadow-none ' style={{height:'25.5rem', backgroundColor:  colors.primary[300] }}>
    </Card>
    </div>
    {/* <div className='mt-2 grid grid-cols-5 gap-2'>
    <Card className='shadow-none col-span-2' style={{height:'20rem', backgroundColor:  colors.primary[300] }}>
    </Card>
    <Card className='shadow-none col-span-1' style={{height:'20rem', backgroundColor:  colors.primary[300] }}>
    </Card>
    <Card className='shadow-none col-span-2' style={{height:'20rem', backgroundColor:  colors.primary[300] }}>
    </Card>
    </div> */}
    <div className='mt-2 grid grid-cols-4 gap-2'>
    <Card className='shadow-none col-span-1' style={{height:'20rem', backgroundColor: colors.primary[300] }}>
    </Card>
    <div className='col-span-3 grid grid-cols-2 gap-2'>
    <Card className='shadow-none col-span-1' style={{height:'20rem', backgroundColor:  colors.primary[300]  }}>
    </Card>
    <Card className='shadow-none col-span-1' style={{height:'20rem', backgroundColor:  colors.primary[300]  }}>
    </Card>
    </div>
    </div>
    </div>
  )
}

export default Insights
