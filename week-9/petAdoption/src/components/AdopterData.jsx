import React from 'react';

const AdopterData = ({ entries }) => {
  return (
    <div>
      <h3>Adopter Data</h3>
      <table>
        <thead>
          <tr>
            <td>Pet Name</td>
            <td>Pet Type</td>
            <td>Breed</td>
            <td>Adopter Name</td>
            <td>Adopter Email</td>
            <td>Adopter Number</td>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr key={index}>
              <td>{entry.petName}</td>
              <td>{entry.petType}</td>
              <td>{entry.breed}</td>
              <td>{entry.adoptorName}</td>
              <td>{entry.adopterEmail}</td>
              <td>{entry.adopterNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};



export default AdopterData