// This is the home page component for the portfolio
import React from "react";
import bello from "../BELLO.jpg";
export default function Home() {
  return (
    <section className="text-center py-20 px-4 sm:px-6 md:px-10">
      <h1 className="text-4xl sm:text-5xl font-bold text-blue-700 mb-4">Hi, I'm Bello Habeebullah</h1>
      <p className="text-lg sm:text-xl text-gray-600 mb-2">Frontend Developer | React Enthusiast</p>
      <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto mb-4">
        I'm a passionate developer currently diving into the world of backend development. I'm learning Node.js, Express, and database technologies like MongoDB and SQL. I aim to become a skilled full-stack developer, building both visually appealing and high-performing web applications.
      </p>
      <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
        I'm currently working on projects that involve API development, server-side logic, and real-time data handling. As I progress, I'm documenting my journey and applying my skills to build practical, user-focused solutions.
      </p>
      <div className="mt-10 flex justify-center">
        <img
          src={bello}
          alt="Bello Habeebullah"
          className="w-[250px] sm:w-[300px] md:w-[350px] h-[350px] sm:h-[400px] md:h-[450px] object-cover rounded-lg border-4 border-blue-500 shadow-lg"
        />
      </div>
    </section>
  );
}
