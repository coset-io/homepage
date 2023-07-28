import React from 'react';
import "./src/styles/global.css"
import { Page } from './src/wrap-page'

export const wrapPageElement = ({ element, props }) => (
  <Page {...props}>{element}</Page>
)
