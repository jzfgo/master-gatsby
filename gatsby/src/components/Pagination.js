import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const PaginationStyles = styled.div`
  display: flex;
  place-content: center;
  place-items: center;
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
      <Link disabled={currentPage === 1} to={prevPath}>← Prev</Link>
      {Array.from({ length: totalPages }).map((_, i) => {
        const toPage = i + 1;
        const toPath = toPage > 1 ? `${base}/${toPage}` : base;

        return <Link to={toPath}>{toPage}</Link>;
      })}
      <Link disabled={currentPage === totalPages} to={nextPath}>Next →</Link>
    </PaginationStyles>
  );
}
