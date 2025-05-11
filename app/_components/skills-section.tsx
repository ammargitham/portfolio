'use client';

import { motion } from 'motion/react';

import AWS from '@/assets/icons/aws';
import Django from '@/assets/icons/django';
import Docker from '@/assets/icons/docker';
import GithubActions from '@/assets/icons/github-actions';
import Gitlab from '@/assets/icons/gitlab';
import Java from '@/assets/icons/java';
import JavaScript from '@/assets/icons/javascript';
import Kotlin from '@/assets/icons/kotlin';
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

const skills: [string, React.Component][] = [
  ['React', ReactIcon],
  ['Next.js', NextJS],
  ['Django', Django],
  ['Spring', Spring],
  ['Ruby on Rails', Rails],
  ['TypeScript', TypeScript],
  ['JavaScript', JavaScript],
  ['Python', Python],
  ['Java', Java],
  ['Kotlin', Kotlin],
  ['Ruby', Ruby],
  ['Tailwind CSS', Tailwind],
  ['PostgreSQL', PostgreSQL],
  ['MySQL', MySQL],
  ['Docker', Docker],
  ['AWS', AWS],
  ['GitHub Actions', GithubActions],
  ['Gitlab CI/CD', Gitlab],
];

export default function SkillsSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="mb-4 text-2xl font-semibold">Tech Stack</h2>
      <div className="grid grid-cols-2 gap-4 text-sm md:grid-cols-4">
        {skills.map(([name, Icon]) => (
          <span
            key={name}
            className="flex origin-center items-center gap-2 transition-transform hover:scale-105 [&_svg]:size-5"
          >
            {Icon && <Icon />}
            {name}
          </span>
        ))}
      </div>
    </motion.section>
  );
}
