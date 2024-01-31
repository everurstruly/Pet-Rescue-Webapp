import Link from "next/link";

export default function FooterNavigationSection() {
  return (
    <section className="pt-14 xl:pt-20 pb-20 xl:pb-32 bg-amber-800 border-t-8 border-amber-400 text-amber-50">
      <div className="flex flex-wrap items-center justify-between px-3 md:px-6 mx-auto xl:container gap-y-8 gap-x-12 xl:px-10">
        <small className="font-sans text-xl font-medium text-blue-50">
          Puppeteer &copy; 2024{" "}
        </small>
        <ul className="flex flex-wrap gap-4 text-sm underline xl:font-normal xl:gap-x-6 underline-offset-2">
          <li>
            <Link href="/help">Get help</Link>
          </li>
          <li>
            <Link href="/terms">Terms of use</Link>
          </li>
          <li>
            <Link href="/policy">Privacy policy</Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
