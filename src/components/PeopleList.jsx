import React from "react";
import PersonCard from "./PersonCard";

const PeopleList = ({ people }) => {
  return (
    <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center items-start">
      {people && people.length > 0 ? (
        people
          .filter((person) => person.profile_path)
          .map((person) => <PersonCard key={person.id} person={person} />)
      ) : (
        <p className="w-full text-center mt-4 text-xl text-gray-500">
          No results found.
        </p>
      )}
    </div>
  );
};

export default PeopleList;
