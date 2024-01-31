import Link from "next/link";

export default function DevBuildTeamWatermark() {
  return null;
  return (
    <div className="p-1 grid">
      <Link
        href="https://emmanuel.vercel.app"
        className="rounded-lg border-4 border-black text-black px-4 p-2.5 w-full text-center font-sans underline underline-offset-4 text-lg"
      >
        Developed by Emmanuel
      </Link>
    </div>
  );
}
