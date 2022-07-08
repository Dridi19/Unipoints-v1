import React from 'react';
import Login from "./login.js"
import Rewards from "./Rewards.js"
import Rewardpage from "./Rewardpage.js"
import Scan from "./Scan.js"
import Register from "./register.js"
import Reduction from "./Reduction.js"
import Maps from "./Maps.js"
import Coupon from "./Coupon.js"

import Settings from "./settings.js"
import Mainpage from "./Mainpage.js"
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
    <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />}>
          </Route>
          <Route path="/login" element={<Login />}>
          </Route>
          <Route path="/maps" element={<Maps />}>
          </Route>
          <Route path="/" element={<Mainpage />}>
          </Route>
          <Route path="/home" element={<Rewards />}>
          </Route>
          <Route path="/scan" element={<Scan />}>
          </Route>
          <Route path="/rewards" element={<Rewardpage />}>
          </Route>
          <Route path="/reduction" element={<Reduction />}>
          </Route>
          <Route path="/settings" element={<Settings />}>
          </Route>
          <Route path="/coupon" element={<Coupon />}>
          </Route>
        </Routes>
      </BrowserRouter>

</div>

  );
}

export default App;
