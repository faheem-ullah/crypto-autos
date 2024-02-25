"use client"
import React, { useState } from 'react';

const Drawer = ({ children,isOpen,toggle }) => {
 

  return (
    <div>
     
      <div
        className={`fixed top-0 right-0 w-64  bg-black transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out flex flex-col z-50`}
      >
        <button
          onClick={toggle}
          className="self-end px-4 py-2 text-white"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
};

export default Drawer;
