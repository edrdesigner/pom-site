'use client';
import { useEffect, useState } from 'react';
const CONTRACT = '2mGU2p88zTEUJd27d6g2YY86JJ1PuHBzw6w3uhJEE8Y9';

export default function ContractHeader() {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    let timeout: any;

    if (isCopied) {
      timeout = setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    }

    return () => clearTimeout(timeout);
  }, [isCopied])

  function handleCopy() {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(CONTRACT);

      setIsCopied(true)
    }
  }

  return (
    <p className="left-0 top-0 flex w-full items-center center border-b border-gray-300 bg-gradient-to-b from-zinc-200 p-6 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-3 lg:dark:bg-zinc-800/30">
       <code className="font-mono font-bold text-center">{CONTRACT}</code>
      <button
        className="cursor-pointer ml-3 p-3 bg-purple-700 hover:bg-purple-500 text-white rounded"
        onClick={handleCopy}
      >
        {isCopied ? 'Copied!' : 'Copy'}
      </button>
    </p>
  );
}
