export default function Footer() {
  return (
    <footer className="border-t dark:border-gray-700">
      <div className="w-full px-6 py-4 lg:mx-auto lg:w-5xl">
        <div className="text-muted-foreground flex flex-col text-xs">
          <span>Released under GPL v2 license</span>
          <span>
            © {new Date().getFullYear()} Ammar Githam. Oracle, Java, and MySQL
            are registered trademarks of Oracle and/or its affiliates. Other
            names may be trademarks of their respective owners.
          </span>
        </div>
      </div>
    </footer>
  );
}

/* <p>
        Contact:{' '}
        <a href="mailto:ammar.githam@outlook.com" className="text-blue-500">
          ammar.githam@outlook.com
        </a>
      </p> */
