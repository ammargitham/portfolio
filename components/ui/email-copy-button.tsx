'use client';

import { useState } from 'react';

import { Check, Copy } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

interface EmailCopyButtonProps {
  email: string;
  className?: string;
}

export default function EmailCopyButton({
  email,
  className,
}: EmailCopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);

      // Reset copied state after 2 seconds
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className={cn('rounded-full p-4', className)}
            onClick={copyToClipboard}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={copied ? 'copied' : 'copy'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {copied ? <Check className="text-green-500" /> : <Copy />}
              </motion.div>
            </AnimatePresence>
            <span className="sr-only">Copy email</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>{copied ? 'Copied!' : 'Click to copy'}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
