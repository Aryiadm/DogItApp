// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Navbar from './Navbar';
// import Community from './Community';
// import Stores from './Stores';
// import Records from './Records';
// import Profile from './Profile';
// import Login from './Login';
// import Settings from './Settings';
// import Notifications from './Notifications';
// import Bot from './Bot';
// import Chatbot from './Chatbot';
// import SignUp from './SignUp';
// //import FileUpload from './'

// const App = () => {
//   return (
//     <BrowserRouter>
//       <div>
//         <Navbar />
//         <Routes>
//           {/* Use Route components to specify paths and corresponding components */}
//           <Route path="/" element={<Community />} />
//           <Route path="/stores" element={<Stores />} />
//           <Route path="/records" element={<Records />} />
//           <Route path="/profile" element={<Profile />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/settings" element={<Settings />} />
//           <Route path="/notifications" element={<Notifications />} />
//           <Route path="/chatbot" element={<Chatbot />} />
//           <Route path="/signup" element={<SignUp />} />
//         </Routes>
//       </div>
//       <Bot/>
//     </BrowserRouter>
  
//   );
// };

// export default App;


import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext';  // Make sure to import AuthProvider
import Navbar from './Navbar';
import Login from './Login';
import SignUp from './SignUp';
import Community from './Community';
import Stores from './Stores';
import Records from './Records';
import Profile from './Profile';
import Settings from './Settings';
import Notifications from './Notifications';
import Bot from './Bot';
import Chatbot from './Chatbot';

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Community />} />
            <Route path="/stores" element={<Stores />} />
            <Route path="/records" element={<Records />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/chatbot" element={<Chatbot />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
        <Bot/>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
