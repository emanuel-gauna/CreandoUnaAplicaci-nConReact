import React from 'react';
import { Layout } from '../layout';
import { ContentWrapper } from '../components/ContentWrapper/index.jsx';
/* import { Dashboard } from '../Dashboard'; */

function App() {
  return (
    <div id="wrapper">
  <Layout> 
     <ContentWrapper />
   {/*   <Dashboard /> */}
   </Layout> 
    </div>
  );
}

export default App;
