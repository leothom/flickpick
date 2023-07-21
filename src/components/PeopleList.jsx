import React from "react";
import PersonCard from "./PersonCard";

const PeopleList = ({ people }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {people.map((person, index) => (
        <PersonCard key={index} person={person} />
      ))}
    </div>
  );
};

export default PeopleList;
