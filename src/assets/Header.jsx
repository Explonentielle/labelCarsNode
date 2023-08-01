import React, { useEffect, useRef, useState } from 'react';
import { Menu, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate()
    const [init, setInit] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    useEffect(() => {
        if (init === true) {
            setInit(false);
            setTimeout(() => setIsMenuOpen(true), 2000);
        }
    }, []);

    const handleMenuItemClick = (key) => {
        navigate(key.key)
        setIsMenuOpen(false);
    };

    return (
        <header id="header" className="header">
            <div className='iconContainer'>
                <img className='icon' src="/icons/icon.png" alt="" />
                <p>Interface </p>
            </div>
            <span className='menuContainer'>
                <div id="menuDetails" className="menuDetails" >
                    <Menu
                        className={`menuPerso ${isMenuOpen ? 'open' : ''}`}
                        mode={window.innerWidth <= 768 ? 'vertical' : 'horizontal'}
                        ref={menuRef}
                    >
                        <Menu.Item key="/" onClick={handleMenuItemClick}>
                            <p >Home</p>
                        </Menu.Item>
                        <Menu.Item key="/add" onClick={handleMenuItemClick}>
                            <p >add Cars</p>
                        </Menu.Item>
                    </Menu>
                </div>

                <div className='buttonCont'>
                    <Button
                        className="menu-button"
                        type="text"
                        icon={<MenuOutlined />}
                        onClick={toggleMenu}
                    />
                </div>
            </span>
        </header>
    )
}

export default Header;

