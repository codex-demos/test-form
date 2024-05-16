import React from 'react';

export default function Form() {
  return (
    <form method="POST" netlify="true" name="hello">
      <label>
        <input type="text" name="name" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
