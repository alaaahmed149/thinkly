import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center md:gap-10 px-6 md:px-10 py-9 md:py-14">
      {/* Text section */}
      <div className="flex flex-col justify-center items-center md:items-start gap-2 max-w-2xl order-2 md:order-1">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-start my-4">
          Boost your workflow with AI-powered productivity.
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-center md:text-start opacity-50">
          Organize notes, tasks, and meetings in seconds—let AI do the heavy
          lifting.
        </p>

        {/* Quick Benefits */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <span className="text-sm text-gray-300">
              Save hours with automated summaries
            </span>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-2">
            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <span className="text-sm text-gray-300">
              Never miss tasks with smart reminders
            </span>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-2">
            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <span className="text-sm text-gray-300">
              Collaborate seamlessly with your team
            </span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row w-full md:w-auto gap-2 md:gap-4 mt-4 items-center md:items-start">
          <Button className="w-full md:w-auto bg-white text-black hover:text-white hover:bg-gray-700/30 font-medium py-6 px-8 cursor-pointer transition duration-300  rounded-md shadow-lg hover:shadow-xl">
            Get Started Free
          </Button>
          <Button
            variant="ghost"
            className="w-full md:w-auto text-white hover:bg-gray-700/30 font-medium py-6 px-8 cursor-pointer transition duration-300"
          >
            See Demo
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </Button>
        </div>
      </div>

      {/* Visual section */}
      <div className="bg-[#21202d] p-2 rounded-lg shadow-lg order-1 md:order-2 w-full md:w-auto mb-6 md:mb-0">
        <Image
          src="/dashboard.png"
          alt="hero"
          width={700}
          height={700}
          className="w-full h-auto rounded"
          priority
        />
      </div>
    </div>
  );
}
