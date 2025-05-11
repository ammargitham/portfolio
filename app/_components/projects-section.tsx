'use client';

import { Globe2 } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';

import Github from '@/assets/icons/github';
import JetpackCompose from '@/assets/icons/jetpack-compose';
import KanaCanvas from '@/assets/icons/kana-canvas';
import Kotlin from '@/assets/icons/kotlin';
import Material3 from '@/assets/icons/material-3';
import NextJS from '@/assets/icons/nextjs';
import Tailwind from '@/assets/icons/tailwind';
import TypeScript from '@/assets/icons/typescript';
import wallflow from '@/assets/images/wallflow.png';
import { buttonVariants } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

type Project = 'kana-canvas' | 'wallflow';

const projSkills: Record<Project, [string, React.Component][]> = {
  'kana-canvas': [
    ['Next.js', NextJS],
    ['TypeScript', TypeScript],
    ['Tailwind CSS', Tailwind],
  ],
  wallflow: [
    ['Kotlin', Kotlin],
    ['Jetpack Compose', JetpackCompose],
    ['Material 3 Design', Material3],
  ],
};

export default function ProjectsSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="mb-4 text-2xl font-semibold">Projects</h2>
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="pt-0">
          <div className="bg-background flex h-45 items-center justify-center rounded-t-xl border-b dark:border-b-0">
            <KanaCanvas className="max-h-16 w-2/3" />
          </div>
          <CardHeader>
            <CardTitle>KanaCanvas</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 text-sm">
            Next.js web app for practicing Japanese kana through interactive
            handwriting on a canvas. It features stroke order animations and
            real handwriting examples to help reinforce proper writing
            technique.
          </CardContent>
          <CardFooter className="flex flex-col items-start gap-4">
            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/ammargitham/kana-canvas"
                className={buttonVariants({ size: 'sm' })}
                target="_blank"
              >
                <Github /> View on GitHub
              </a>
              <a
                href="https://kanacanvas.com/"
                className={buttonVariants({ variant: 'outline', size: 'sm' })}
                target="_blank"
              >
                <Globe2 /> kanacanvas.com
              </a>
            </div>
            <div className="flex flex-wrap gap-4">
              {projSkills['kana-canvas'].map(([name, Icon]) => (
                <span
                  key={name}
                  className="origin-center transition-transform hover:scale-125 [&_svg]:size-5"
                >
                  <Icon />
                </span>
              ))}
            </div>
          </CardFooter>
        </Card>
        <Card className="pt-0">
          <Image
            src={wallflow}
            alt="Wallflow"
            className="h-45 rounded-t-xl object-cover"
          />
          <CardHeader>
            <CardTitle>
              WallFlow{' '}
              <span className="text-muted-foreground text-xs">
                400 stars on Github and 9,500 downloads
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 text-sm">
            Android app that automatically updates your wallpaper using
            high-quality images from{' '}
            <a href="https://wallhaven.cc/" className="underline">
              wallhaven.cc
            </a>{' '}
            and{' '}
            <a href="https://www.reddit.com/" className="underline">
              Reddit
            </a>
            . It features Material 3 design UI and background scheduling for
            seamless, hands-off customization.
          </CardContent>
          <CardFooter className="flex flex-col items-start gap-4">
            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/ammargitham/WallFlow"
                className={buttonVariants({ size: 'sm' })}
                target="_blank"
              >
                <Github /> View on GitHub
              </a>
              <a
                href="https://f-droid.org/packages/com.ammar.wallflow/"
                className={buttonVariants({ variant: 'outline', size: 'sm' })}
                target="_blank"
              >
                <Globe2 /> f-droid.org
              </a>
            </div>
            <div className="flex flex-wrap gap-4">
              {projSkills['wallflow'].map(([name, Icon]) => (
                <span
                  key={name}
                  className="origin-center transition-transform hover:scale-125 [&_svg]:size-5"
                >
                  <Icon />
                </span>
              ))}
            </div>
          </CardFooter>
        </Card>
      </div>
    </motion.section>
  );
}
