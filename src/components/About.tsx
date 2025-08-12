import React from 'react';

export const About: React.FC = () => {
  return (
    <section>
      <div id="about" className="min-h-screen md:px-12 pt-16 px-6 dark:text-white bg-white dark:bg-gray-900">
        <header>
          <h1 className="text-3xl font-extrabold">About Me</h1>
        </header>
        <main>
          <p className="mt-3">
            My name is Bouon Wajdy, a 26 Y.O tunisia software engineering student. I have a strong passion for coding and building high-quality web applications.
            I am constantly seeking opportunities to grow professionally and contribute my skills to good projects and organizations.
          </p>
        </main>

        <section className="md:mt-8 mt-5">
          <h2 className="text-2xl font-bold">Experience</h2>

          <div className="w-full border-b pt-3 md:pb-5 pb-3">
            <div className='flex justify-between'>
              <h3 className="md:text-lg font-medium">Software Developer Intern</h3>
              <span className="text-xs bg-green-300 md:px-6 md:w-auto w-1/4 md:h-auto h-6 font-bold rounded-md text-green-700 text-center md:pt-1.5 pt-1">Full Time</span>
            </div>
            <div className="md:text-sm text-xs flex md:flex-row justify-between flex-col mt-2 md:gap-4 gap-1 ">
              <span>Mobelite LABS</span>
              <span>Juin 2025 - Present</span>
            </div>
          </div>

          <div className="w-full border-b pt-3 md:pb-5 pb-3">
            <div className='flex justify-between'>
              <h3 className="md:text-lg font-medium">Software Developer Intern</h3>
              <span className="text-xs bg-green-300 md:px-6 md:w-auto w-1/4 md:h-auto h-6 font-bold rounded-md text-green-700 text-center md:pt-1.5 pt-1">Full Time</span>
            </div>
            <div className="md:text-sm text-xs flex md:flex-row justify-between flex-col mt-2 md:gap-4 gap-1 ">
              <span>Mobelite LABS</span>
              <span>January 2023 - July 2023</span>
            </div>
          </div>
        </section>

        <section className="md:mt-8 mt-5">
          <h2 className="text-2xl font-bold">Education</h2>
          <div className="w-full border-b pt-3 md:pb-5 pb-3">
            <div className='flex justify-between'>
              <h3 className="md:text-lg font-medium">Degree in Software Engineering</h3>
              <span className="text-xs bg-green-300 md:px-6 md:w-auto w-1/4 md:h-auto h-6 font-bold rounded-md text-green-700 text-center md:pt-1.5 pt-1">Full Time</span>
            </div>
            <div className="md:text-sm text-xs flex md:flex-row justify-between flex-col mt-2 md:gap-4 gap-1 ">
              <span>EPI-international multidisciplinary school Of Sousse, Tunisia</span>
              <span>September 2023 - Present</span>
            </div>
          </div>
          <div className="w-full border-b pt-3 md:pb-5 pb-3">
            <div className='flex justify-between'>
              <h3 className="md:text-lg font-medium">Degree in Computer Science</h3>
              <span className="text-xs bg-green-300 md:px-6 md:w-auto w-1/4 md:h-auto h-6 font-bold rounded-md text-green-700 text-center md:pt-1.5 pt-1">Full Time</span>
            </div>
            <div className="md:text-sm text-xs flex md:flex-row justify-between flex-col mt-2 md:gap-4 gap-1 ">
              <span>ISIMM-Higher Institute Of Mathematics And Computer Science Of Monastir, Tunisia</span>
              <span>September 2021 - July 2023</span>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};
