import { A, useLocation } from "solid-start";
export const Nav = () => {
  const location = useLocation();
  const active = (path: string) =>
    path == location.pathname
      ? "border-amber-800"
      : "border-transparent hover:border-amber-800";
  return (
    <nav class="bg-gray-700 ">
      <ul class="container flex items-center p-3 text-gray-200">
        <li>Do Me a Solid</li>
        <li class={`border-b-2 ${active("/")} mx-1.5 sm:mx-6`}>
          <A href="/">Home</A>
        </li>
        <li class={`border-b-2 ${active("/about")} mx-1.5 sm:mx-6`}>
          <A href="/about">About</A>
        </li>
      </ul>
    </nav>
  );
};
