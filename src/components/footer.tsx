import React from 'react';

export function Footer(props: any) {
  return (
    <footer
      style={{
        marginTop: `2rem`,
      }}
    >
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.com">Gatsby</a>
    </footer>
  );
}