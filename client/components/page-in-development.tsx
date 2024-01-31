import Link from "next/link";
import { BiRightArrow } from "react-icons/bi";

export default function ComingSoonCanvas() {
  return (
    <main>
      <section className="mx-auto px-3 pt-10 pb-10 lg:container min-[360px]:text-center xl:col-span-2 xl:pb-20">
        <h1 className="font-serif font-black text-center uppercase leading-none lg:text-5xl xl:text-[6.125rem] text-zinc-400">
          COMING SOON
        </h1>
        <p className="max-w-xl mx-auto text-center text-zinc-400">
          Our developers are actively working on getting this feature shipped to
          and accessible by you 😎. Stay tuned. Check in periodically (weeks
          maybe) 💪
        </p>
      </section>
      <section className="container pb-32 mx-auto">
        <h2 className="max-w-2xl mx-auto mb-4 text-2xl text-center text-zinc-200 font-block">
          Explore further: More to see and do!{" "}
        </h2>
        <div className="container grid max-w-3xl grid-cols-2 mb-4 gap-4 mx-auto">
          <Link
            href="/services"
            className="p-3 pb-6 border border-zinc-800 rounded-sm shadow-lg shadow-black"
          >
            <h3 className="inline-flex items-center mb-2 text-xl text-zinc-200 gap-x-3 leading-tight">
              <span className="self-start mt-[6px] w-1 h-3 -me-1 border bg-transparent border-blue-600 inline-block"></span>
              Get your Software Solution <BiRightArrow size="20" />
            </h3>
            <p className="text-slate-500 text-xs">
              Acquire customized software solutions tailored to your specific
              needs.
            </p>
          </Link>
          <Link
            href="/works"
            className="p-3 pb-6 border border-zinc-800 rounded-sm shadow-lg shadow-black"
          >
            <h3 className="inline-flex items-center mb-2 text-xl text-zinc-200 gap-x-3 leading-tight">
              <span className="self-start mt-[6px] w-1 h-3 -me-1 border bg-transparent border-blue-600 inline-block"></span>
              Browse our project archive <BiRightArrow size="20" />
            </h3>
            <p className="text-slate-500 text-xs">
              Embark on a journey through our now and past, filled with
              inspiration and motivation.
            </p>
          </Link>
          <Link
            href="/about"
            className="p-3 pb-6 border border-zinc-800 rounded-sm shadow-lg shadow-black"
          >
            <h3 className="inline-flex items-center mb-2 text-xl text-zinc-200 gap-x-3 leading-tight">
              <span className="self-start mt-[6px] w-1 h-3 -me-1 border bg-transparent border-blue-600 inline-block"></span>
              Learn about the founder? <BiRightArrow size="20" />
            </h3>
            <p className="text-slate-500 text-xs">
              Discover facts and inkldlsdfklk about the visionary behind our
              solutions
            </p>
          </Link>
          <Link
            href="/help"
            className="p-3 pb-6 border border-zinc-800 rounded-sm shadow-lg shadow-black"
          >
            <h3 className="inline-flex items-center mb-2 text-xl text-zinc-200 gap-x-3 leading-tight">
              <span className="self-start mt-[6px] w-1 h-3 -me-1 border bg-transparent border-blue-600 inline-block"></span>
              Get Informed & ecure serenity <BiRightArrow size="20" />
            </h3>
            <p className="text-slate-500 text-xs">
              Find answers to your questions, build trust in our experties
            </p>
          </Link>
        </div>
        <div className="font-block text-center text-4xl block whitespace-nowrap">
          ヽ(*￣▽￣*)ノ
        </div>
      </section>
    </main>
  );
}
