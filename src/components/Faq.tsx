'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function Faq() {
  return (
    <div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1" className="bg-purple-800  mb-2 p-3 rounded-md">
          <AccordionTrigger className="text-lg uppercase">What is $POM?</AccordionTrigger>
          <AccordionContent>
            $POM is a community driven token in the Solana network.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className="bg-purple-700 mb-2 p-3 rounded-md">
          <AccordionTrigger className="text-lg uppercase">How to buy $POM?</AccordionTrigger>
          <AccordionContent>
            Step1: You have to download phantom wallet <br />
            Step2: Buy Solana from your centralized exchange, which you are
            using right now.Eg: Binance Step3: Send your solana to your phantom
            wallet. <br />
            Step4: Once you receive your Solana in the phantom wallet, press the
            globe icon in the bottom. <br />
            Step5: Paste this link in the search bar{' '}
            <a
              href="https://raydium.io/swap/?outputCurrency=2mGU2p88zTEUJd27d6g2YY86JJ1PuHBzw6w3uhJEE8Y9"
              target="_blank"
            >
              https://raydium.io/swap/?outputCurrency=2mGU2p88zTEUJd27d6g2YY86JJ1PuHBzw6w3uhJEE8Y9
            </a>
            Step6: Press swap to get your tokens.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3" className="bg-purple-800  mb-2 p-3 rounded-md">
          <AccordionTrigger className="text-lg uppercase">
            What is Liquidity pool and how can I add and earn rewards from it?
          </AccordionTrigger>
          <AccordionContent>
            1.What is a Liquidity Pool? <br />  A LP (Liquidity Pool) is a digital pile
            of cryptocurrency that is used for transactions. Bigger pools make
            transactions faster and sometimes cheaper. <br /><br />
            
            2.Does this make me sell my $POM?<br /> 
            No, the funds you put in the pool will always belong to you
            and are not sold. <br /> <br />
            
            3.How much amount of $SOL and $POM do I put in?
            <br /> As long as the $ amount for $SOL and $POM are equal, it does not matter. <br /><br />
            
            5.Does it lock my coins? <br />
            No, added liquidity is not locked and can be withdrawn anytime on the
            platform.  <br /><br />
            
            
            6. Why can I see that some coins are burned and locked?  <br />
            Those coins are owned by nobody and are inaccessible, this is to
            ensure that a certain amount of liquidity always exists for
            transactions. <br /><br />
            7. Why should I do it? <br />
            Adding your idle coins to the
            LP helps decrease the effect that selling has on the market cap and
            price, you also get a percentage of every single transaction that
            occurs relative to the amount of liquidity you contribute.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4" className="bg-purple-800  mb-2 p-3 rounded-md">
          <AccordionTrigger className="text-lg uppercase">Which swap should I use?</AccordionTrigger>
          <AccordionContent>Raydium Swap or Jupiter Swap.</AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5" className="bg-purple-800  mb-2 p-3 rounded-md">
          <AccordionTrigger className="text-lg uppercase">Is the LP Locked?</AccordionTrigger>
          <AccordionContent>Initial Liquidity is 100% locked.</AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6" className="bg-purple-800  mb-2 p-3 rounded-md">
          <AccordionTrigger className="text-lg uppercase">Where is the original DEV?</AccordionTrigger>
          <AccordionContent>
          After Devs leave, the community decided to take things into their own hands. Billy here we come.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
