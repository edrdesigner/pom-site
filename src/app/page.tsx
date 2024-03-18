import ContractHeader from '@/components/ContractHeader';
import Faq from '@/components/Faq';
import { Footer } from '@/components/Footer';
import Image from 'next/image';
import AnimatedCursor from 'react-animated-cursor';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AnimatedCursor
        innerSize={8}
        outerSize={30}
        color="100, 255, 0"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={2}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link',
        ]}
      />
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <div className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0">
            <Image
              src="/logo.png"
              alt="Proof of Meme"
              width={140}
              height={50}
              priority
            />
            <span className="font-black text-2xl">PROOF OF MEME</span>
          </div>
        </div>
        <ContractHeader />
      </div>

      <div className="relative  flex place-items-center before:absolute before:h-[500px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <div className="min-h-[220px] max-w-5xl w-full pt-20">
          <div className="flex justify-center relative h-[360px]">
            <div className="animate-wiggle sx:animate-none absolute">
              <Image
                src="/cald.png"
                alt="Proof of Meme"
                width={400}
                height={400}
                priority
              />
            </div>
          </div>
          <div className="flex flex-col center text-center font-sans text-2xl justify-center">
            Proof of Meme is a concoction of memes representative of the
            blockchain meme community, a wizardry cauldron of memes to keep the
            <span className="text-green-400 font-bold">
              {' '}
              SOL community alive
            </span>
            <div className="animate-pulse m-auto mt-4 text-sm p-3 max-w-[440px] w-full flex justify-center border-2 border-purple-500 text-purple-100 font-bold rounded-xl">
              $POM is now a decentralized community-driven meme.
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 w-full">
        <div className="flex justify-center relative h-[260px]">
          <div className="animate-wiggle sx:animate-none absolute">
            <Image
              src="/vax.png"
              alt="Proof of Meme"
              width={300}
              height={400}
              priority
            />
          </div>
        </div>
        <h3 className="text-3xl pb-4 font-mono text-purple-600 text-center">
          Roadmap
        </h3>
        <div className="text-center text-2xl">Are you serious ?</div>
      </div>

      <div className="mt-20 w-full flex flex-col">
        <div className="flex justify-center relative h-[220px] w-full">
          <div className="animate-wiggle sx:animate-none absolute">
            <Image
              src="/book.png"
              alt="Proof of Meme"
              width={400}
              height={400}
              priority
            />
          </div>
        </div>
        <h3 className="text-3xl font-mono text-purple-600 text-center">
          Our Recipe
        </h3>
        <div className="p-4 center text-center text-1xl">
          Some info that you would like to know.
        </div>
        <div className='center flex w-[300px] m-auto'>
          <div className="text-left">
            <div className="text-2xl font-mono">
              <span className="w-[100px] inline-block">Supply:</span>{' '}
              <span className="text-green-400">1B</span>
            </div>
            <div className="text-2xl font-mono">
              <span className="w-[100px] inline-block">Liq: </span>
              <span className="text-orange-500">Burned</span>
            </div>
            <div className="text-2xl font-mono">
              <span className="w-[100px] inline-block">Mint: </span>
              <span className="text-purple-400">Revoked</span>
            </div>
            <div className="text-2xl font-mono">
              <span className="w-[100px] inline-block">Ticker: </span>{' '}
              <span className="text-green-300">$POM</span>
            </div>
            <div className="text-2xl font-mono">
              <span className="w-[100px] inline-block">Taxes: </span>{' '}
              <span className="text-green-300">0</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mt-20 w-full items-center justify-between font-mono text-sm">
        <div className="flex justify-center relative h-[260px]">
          <div className="animate-wiggle sx:animate-none absolute">
            <Image
              src="/4.png"
              alt="Proof of Meme"
              width={300}
              height={400}
              priority
            />
          </div>
        </div>

        <h3 className="text-3xl pb-4 font-mono text-purple-600 text-center">
          FAQ
        </h3>
        <div className="text-center text-1xl pb-10">
          Find answers to your most pressing questions about $POM and uncover
          the essentials of our community-driven journey
        </div>
        <Faq />
      </div>

      <Footer />
    </main>
  );
}
