import {Dispatch, ReactNode, SetStateAction, useEffect} from 'react';
import {useInView} from 'react-intersection-observer';
import InfiniteScroll from 'react-infinite-scroll-component';
import {Option, OptionItem} from 'components/controls/Option';
import {StyledResults} from './styles';

export interface ResultsProps {
  results: Option[];
  highlightedItem: number;
  showIcon: boolean;
  showNoResultsFlag?: boolean;
  showNoResultsText?: string;
  onClick: (item: Option) => void;
  onLoadMore?: () => void;
  setHighlightedItem: ({
    index,
  }: {
    index?: number | undefined;
    event?: React.KeyboardEvent<HTMLInputElement> | undefined;
  }) => void;
  setSearchString: Dispatch<SetStateAction<string>>;
}

export default function Results({
  results = [],
  onClick,
  onLoadMore,
  setSearchString,
  highlightedItem,
  setHighlightedItem,
  showNoResultsFlag = false,
  showNoResultsText = 'No results',
}: ResultsProps) {
  const handleClick = (option: Option) => {
    onClick(option);
    setSearchString(option.label);
  };

  if (showNoResultsFlag) {
    return (
      <ResultsWrapper showNoResultsFlag={showNoResultsFlag}>
        <li data-test="no-results-message">
          <div className="ellipsis">{showNoResultsText}</div>
        </li>
      </ResultsWrapper>
    );
  }

  if (results?.length <= 0 && !showNoResultsFlag) {
    return null;
  }

  const {ref, inView} = useInView({threshold: 0});

  useEffect(() => {
    if (inView && onLoadMore) {
      onLoadMore();
    }
  }, [inView]);

  const nextValues = () => {
    if (onLoadMore) {
      onLoadMore();
    }
  };

  return (
    <ResultsWrapper>
      <InfiniteScroll
        style={{overflow: 'hidden'}}
        dataLength={results.length}
        next={nextValues}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        {results.map((item, index, array) => {
          return (
            <div key={`refed-div-${index}`} ref={array.length === index + 1 ? ref : undefined}>
              <OptionItem
                option={item}
                index={index}
                className={highlightedItem === index ? 'selected' : ''}
                setHighlightedItem={setHighlightedItem}
                onClick={handleClick}
              />
            </div>
          );
        })}
      </InfiniteScroll>
    </ResultsWrapper>
  );
}

const ResultsWrapper = ({children}: {children: ReactNode; showNoResultsFlag?: boolean}) => {
  return (
    <StyledResults>
      <ul>{children}</ul>
    </StyledResults>
  );
};
