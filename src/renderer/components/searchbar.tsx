import React from 'react';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Searchbar() {
  const navigate = useNavigate();
  return (
    <div className="px-8 py-5 flex justify-center items-center top-0 ">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const search = (e.target as HTMLFormElement)['search'].value;
          (e.target as HTMLFormElement)['search'].value = '';
          navigate('/browse?search=' + search);
        }}
      >
        <div className="relative w-[30vw]">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            name="search"
            placeholder="Search games..."
            className="appearance-none bg-background pl-8 shadow-none w-full"
          />
        </div>
      </form>
    </div>
  );
}
