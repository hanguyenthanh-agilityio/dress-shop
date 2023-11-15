import { fireEvent, render } from '@testing-library/react';
import SortBar from '.';
import { OPTION_SORT } from '../../constants/common';

const props = {
  options:OPTION_SORT,
  onClickMenCategories: jest.fn(),
  onClickWomenCategories: jest.fn(),
  onChangeSelect: jest.fn(),
}

const sortBar = () => {
  return render (<SortBar {...props} />)
}

describe('SortBar component', () => {
  it('Should render SortBar snapshot correctly', () => {

    expect(sortBar).toMatchSnapshot();
  });

  it('Should render Card correctly with onClickMenCategories prop', () => {
    const { getByTestId } = sortBar();
    const clickButtonMenCategories = getByTestId('men-categories');

    fireEvent.click(clickButtonMenCategories);
    expect(props.onClickMenCategories).toHaveBeenCalled();
  });

  it('Should render Card correctly with onClickWomenCategories prop', () => {
    const { getByTestId } = sortBar();
    const clickButtonWonenCategories = getByTestId('women-categories');

    fireEvent.click(clickButtonWonenCategories);
    expect(props.onClickWomenCategories).toHaveBeenCalled();
  });
});
