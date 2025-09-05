import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import React from 'react';

export default function SearchInput() {
  return (
    <form>
      <div className='relative'>
        <Search className='absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground' />
        <Input
          type='text'
          name='search'
          placeholder='Search articles..'
          className='pl-10 w-48 focus-visible:ring-1'
        />
      </div>
    </form>
  );
}
