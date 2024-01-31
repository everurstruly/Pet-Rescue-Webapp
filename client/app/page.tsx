import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import {
  BiBookOpen,
  BiBookmark,
  BiBookmarkHeart,
  BiConversation,
  BiHappyHeartEyes,
  BiHealth,
  BiHeart,
  BiLeftArrow,
  BiLeftArrowAlt,
  BiMaleSign,
  BiMoney,
  BiPen,
  BiQuestionMark,
  BiRightArrow,
  BiRightArrowAlt,
  BiSearchAlt2,
  BiSolidBinoculars,
  BiSolidDog,
  BiSolidQuoteAltLeft,
} from "react-icons/bi";

export default function Home() {
  return (
    <main className="bg-white">
      {/* <section id="hero" className="bg-gradient-to-b from-amber-100 to-white min-h-[45vh] pt-28 pb-32.. pb-16 lg:pt-32.."> */}
      <section
        id="hero"
        className="bg-amber-100 min-h-[45vh] pt-28 pb-32.. pb-16 lg:pt-32.."
      >
        <div className="xl:container px-4 lg:px-10 mx-auto flex">
          <header>
            <h1 className="text-5xl font-serif font-medium text-amber-950 mb-2">
              Change a Life, Adopt a Friend:
              <br /> One Animal at a Time.
            </h1>
            <h4 className="ps-1 text-amber-800">
              Making a Paw-sitive Impact on Both Ends of the Leash.
            </h4>
          </header>
        </div>
      </section>

      <section id="supportiveProgramsShowcase" className="-mt-16..">
        <ul className="xl:container px-4 lg:px-10 flex flex-wrap lg:flex-nowrap items-stretch gap-2.5 justify-between lg:gap-x-10">
          {[
            {
              icon: BiConversation,
              title: "Adoption Counselling",
              body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit vel est commodi.",
              fancyBorder: "7% 93% 8% 92% / 92% 8% 92% 8% ",
            },
            {
              icon: BiPen,
              title: "Volunteer",
              body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit vel est commodi.",
              fancyBorder: "100% 0% 96% 4% / 5% 93% 7% 95% ",
            },
            {
              icon: BiMoney,
              title: "Donate",
              body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit vel est commodi.",
              fancyBorder: "12% 88% 6% 94% / 95% 13% 87% 5% ",
            },
            {
              icon: BiBookOpen,
              title: "Pet Adoption FAQs",
              body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit vel est commodi.",
              fancyBorder: "92% 8% 95% 5% / 13% 93% 7% 87% ",
            },
          ].map(({ title, body, icon: _Icon }) => {
            return (
              <li
                key={title}
                className="rounded-b-lg p-6 pb-8 text-amber-900 flex flex-col lg:px-1"
              >
                <_Icon className="mb-5 text-4xl text-amber-800" />
                <h3 className="uppercase font-bold mb-2">{title}</h3>
                <p className="mb-5 text-sm max-w-[38ch]">{body}</p>
                <Link href="/" className="underline text-sm mt-auto">
                  Learn more
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <section id="petShowcase" className="pt-10 xl:pt-6 pb-32">
        <div className="xl:container px-4 lg:px-10">
          <div className="flex flex-wrap lg:flex-nowrap xl:items-start mb-5 xl:my-4 gap-y-5 lg:gap-x-20">
            <header className="flex-grow flex items-start gap-x-3 lg:flex-grow-0">
              <BiHappyHeartEyes className="text-amber-800 flex-shrink-0 text-4xl leading-none" />
              <p className="text-sm text-amber-800 max-w-[32ch] leading-snug">
                Browse pets from our network of over 11,500 shelters and
                rescues.
              </p>
            </header>
            <div className="flex-grow flex flex-wrap gap-y-4 items-center gap-x-16">
              <div className="flex flex-wrap items-center gap-x-1">
                <label htmlFor="specie" className="font-bold text-amber-900">
                  I'm looking for:
                </label>
                <select
                  name="species"
                  defaultValue={"dog"}
                  id="specie"
                  className="border rounded font-medium"
                >
                  <option value="dog">Dog</option>
                  <option value="cat">Cat</option>
                  <option value="something">Something</option>
                </select>
              </div>
              <div className="flex flex-wrap items-center gap-x-1">
                <label htmlFor="specie" className="font-bold text-amber-900">
                  In Location:
                </label>
                <select
                  name="species"
                  defaultValue={"dog"}
                  id="specie"
                  className="border rounded font-medium"
                >
                  <option value="dog">Nigeria LAG</option>
                  <option value="cat">Isreal</option>
                  <option value="something">India</option>
                  <option value="something">America</option>
                </select>
              </div>
            </div>
          </div>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-1 xl:gap-2">
            {[1, 2, 3].map((item, index) => {
              return (
                <li
                  key={index}
                  className="border-4 border-amber-900 rounded-b-2xl shadow-lg shadow-amber-400"
                >
                  <div className="p-1 rounded">
                    <img
                      src="#"
                      alt=""
                      // className="h-72 w-full bg-amber-100 rounded-[5%_95%_5%_95%_/_94%_6%_94%_6%]"
                      className="h-72 w-full bg-white"
                    />
                  </div>
                  <div className="p-4 pt-2.5">
                    <header className="flex items-center gap-x-2.5 text-amber-900">
                      <h3 className="font-serif text-xl font-semibold">
                        Willo
                      </h3>
                      <BiMaleSign className="stroke-blue-500 stroke-2 text-lg" />
                      <button className="ms-auto shadow-md shadow-amber-400 rounded-full p-2.5">
                        <BiBookmark className="text-xl fill-amber-800" />
                      </button>
                    </header>
                  </div>
                </li>
              );
            })}
            <li className="bg-amber-800 flex flex-col text-amber-100 py-8 pb-4 px-6 rounded-2xl border-4 border-amber-900">
              <div className="flex-grow text-center grid place-content-center gap-y-6 py-8 pb-20">
                <BiSolidBinoculars className="text-7xl fill-amber-100 mx-auto" />
                <button className="max-w-[24ch] font-medium underline underline-offset-2 self-end">
                  View over 200 <span>Breed</span> <span>Dogs</span> in{" "}
                  <span>LA California USA</span>
                </button>
              </div>
              <h5 className="py-2 text-center uppercase font-medium">
                Find a friend
              </h5>
            </li>

            {/* <article className="hidden bg-amber-800 flex.. flex-col text-amber-50 py-16.. py-8 pb-4 px-8 rounded-xl">
              <div className="flex-grow text-center grid place-content-center">
                <BiSolidBinoculars className="text-7xl fill-amber-100 mx-auto" />
                <h5 className="hidden text-center uppercase text-amber-50 font-medium">Find a friend</h5>
              </div>
              <button className="max-w-[24ch] font-medium underline underline-offset-2 self-end">
                View over 200 more of <span>Breed</span> <span>Dogs</span> in{" "}
                <span>LA California USA</span>
              </button>
            </article> */}
          </ul>
        </div>
      </section>

      <section id="petAdoptionReasons" className="bg-amber-100 pt-24 pb-32">
        <div className="xl:container px-4 lg:px-10">
          <header className="text-center text-amber-950 mb-20">
            <h2 className="font-serif text-4xl mb-2">
              Where there’s Love, there’s hope
            </h2>
            <h4 className="text-amber-800 text-lg">Once upon a time...</h4>
          </header>
          <article className="flex items-center flex-wrap lg:items-[unset] lg:flex-nowrap gap-y-5 gap-x-10">
            <img
              src="#"
              alt=""
              className="bg-white w-full max-w-[564px] h-[416px] border-4 border-amber-800 shadow-lg shadow-amber-400 rounded-[4%_96%_5%_95%_/_100%_0%_100%_0%]"
            />
            <div className="text-amber-900 mx-auto p-8">
              <BiSolidQuoteAltLeft className="fill-amber-800 text-6xl mx-auto mb-8" />
              <p className="lg:text-lg text-center mb-8 xl:mb-10 max-w-[48ch] font-medium">
                Tom and Sylvester have helped me immensely where it comes to
                healing my wounded soul. They’ve managed to fill our home and
                our hearts with an overwhelming amount of love and laughter.
              </p>
              <h3 className="text-center underline underline-offset-2 text-amber-700">
                <Link href={`/blog/stories/placeholder-slug`}>
                  Emmanuel + Sylvia
                </Link>
              </h3>
              <div className="mt-8 xl:mt-16 flex items-center justify-center gap-x-4">
                {[BiLeftArrowAlt, BiRightArrowAlt].map((Icon) => {
                  return (
                    <button className="rounded-full text-amber-900 bg-white grid place-conent-center p-3 shadow-md shadow-amber-400">
                      {<Icon className="text-2xl" />}
                    </button>
                  );
                })}
              </div>
            </div>
          </article>
        </div>
      </section>
      <section id="blogPostShowcase" className="pt-24 pb-64">
        <div className="xl:container lg:px-10">
          <header className="text-center text-amber-950 mb-20">
            <h4 className="text-amber-800 text-lg mb-2">
              Let's get Educated. Let's Inspired
            </h4>
            <h2 className="font-serif text-4xl">Latest from Our Blog</h2>
          </header>
          <ul className="flex flex-wrap lg:flex-nowrap lg:items-end gap-x-6 mb-20">
            {[
              {
                title:
                  "Finding the Right Dog Trainer: A Positive Training G...",
              },
              { title: "Right Dog Trainer: A Positive" },
              { title: "New pet parent? Guides and Tricks" },
            ].map(({ title }, index) => {
              return (
                <li
                  key={title}
                  className={clsx(
                    `flex-grow w-full overflow-hidden rounded-b-xl border-4 border-amber-800 flex flex-col shadow-lg shadow-amber-400 
                  `,
                    {
                      "mt-12": index === 1,
                      "mt-24": index === 2,
                    }
                  )}
                >
                  <img
                    src="#"
                    alt=""
                    className={clsx("w-full rounded-lg", {
                      "h-[280px]": index === 0,
                    })}
                  />
                  <div className="flex-grow p-4 bg-amber-50">
                    <h3 className="font-serif text-xl text-center text-amber-950 hover:underline">
                      <Link href="#">{title}</Link>
                    </h3>
                  </div>
                </li>
              );
            })}
          </ul>
          <button className="bg-amber-800 text-amber-50 rounded-full font-medium shadow-sm shadow-amber-400 mx-auto block py-3 px-7">
            Read more
          </button>
        </div>
      </section>

      <section className="py-12">
        <div className="h-[70vh] border-4 border-amber-800 rounded-3xl mb-12 mx-10 shadow-lg shadow-amber-400"></div>
      </section>
    </main>
  );
}

const unusedDefaultCode = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
};
