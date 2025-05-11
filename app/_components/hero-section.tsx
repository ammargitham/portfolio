'use client';

import { FileText, Mail } from 'lucide-react';
import { motion } from 'motion/react';

import Github from '@/assets/icons/github';
import LinkedIn from '@/assets/icons/linkedin';
import Avatar from '@/components/avatar';
import { buttonVariants } from '@/components/ui/button';
import EmailCopyButton from '@/components/ui/email-copy-button';
import { Input } from '@/components/ui/input';

export default function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center space-y-4 text-center"
    >
      <Avatar />
      <h1 className="text-3xl font-bold md:text-5xl">
        Hi, I&apos;m Ammar Githam
      </h1>
      <p className="text-lg md:text-xl">Full Stack Developer based in Tokyo</p>
      <div className="mt-4 flex flex-wrap justify-center gap-4">
        <a
          href="/Ammar Githam - Resume.pdf"
          target="_blank"
          className={buttonVariants({ variant: 'default' })}
        >
          <FileText /> Download Resume
        </a>
        <a
          href="https://github.com/ammargitham"
          target="_blank"
          rel="noopener noreferrer"
          className={buttonVariants({ variant: 'outline' })}
        >
          <Github /> GitHub
        </a>
        <a
          href="https://linkedin.com/in/ammargitham"
          target="_blank"
          rel="noopener noreferrer"
          className={buttonVariants({ variant: 'outline' })}
        >
          <LinkedIn /> LinkedIn
        </a>
      </div>
      <div className="mt-2 flex gap-4">
        <label htmlFor="name" className="sr-only">
          Email
        </label>
        <Input
          name="email"
          type="email"
          value="ammar.githam@outlook.com"
          readOnly
          startIcon={<Mail />}
          endIcon={
            <EmailCopyButton
              className="translate-x-2 transform"
              email="ammar.githam@outlook.com"
            />
          }
        />
      </div>
      <p className="mt-4 text-left">
        I&apos;m a full stack developer based in Tokyo with over 10 years of
        experience building practical, user-focused software. I work across the
        stack with libraries like Next.js, React, Django, Spring, and Rails, and
        enjoy creating clean, maintainable solutions that improve real
        workflows.
      </p>
      <p className="text-left">
        From modernizing legacy systems to building tools and open source
        projects, I take ownership of my work and care about performance,
        usability, and good design.
      </p>
    </motion.section>
  );
}
