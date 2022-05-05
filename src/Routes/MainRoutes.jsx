import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Flash from '../Components/Flash/Flash';
import Kids from '../Components/Flash/Kids';
import Mens from '../Components/Flash/Mens';
import Home from '../Components/Flash/Home';
import Beauty from '../Components/Flash/Beauty';

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="flash/women" element={<Flash/>}/>
        <Route path="flash/kids" element={<Kids/>}/>
        <Route path="flash/mens" element={<Mens/>}/>
        <Route path="flash/home" element={<Home/>}/>
        <Route path="flash/beauty" element={<Beauty/>}/>

      </Routes>
    </div>
  )
}

      <Routes>
        <Route path="signin" element={<SignIn />} />
        <Route path="createacc" element={<CreateAcc />} />
        <Route path="products" element={ <Products />}/>
        <Route path="description" element={<Description/>}/>
      </Routes>
    </>
  );
};

export default MainRoutes;
