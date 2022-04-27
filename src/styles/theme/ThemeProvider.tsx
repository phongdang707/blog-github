import * as React from 'react';
import { useSelector } from 'react-redux';
import { useThemeSlice } from './slice';
import { selectThemeKey } from './slice/selectors';
import { serializeTheme } from './utils';

export const ThemeProvider = (props: { children: React.ReactChild }) => {
  useThemeSlice();

  const theme = useSelector(selectThemeKey);

  return (
    <div data-theme={serializeTheme[theme]}>
      {React.Children.only(props.children)}
    </div>
  );
};
