import Image from "next/image";
import nisi from "@/public/assets/nisi.jpeg";
import Footer from "./components/Footer";
import Socials from "./components/Socials";
import ProjectCards from "./components/ProjectCards";
import WorkCards from "./components/WorkCards";
import Music from "./components/Music";
import dp from "@/public/favicon-32x32.png";

export default function Home() {
  return (
    <div className=" bg-slate-700 min-h-screen p-2 sm:p-4">
      <div className="mx-auto my-4 lg:my-10 text-lg lg:w-[1000px] xl:w-[1100px] bg-gray-900 text-white rounded-3xl shadow-2xl shadow-gray-800 overflow-hidden">
        <section className="p-4 m-4 sm:m-6 lg:m-8 border-slate-700 border-b">
          <div className="flex items-center">
            <Image
              src={nisi}
              alt="Nisiman's profile image"
              width={80}
              height={80}
              className="lg:block rounded-full mr-4"
            />
            <h1 className="text-xl font-bold leading-tight sm:text-4xl">
              Nisiman
            </h1>
          </div>
        </section>

        {/* About section */}
        <section className="p-4 m-4 lg:w-5/6 sm:m-6 lg:mx-8 lg:my-4">
          <h2 className="text-xl font-bold leading-tight sm:text-2xl">
            About Me
          </h2>
          <p className="mt-2">
            Hi there! I&apos;m Nisiman, a final year BEng(Hons) Computer Science
            student at The University of Edinburgh. I am doing my honours
            project on generating a synthetic email meta dataset.
          </p>
          <p className="mt-2">
            I am mainly interested in Software and Web Development, Machine
            Learning, and Distributed/Parallel Computing. In my free time, I
            like working out, playing chess and listening to French House music
            <Image
              className="inline m-1"
              src={dp}
              alt="dp"
              height={25}
              width={25}
            />
            .
          </p>
        </section>

        {/* Work */}
        <section className="p-4 m-4 sm:m-6 lg:mx-8 lg:m-4">
          <h2 className="text-xl font-bold leading-tight sm:text-2xl">Work</h2>
          <WorkCards />
        </section>

        {/* Projects */}
        <section className="p-4 m-4 sm:m-6 lg:mx-8 lg:my-4">
          <h2 className="text-xl font-bold leading-tight sm:text-2xl">
            Projects
          </h2>
          <ProjectCards />
        </section>

        {/* Learning */}
        <section className="p-4 m-4 sm:m-6 lg:mx-8 lg:my-4">
          <h2 className="text-xl font-bold leading-tight sm:text-2xl">
            Learning
          </h2>
          <p className="mt-2">
            I&apos;m currently taking modules on Extreme Computing, Principles
            and Designs of IoT Systems and Machine Learning. I am also learning
            Rust in my spare time by working on a few side projects.
          </p>
        </section>

        {/* Music */}
        <section className="p-4 m-4 sm:m-6 lg:mx-8 lg:my-4">
          <h2 className="text-xl font-bold leading-tight sm:text-2xl">Music</h2>
          <Music />
        </section>

        {/* Contact */}
        <section className="p-4 m-4 sm:m-6 lg:mx-8 lg:my-4 border-slate-700 border-b">
          <h2 className="text-xl font-bold leading-tight sm:text-2xl">
            Contact
          </h2>

          <Socials />
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
