import { SectionTitle } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </>
  );
};
