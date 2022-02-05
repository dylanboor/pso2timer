import { render, screen } from '@testing-library/react';
import App from './App';
import constants from './constants.json';

describe('App unit tests', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('renders title of the app', () => {
    const e = screen.getByText(constants.TITLE_TEXT);
    expect(e).toBeInTheDocument();
  });

  test('renders all input elements', () => {
    let blockTextInput = screen.getByLabelText(constants.BLOCK_TEXT_INPUT_LABEL);
    let timerSelectInput = screen.getByLabelText(constants.TIMER_SELECT_INPUT_LABEL);
    let startButton = screen.getByText(constants.START_BUTTON_TEXT);
    let deadButton = screen.getByText(constants.DEAD_BUTTON_TEXT);

    expect(blockTextInput).toBeInTheDocument();
    expect(timerSelectInput).toBeInTheDocument();
    expect(startButton).toBeInTheDocument();
    expect(deadButton).toBeInTheDocument();
  })

  test('creates a timer when Start is clicked', () => {
    let blockTextInput = screen.getByLabelText(constants.BLOCK_TEXT_INPUT_LABEL);
    let timerSelectInput = screen.getByLabelText(constants.TIMER_SELECT_INPUT_LABEL);
    let startButton = screen.getByText(constants.START_BUTTON_TEXT);
    let deadButton = screen.getByText(constants.DEAD_BUTTON_TEXT);

    //blockTextInput do stuff
    deadButton.click();
  });

})
