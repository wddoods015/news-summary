// components/Menu.tsx - 메뉴바

import React from "react";

interface MenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const Menu: React.FC<MenuProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    return (
<div className="fixed inset-0 bg-black bg-opacity-50 flex">
 <dialog>
 menu modal
 <button onClick={onClose}>Close Modal</button>
 </dialog>   
</div>
    );
};

export default Menu;