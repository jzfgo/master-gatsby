import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const PaginationStyles = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-items: center;
  border: 1px solid var(--grey);
  margin: 2rem 0;
  border-radius: 5px;
  text-align: center;
  & > * {
    padding: 1rem;
    flex: 1;
    border-right: 1px solid var(--grey);
    text-decoration: none;
    &[aria-current],
    &.current {
      color: var(--red);
    }
    &[disabled] {
      pointer-events: none;
      color: var(--grey);
    }
  }
  @media (max-width: 800px) {
    .word {
      display: none;
    }
    font-size: 1.4rem;
  }
`;

export default function Pagination({
  pageSize,
  totalCount,
  currentPage,
  skip,
  base,
}) {
  const totalPages = Math.ceil(totalCount / pageSize);

  const prevPage = Math.max(currentPage - 1, 1);
  const nextPage = Math.min(currentPage + 1, totalPages);

  const prevPath = prevPage > 1 ? `${base}/${prevPage}` : base;
  const nextPath = `${base}/${nextPage}`;

  return (
    <PaginationStyles>
      <Link title="Previous page" disabled={currentPage === 1} to={prevPath}>
        ← <span className="word">Prev</span>
      </Link>
      {Array.from({ length: totalPages }).map((_, i) => {
        const toPage = i + 1;
        const toPath = toPage > 1 ? `${base}/${toPage}` : base;

        return (
          <Link to={toPath} key={`page-${i}`}>
            {toPage}
          </Link>
        );
      })}
      <Link
        title="Next page"
        disabled={currentPage === totalPages}
        to={nextPath}
      >
        <span className="word">Next</span> →
      </Link>
    </PaginationStyles>
  );
}
