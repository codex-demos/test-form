import React from 'react';

export default function Form() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      method="POST"
      netlify
      name="hello"
    >
      <label>
        <input type="text" name="name" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
