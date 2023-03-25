import React from "react";
import profilePicture from "../public/profile.jpg";
import Image from "next/image";

function ProfilePage() {
  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <nav className="flex justify-between items-center bg-[#d2a2de] px-10 py-5 mb-5">
        <h1 className="text-2xl font-bold text-white">My Profile</h1>
        <p className="text-lg text-white">Welcome, Prapitchaya Tantivit</p>
      </nav>

      {/* Profile Content */}
      <div className="flex flex-col items-center justify-center flex-1 bg-white text-black">
        <Image className="h-20 w-20 object-cover rounded-full" src={profilePicture} alt="Profile Picture" />
        <header className="mb-10 text-center bg-white p-5 rounded-lg ">
          <h1 className="text-3xl font-bold mt-5">Prapitchaya Tantivit</h1>
        </header>

        <section className="mb-10 w-[50rem] text-center bg-white p-5 rounded-lg ">
          <h2 className="text-2xl font-bold mb-3 ">About Me</h2>
          <p>
            Hi, I'm Prapitchaya Tantivit. I'm passionate about anything related to computers, particularly web programming. I'm also very interested in the MBTI personality assessment system and love to explore its intricacies. In my free time, I enjoy indulging in my hobbies, such as singing and gaming. I find these activities to be a great way to unwind after a long day.
          </p>
        </section>

        <section className="text-center bg-white p-5 rounded-lg ">
          <h2 className="text-2xl font-bold mb-3">Contact Information</h2>
          <p>
            Email: s6530613019@phuket.psu.ac.th <br />
            Phone: 123-456-7890 <br />
            Address: Kathu, Phuket, Thailand.
          </p>
        </section>
      </div>

      {/* Footer */}
      <footer className="text-center bg-[#d2a2de] text-white py-3 mt-5">
        Created by Prapitchaya Tantivit
      </footer>
    </div>
  );
}

export default ProfilePage;
