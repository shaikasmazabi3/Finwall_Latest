import React from 'react';
import { Card, useTheme } from "@mui/material";
import { tokens } from "../theme";
const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <div className='p-8'>
    <div className="grid grid-cols-4 gap-2">
    <Card className='shadow-none ' style={{ height:'10rem', backgroundColor: colors.primary[300] }}>
    </Card>
    <Card className='shadow-none ' style={{height:'10rem', backgroundColor: colors.primary[300] }}>
    </Card>
    <Card className='shadow-none ' style={{height:'10rem', backgroundColor:  colors.primary[300]  }}>
    </Card>
    <Card className='shadow-none ' style={{height:'10rem', backgroundColor:  colors.primary[300] }}>
    </Card>
    <Card className='shadow-none ' style={{height:'24rem', backgroundColor:  colors.primary[300] }}>
    </Card>
    <Card className='shadow-none col-span-2' style={{height:'24rem', backgroundColor:  colors.primary[300] }}>
    </Card>
    <Card className='shadow-none ' style={{height:'24rem', backgroundColor:  colors.primary[300] }}>
    </Card>
    <Card className='shadow-none ' style={{ height:'15rem', backgroundColor: colors.primary[300] }}>
    </Card>
    <Card className='shadow-none ' style={{height:'15rem', backgroundColor: colors.primary[300] }}>
    </Card>
    <Card className='shadow-none ' style={{height:'15rem', backgroundColor:  colors.primary[300]  }}>
    </Card>
    <Card className='shadow-none ' style={{height:'15rem', backgroundColor:  colors.primary[300] }}>
    </Card>
    </div>
    
    </div>
  )
}

export default Dashboard
