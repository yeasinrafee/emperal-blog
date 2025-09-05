import Link from 'next/link';
import React from 'react';
import { Button } from '../../ui/button';
import SearchInput from './search-input';
import ToggleMode from './toggle-mode';

export default function Navbar() {
  return (
    <div className='sticky top-0 z-50 w-full border border-b bg-background/95 backdrop:blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex h-16 items-center justify-between'>
          <div className='flex items-center gap-8'>
            <Link href='/' className='flex items-center space-x-2'>
              <span className='font-bold text-2xl'>
                <span className='bg-gradient-to-r from-blue-600 to bg-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent'>
                  Emperal
                </span>
                <span className='text-foreground'>Blog</span>
              </span>
            </Link>
          </div>

          {/* Desktop Menu  */}
          <div className='hidden md:flex items-center gap-4'>
            <Link
              href={'/articles'}
              className='text-sm font-medium text-foreground transition-colors hover:text-foreground'
            >
              Articles
            </Link>
            <Link
              href={'/tutorials'}
              className='text-sm font-medium text-foreground transition-colors hover:text-foreground'
            >
              Tutorials
            </Link>
            <Link
              href={'/about'}
              className='text-sm font-medium text-foreground transition-colors hover:text-foreground'
            >
              About
            </Link>
            <Link
              href={'/dashboard'}
              className='text-sm font-medium text-foreground transition-colors hover:text-foreground'
            >
              Dashboard
            </Link>
          </div>

          {/* Right Section  */}
          <div className='flex items-center gap-4'>
            <SearchInput />
            <ToggleMode />
            <div className='hidden md:flex items-center gap-2'>
              <Button>Login</Button>
              <Button>Sign Up</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
