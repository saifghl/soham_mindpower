import { useLocation, useNavigate } from "react-router";

function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();

    const currentPath = location.pathname;

    const navItems = [{ label: 'Home', href: '/' }, { label: 'About', href: '/about' }, { label: 'Services', href: '/services' }, { label: 'Gallery', href: '/gallery' }, { label: 'Contact', href: '/contact' }];
    const handleNavItemClick = (item) => {
        navigate(item.href)
    }

    return (

        <>
        <nav>
            <div className="flex justify-between items-center py-[24px] pl-[74px] pr-[167px] gap-2">
                <div className="text-[32px] text-[#0057B8] font-jaini">sohaam mindpower</div>
                <div className="flex gap-[24px]">
                    {navItems.map((item) => (
                        <div onClick={() => handleNavItemClick(item)} key={item.label} className={`text-[16px] font-inter cursor-pointer ${currentPath === item.href ? 'text-[#0057B8]' : 'text-black'}`}>{item.label}</div>
                    ))}
                </div>
                <div className="flex gap-4">
                    <div className="text-center align-middle text-[14px] text-black font-semibold border-[1px] border-[#0057B8] rounded-md px-[18px] py-[15px] cursor-pointer">Login</div>
                    <div className="text-center align-middle text-[14px] text-white bg-[#0057B8] rounded-md px-[18px] py-[14px] cursor-pointer font-semibold font-inter">Admin Login</div>
                </div>
            </div>
        </nav >
        </>
    )
}

export default Navbar;