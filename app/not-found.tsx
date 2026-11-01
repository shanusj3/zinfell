import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative isolate flex min-h-[72vh] flex-col items-center justify-center overflow-hidden bg-[#FDFCFC] px-4 py-24 text-center sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-xl">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 font-mono">
          404 • PAGE NOT FOUND
        </span>

        <h1 className="mt-4 text-3xl font-normal leading-[1.18] tracking-tight text-black sm:text-4xl lg:text-[2.75rem]">
          Page not found.
        </h1>

        <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600 font-normal max-w-md mx-auto">
          The page you are looking for doesn&apos;t exist, has been removed, or is temporarily unavailable.
        </p>

        <div className="mt-8 flex justify-center">
          <Link
            href="/"
            className="btn-primary inline-flex items-center justify-center rounded-full bg-black px-7 py-3.5 text-sm sm:text-base font-medium text-white transition-all hover:bg-slate-800 shadow-md"
            style={{ color: "#ffffff" }}
          >
            <span style={{ color: "#ffffff", WebkitTextFillColor: "#ffffff" }}>Return to home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
