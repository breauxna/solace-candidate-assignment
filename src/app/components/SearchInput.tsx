'use client';

import { debounce } from "lodash";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useCallback } from "react";

const DEBOUNCED_SEARCH = 250;

const SearchInput: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleChange = debounce(useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase();
    const params = new URLSearchParams(searchParams);
    if (searchTerm) {
      params.set('query', searchTerm);
    } else {
      params.delete('query');
    }

    router.replace(`${pathname}?${params.toString()}`);
  }, [pathname, router, searchParams]), DEBOUNCED_SEARCH);

  return <input placeholder={"Search..."} type="search" className="search-input" defaultValue={searchParams.get('query')?.toString()} onChange={handleChange} />
}

export default SearchInput;