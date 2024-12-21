import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.tsx';
import './index.css';
import '@mantine/tiptap/styles.css';
import '@mantine/core/styles.css';
import 'mantine-contextmenu/styles.css';
import classes from './main.module.css';
import './i18n.ts';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { createTheme, Input, MantineProvider } from '@mantine/core';
import { LandingPage } from './pages/LandingPage.tsx';
import { CreatePageGeneric } from './pages/CreatePageGeneric.tsx';
import { Provider as ReactProvider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { ModalsProvider } from '@mantine/modals';
import {
  AutoUpdateModal,
  FullFocusModal,
} from './components/modalComponents/ModalWrappers.tsx';
import { reduxSlice } from './redux/slicer.ts';
import { AboutPage } from './pages/AboutPage.tsx';
import { ContextMenuProvider } from 'mantine-contextmenu';

export const reduxStore = configureStore({
  reducer: {
    reduxSlice: reduxSlice.reducer,
  },
});

const router = createBrowserRouter([
  {
    path: '/reactionroll',
    element: <App />,
    children: [
      {
        path: '',
        element: <LandingPage />,
      },
      {
        path: '/reactionroll/create',
        element: <CreatePageGeneric />,
      },
      {
        path: '/reactionroll/about',
        element: <AboutPage />,
      },
    ],
  },
]);

const theme = createTheme({
  breakpoints: {
    xs: '30em',
    sm: '48em',
    md: '64em',
    lg: '74em',
    xl: '90em',
  },
  components: {
    Input: Input.extend({ classNames: classes }),
  },
  colors: {
    'reactionroll-blue': [
      '#e7faff',
      '#d6f0f9',
      '#acdff0',
      '#80cee8',
      '#5dbfe1',
      '#48b5dd',
      '#3ab1dc',
      '#2b9bc4',
      '#1a8ab0',
      '#00789c',
    ],
  },
  primaryColor: 'reactionroll-blue',
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReactProvider store={reduxStore}>
      <MantineProvider defaultColorScheme="auto" theme={theme}>
        <ContextMenuProvider>
          <ModalsProvider
            modals={{ autoupdate: AutoUpdateModal, fullfocus: FullFocusModal }}
          >
            <RouterProvider router={router} />
          </ModalsProvider>
        </ContextMenuProvider>
      </MantineProvider>
    </ReactProvider>
  </StrictMode>,
);
