import React from "react";

export default function Home() {
  return (
    <div className="bg-white dark:bg-slate-900 w-full h-full pt-20 flex justify-center items-center flex-col dark:text-white" style={{ backgroundImage: 'url("OIP (2).jpeg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <h1 className="text-7xl font-bold text-center mb-4">Welcome to Jolt</h1>
      <p className="text-lg text-center font-bold mb-8">Lightning Fast Stats</p>
    </div>
  );
}
