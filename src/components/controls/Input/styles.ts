import styled from 'styled-components';
import {mediaBreakpoints} from 'styles';

export const SuffixWrapper = styled.div`
  flex-direction: column;
  justify-content: center;
  width: ${(props) => (props.theme.large ? '55px' : 'auto')};
  height: ${(props) => (props.theme.large ? '55px' : 'auto')};
  padding-right: ${(props) => (props.theme.large ? '0px' : '20px')};

  background: ${(props) => {
    if (props.theme.large) return 'var(--primary-blue)';

    return 'none';
  }};

  border-radius: 60px;
  display: flex;
  align-items: center;
  svg {
    margin: auto;
    color: var(--white);
  }
`;

export const StyledSearchInput = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  height: ${(props) => props.theme.height};
  min-width: ${(props) => props.theme.minWidth};
  background-color: ${(props) => props.theme.backgroundColor};

  padding: ${(props) => {
    if (props.theme.large) {
      return '0 10px 0 55px';
    }

    return '0 10px 0 25px';
  }};

  @media screen and (max-width: ${mediaBreakpoints.md}px) {
    padding: 0 8px 0 25px;
  }

  font-family: inherit;
  font-size: ${(props) => {
    if (props.theme.large) return '1.5em';

    return '1em';
  }};
  color: ${(props) => props.theme.color};
  flex-direction: ${(props) => {
    if (props.theme.large) return 'initial';

    return 'row-reverse';
  }};

  > input {
    width: 100%;
    padding: 0;
    border: none;
    outline: none;
    height: 45px;
    background-color: rgba(0, 0, 0, 0);
    font-size: inherit;
    font-family: inherit;
    color: inherit;
  }
`;
