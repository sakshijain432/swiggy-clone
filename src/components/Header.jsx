import { useState } from 'react';
import { RxCaretDown } from 'react-icons/rx';
import { IoIosSearch } from 'react-icons/io';
import { CiDiscount1 } from 'react-icons/ci';


const Header = () => {
    const [toggle,setToggle]  = useState(false);
    const showSideMenu = () =>{
        console.log("hi");
        setToggle(true);
    }

    const hideSideMenu = () => {
        setToggle(false);
    }

    const links =[
        {
            icon: <IoIosSearch/>,
            name: "Search"
        },
        {
            icon: <CiDiscount1 />,
            name: "Offer",
            sup:"New",
        },
        {
            icon: <CiDiscount1 />,
            name: "Help"
        },
        {
            icon: <CiDiscount1 />,
            name: "Sign In"
        },
        {
            icon: <CiDiscount1 />,
            name: "Cart",
            sup:"2"
        }
    ];
    return (
      <>
        <div className='black-overlay w-full h-full fixed duration-500' onClick={hideSideMenu} style={{
            opacity:toggle ? 1 : 0,
            visibility:toggle ? "visible" : "hidden" 
        }}>  
      {/** side menu */}
        <div onClick={(e) => {
            e.stopPropagation();
        }} className='w-[500px] bg-white h-full absolute duration-[400ms]' style={{
            left:toggle ? '0%' : '-100%'
        }}>
        </div>

      </div>

       <header className="p-[15px] shadow-xl text-[#686b78] sticky top-0 bg-white z-[9999]">
            <div className="max-w-[1200px] mx-auto  flex items-center ">
                
                <div className="w-[100px] ">
                    <img src="  images/swiggyLogo.png" className="w-full" alt="logo" />
                </div>
                <div className="">
                   <span className="font-bold border-b-[3px] border-[black]">Sitapura</span> Rajasthan Jaipur ,India <RxCaretDown onClick={showSideMenu} fontSize={25} className='inline text-[#fc8019] cursor-pointer'/>
                </div>

                <nav className='hidden md:flex list-none gap-10 ml-auto font-semibold text-[18px]'>
                   {
                    links.map((item,idx) => {
                        return <li key={idx} className='flex items-center gap-2 hover:text-[#fc8019] cursor-pointer'>
                            {item.icon}
                            {item.name}
                            <sup>{item.sup}</sup>
                        </li>
                    })
                   }
                </nav>
                
            </div>
       </header>
       </>
    )
}


export default Header;