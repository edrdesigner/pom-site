'use client';

import { TelegramLogo } from '@phosphor-icons/react';
import { Bird, X } from '@phosphor-icons/react/dist/ssr';
import Image from 'next/image';
// import ParticlesBg from 'particles-bg';

export function Footer() {
  return (
    <footer className="mt-28 mb-32 pt-10 flex flex-col w-full items-center justify-center border-t border-purple-900">
     
      <div className="p-10">
        <Image
          src="/wizzard.png"
          alt="Proof of Meme"
          width={400}
          height={400}
          priority
        />
      </div>
      <div className="text-2xl font-mono text-purple-600 text-center">
        You are a Degen and want to join us?
      </div>
      <div className="flex pt-5 gap-4">
        <a
          className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-500 hover:bg-purple-700 text-white p-2"
          href="https://t.me/DPKyv8Ns5JowMDI0"
          target="_blank"
          rel="noreferrer"
        >
          <TelegramLogo size={22} weight="bold" />
        </a>
        <a
          className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-500 hover:bg-purple-700 text-white p-2"
          href="https://twitter.com/POM_Solana"
          target="_blank"
          rel="noreferrer"
        >
          <X size={22} weight="bold" />
        </a>

        <a
          className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-500 hover:bg-purple-700 text-white p-2"
          href="https://birdeye.so/token/2mGU2p88zTEUJd27d6g2YY86JJ1PuHBzw6w3uhJEE8Y9?chain=solana"
          target="_blank"
          rel="noreferrer"
        >
          <Bird size={22} weight="bold" />
        </a>
      </div>
      {/* <div className="opacity-10">
        <ParticlesBg num={6} type="square" bg />
      </div> */}
    </footer>
  );
}
