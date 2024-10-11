import { Advocate, Speciality } from "@/types/advocate";
import { useSearchParams } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import Spinner from "./Spinner";

const Advocates: React.FC = () => {
  const searchParams = useSearchParams();
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [advocates, setAdvocates] = useState<Advocate[]>([]);

  const fetchAdvocates = useCallback(async(searchParam: string | null) => {
    setIsLoading(true);
    try {
      const res = await fetch(`api/advocates${searchParam ? `?query=${searchParam}`: ''}`);
      const advocates = await res.json();
      setAdvocates(advocates.data);
    } catch (err: any) {
      setErrorMessage(err.errorMessage)
      setAdvocates([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    const searchParam = searchParams.get('query');
    fetchAdvocates(searchParam);
  }, [fetchAdvocates, searchParams]);

  if (errorMessage) return <p className='error'>Something went wrong... {errorMessage}</p>;
  if (isLoading) return <Spinner />;
  return (
    <div className="flex-col gap-md">
      {advocates.map((advocate) => {
        return <AdvocateCard advocate={advocate} key={advocate.phoneNumber} />
      })}
    </div>
  )
}

const AdvocateCard: React.FC<{advocate: Advocate}> = ({ advocate }) => {
  return (
    <div className="card">
      <div className="flex-row">
        <div className="flex-col">
          <h3>{advocate.firstName} {advocate.lastName}</h3>
          <p>{advocate.degree} with {advocate.yearsOfExperience} year{advocate.yearsOfExperience > 1 ? 's' : ''} of experience</p>
          <p>{advocate.city} &#183; {advocate.phoneNumber}</p>
        </div>
        <div className="flex-col">
          <h3>Specialties</h3>
          <ul>
            {advocate.specialties.map((speciality: Speciality) => {
              return <li key={speciality}>{speciality}</li>
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Advocates;