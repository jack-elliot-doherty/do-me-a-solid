import { createSignal, For } from "solid-js";
import { A } from "solid-start";
import coffee from "../../public/coffee.svg";

export default function Home() {
  const [donationAmount, setDonationAmount] = createSignal(1);

  const presets = [1, 3, 5];

  const handleDonationAmount = (newAmount: number) => {
    console.log(newAmount);
    setDonationAmount(newAmount);
  };

  return (
    <main class="text-center text-white  mx-auto p-20 bg-slate-800 h-screen ">
      <div class="w-1/2 m-auto">
        <div class="flex w text-3xl font-semibold">
          <p class="mr-4">Do Me a </p>
          <span class="text-sky-700 flex text-4xl underline">
            <img class="h-12 w-12 " src="logo.png"></img>
            olid
          </span>
        </div>
        <div class="bg-blue-300">
          <form>
            <div class="flex p-10 justify-center items-center">
              <img class=" bg- h-8 w-8" src="coffee.png"></img>
              <p class="text-2xl  ml-2 font-semibold">X</p>
              <For each={presets} fallback={<div>Loading...</div>}>
                {(preset) => (
                  <button
                    class="bg-sky-700 font-semibold px-3 py-1 rounded m-2"
                    onClick={() => handleDonationAmount(preset)}
                  >
                    {preset}
                  </button>
                )}
              </For>
              <input
                value={donationAmount()}
                onchange={(e) =>
                  handleDonationAmount(Number(e.currentTarget.value))
                }
                class="border"
                type="number"
              />
            </div>
            <div>
              <p class="mr-14">
                <label class="bg-white text-black p-2 mt-10 z-10">Name</label>
              </p>

              <input class="border" type="text" />
            </div>
            <div>
              <p class="mr-14">
                <label>Message</label>
              </p>

              <input class="border" type="text" />
            </div>

            <button class="bg-sky-700 text-white px-4 py-2 rounded-md">
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
