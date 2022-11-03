import { Routes, Route } from 'react-router-dom';

import style from './../styles/Layout.module.css';

import Windowbar from './Windowbar';
import Sidebar from './Sidebar';
import Explorer from './Explorer';
import Tabsbar from './Tabsbar';
import Footer from './Footer';

import Home from './../pages/Home';
import About from './../pages/About';

const Layout = () => {
  return (
    <div>
      <Windowbar />
      <div className={style.layout}>
        <Sidebar />
        <Explorer />
        <div className={style.content} style={{width: '100%'}}>
          <Tabsbar />
          <Routes>
            <Route path={process.env.PUBLIC_URL + '/'} element={<Home />}></Route>
            <Route path={process.env.PUBLIC_URL + '/about'} element={<About />}></Route>
            {/* <Route path={process.env.PUBLIC_URL + '/contact'} element={<Contact />}></Route>
            <Route path={process.env.PUBLIC_URL + '/projects'} element={<Projects />}></Route>
            <Route path={process.env.PUBLIC_URL + '/blog'} element={<Blog />}></Route>
            <Route path={process.env.PUBLIC_URL + '/code-examples'} element={<CodeExamples />}></Route> */}
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Layout;