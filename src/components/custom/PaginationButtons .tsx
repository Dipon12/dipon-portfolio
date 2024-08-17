'use client';

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

const PaginationButtons = () => {
  const router = useRouter();
  const pathname = usePathname();

  const pages = [
    '/',
    '/education',
    '/work-experience',
    '/publications',
    '/projects',
    '/outreach',
    '/contact',
  ];

  const currentIndex = pages.indexOf(pathname);

  const handlePrevious = () => {
    const previousIndex = (currentIndex - 1 + pages.length) % pages.length;
    router.push(pages[previousIndex]);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % pages.length;
    router.push(pages[nextIndex]);
  };

  return (
    <div className="flex justify-between">
      <button
        onClick={handlePrevious}
        className="px-4 py-2 bg-primary text-white rounded-md inline-flex items-center"
        // disabled={currentIndex === 0}
      >
        <svg className="w-5 h-5 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7"/>
</svg>

        Previous
      </button>
      <button
        onClick={handleNext}
        className="px-4 py-2 bg-primary text-white rounded-md inline-flex items-center"
        // disabled={currentIndex === pages.length - 1}
      >
        Next
        <svg className="w-5 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/>
</svg>

      </button>
    </div>
  );
};

export default PaginationButtons;
