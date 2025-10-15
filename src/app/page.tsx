import Image from "next/image";

export default function Home() {
  return (
    <div
      className="min-h-dvh w-full overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.61), rgba(0,0,0,0.61)), url('/bg_image.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Content */}
      <main className="min-h-dvh flex flex-col">
        {/* Top logo row (does not grow) */}
        <div className="flex justify-center px-2 sm:px-10 pt-4 sm:pt-8">
          <div className="mt-20 h-10 w-100 flex items-center justify-center ">
            <Image src="/logo.png" alt="HAQ" width={200} height={200} />
          </div>
        </div>

        {/* Centered hero fills remaining space */}
        <div className="flex-1 flex">
          <div className="w-full px-6 sm:px-10 max-w-[1100px] mx-auto text-center flex flex-col my-auto">
            {/* Upper decorative line aligned left */}
            <div className="mb-6 h-px w-[55%] bg-white/40 self-start" />

            <h1 className="font-cmu text-white tracking-tight leading-[1.05] text-[44px] sm:text-[60px] md:text-[84px]">
              Your Health Journey
              <br className="hidden sm:block" />
              <span className="block">Starts Here.</span>
            </h1>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <a
                href="https://haqdiet.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-muli text-white border border-white/70 hover:border-white transition-colors px-5 py-2.5 text-sm sm:text-base tracking-wide inline-flex items-center justify-center"
              >
                VISIT OUR WEBSITE
              </a>
              <a
                href="https://ig.me/m/haqdietdubai"
                target="_blank"
                rel="noopener noreferrer"
                className="font-muli text-white border border-white/70 hover:border-white transition-colors px-5 py-2.5 text-sm sm:text-base tracking-wide inline-flex items-center justify-center"
              >
                CHAT WITH OUR NUTRITIONIST
              </a>
            </div>

            {/* Lower decorative line aligned right */}
            <div className="mt-8 h-px w-[55%] bg-white/40 self-end" />
          </div>
        </div>
      </main>
    </div>
  );
}
