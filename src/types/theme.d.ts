import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      main: string;
      secondary: string;
    };

    body: string;
    text: string;
    toggleBorder: string;
    gradient: string;
  }
}
