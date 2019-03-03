import styled from 'styled-components';
import ChevronNegativeIcon from 'lib/assets/icon-chevron-negative.svg';

export const CTALeafLike = styled.a`
  box-sizing: border-box;
  width: 19.3125rem;
  height: 6.25rem;
  padding: 0 7rem 0 3.125rem;
  border-top-right-radius: 6.25rem;
  color: ${({ theme }) => theme.palette.text};
  text-decoration: none;
  font-size: 1.375rem;
  text-align: left;
  line-height: 1.65rem;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.secondary};
  background-image: url(${ChevronNegativeIcon});
  background-repeat: no-repeat;
  background-position: right 3.75rem top 2.0625rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1rem;
    font-weight: lighter;
    line-height: 1.25rem;
    width: 12.5rem;
    height: 4.875rem;
    border-top-right-radius: 6.4375rem;
    padding: 0.1875rem 3.75rem 0 1.9375rem;
    background-size: 1.249375rem 1.735rem;
    background-position: right 2.04375rem top 1.750625rem;
  }
`;