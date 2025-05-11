'use client';

import { motion } from 'motion/react';

import AWS from '@/assets/icons/aws';
import CSSIcon from '@/assets/icons/css';
import Django from '@/assets/icons/django';
import Docker from '@/assets/icons/docker';
import Gitlab from '@/assets/icons/gitlab';
import Java from '@/assets/icons/java';
import JavaScript from '@/assets/icons/javascript';
import Jquery from '@/assets/icons/jquery';
import MySQL from '@/assets/icons/mysql';
import NextJS from '@/assets/icons/nextjs';
import PostgreSQL from '@/assets/icons/postgresql';
import Python from '@/assets/icons/python';
import Rails from '@/assets/icons/rails';
import ReactIcon from '@/assets/icons/react';
import Ruby from '@/assets/icons/ruby';
import Spring from '@/assets/icons/spring';
import Tailwind from '@/assets/icons/tailwind';
import TypeScript from '@/assets/icons/typescript';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

type Company = 'fusion' | 'oracle';

const expSkills: Record<Company, [string, React.Component][]> = {
  fusion: [
    ['React', ReactIcon],
    ['Next.js', NextJS],
    ['Django', Django],
    ['Spring', Spring],
    ['Ruby on Rails', Rails],
    ['TypeScript', TypeScript],
    ['JavaScript', JavaScript],
    ['Python', Python],
    ['Java', Java],
    ['Ruby', Ruby],
    ['Tailwind CSS', Tailwind],
    ['PostgreSQL', PostgreSQL],
    ['MySQL', MySQL],
    ['Docker', Docker],
    ['AWS', AWS],
    ['Gitlab CI/CD', Gitlab],
  ],
  oracle: [
    ['Java', Java],
    ['JavaScript', JavaScript],
    ['jQuery', Jquery],
    ['CSS', CSSIcon],
  ],
};

export default function ExperienceSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="mb-4 text-2xl font-semibold">Experience</h2>
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-baseline gap-2">
              Fusion Systems Japan
              <span className="text-muted-foreground text-sm">
                (Jan 2018 – Present)
              </span>
            </CardTitle>
            <CardDescription>Software Developer</CardDescription>
          </CardHeader>
          <CardContent className="text-sm">
            Developed and maintain full stack web applications using React,
            Next.js, Django, and Rails, with a focus on performance, usability,
            and internal tooling.
          </CardContent>
          <CardFooter>
            <div className="flex flex-wrap gap-4">
              {expSkills['fusion'].map(([name, Icon]) => (
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
        <Card>
          <CardHeader>
            <CardTitle className="flex items-baseline gap-2">
              Oracle Financial Services Software Limited
              <span className="text-muted-foreground text-sm">
                (Jan 2013 – Dec 2017)
              </span>
            </CardTitle>
            <CardDescription>Associate Consultant</CardDescription>
          </CardHeader>
          <CardContent className="text-sm">
            Led development of an internal testing tool, improving performance
            and usability across multiple testing teams.
          </CardContent>
          <CardFooter>
            <div className="flex flex-wrap gap-4">
              {expSkills['oracle'].map(([name, Icon]) => (
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
