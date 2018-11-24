import React from 'react'
import theme from '../theme'

export default function global(props) {
  return (
    <style jsx global>{`
      * {
        box-sizing: border-box;
      }

      body, code, pre {
        background: ${theme.primary};
        color: ${theme.text};
        margin: 0;
      }

      pre, code {
        font-size: 1.5rem;
      }

      input, textarea, select, button, .button, .cm-s-monokai.CodeMirror {
        color: ${theme.text};
        border-radius: 0.4rem;
        border: none !important;
        background-color ${theme.primaryAlt} !important;
      }

      button[disabled] {
        cursor: default;
      }

      input, textarea {
        font-size: 1.6rem;
        font-family: ${theme.fontFamily};
        font-weight: 300;
        resize: none;
      }

      input[disabled], textarea[disabled] {
        opacity: 0.8;
        cursor: not-allowed;
      }

      input::placeholder, textarea::placeholder {
        opacity: 0.85;
        color: ${theme.text};
      }

      select {
        -webkit-appearance: none;
        -moz-appearance: none;
        background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 0 29 14" width="29"><path fill="%23d1d1d1" d="M9.37727 3.625l5.08154 6.93523L19.54036 3.625"/></svg>') center right no-repeat;
      }

      select:focus {
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 0 29 14" width="29"><path fill="%239b4dca" d="M9.37727 3.625l5.08154 6.93523L19.54036 3.625"/></svg>');
      }

      a {
        color: ${theme.link};
        cursor: pointer;
      }

      a:visited {
        color: ${theme.link};
      }

      a:focus, a:hover {
        color: ${theme.linkAct};
      }

      .Markdown pre {
          margin-bottom: 2.5rem;
      }

      .row {
        margin: 0 !important;
        width: 100% !important;
      }

      .fill {
        /* 55px: header height, 50px: footer height */
        display: flex;
        flex-direction: column;
        min-height: calc(100vh - 55px - 51px);
      }
      
      .main > .padded.container {
        padding-top: 20px;
        padding-bottom: 20px;
      }

      .danger {
        color: ${theme.danger};
      }

      .paginate {
        list-style: none;
        text-align: center;
        user-select: none;
        margin: 0 -2rem;
      }

      .paginate li {
        display: inline-block;
      }

      .paginate li.active a {
        border-color: ${theme.link};
      }

      .paginate a {
        outline: 0;
        border-radius: 50%;
        border: 1px solid;
        border-color: transparent;
        padding: 3px 8px;
      }

      @media (max-width: 840px) {
        .row .column.column-10,
        .row .column.column-20,
        .row .column.column-25,
        .row .column.column-33,
        .row .column.column-40,
        .row .column.column-50,
        .row .column.column-60,
        .row .column.column-67,
        .row .column.column-75,
        .row .column.column-80,
        .row .column.column-90 {
          flex: 1 1 auto !important;
          max-width: 100% !important;
        }
      }
    `}</style>
  )
}
