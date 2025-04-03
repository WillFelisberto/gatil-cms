/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/react';

import { RichTextComponent } from './RichTextComponent';

const meta: Meta<typeof RichTextComponent> = {
  title: 'Atoms/RichTextComponent',
  component: RichTextComponent,
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof RichTextComponent>;

const sampleData: any = {
  root: {
    children: [
      {
        type: 'paragraph',
        children: [
          {
            type: 'text',
            text: 'Hello, this is a rich text component example.'
          }
        ]
      }
    ],
    type: 'root'
  }
};

export const Default: Story = {
  args: {
    lexicalData: sampleData
  }
};

export const MultipleParagraphs: Story = {
  args: {
    lexicalData: {
      root: {
        children: [
          {
            children: [
              {
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'This project is an interactive web application built with React, Redux, and Styled Components to create an online book library experience. The application utilizes the Google Books API to provide a wide range of books for searching and exploration.',
                type: 'text',
                version: 1
              }
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            type: 'paragraph',
            version: 1,
            textFormat: 0
          },
          {
            children: [],
            direction: null,
            format: '',
            indent: 0,
            type: 'paragraph',
            version: 1,
            textFormat: 0
          },
          {
            children: [
              {
                detail: 0,
                format: 1,
                mode: 'normal',
                style: '',
                text: 'Key Features:',
                type: 'text',
                version: 1
              }
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            type: 'paragraph',
            version: 1,
            textFormat: 0
          },
          {
            children: [
              {
                children: [
                  {
                    detail: 0,
                    format: 1,
                    mode: 'normal',
                    style: '',
                    text: 'Book Search:',
                    type: 'text',
                    version: 1
                  },
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: ' Users can search for books using the integrated search bar. The application connects to the Google Books API to retrieve and display relevant results.',
                    type: 'text',
                    version: 1
                  }
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'listitem',
                version: 1,
                value: 1
              },
              {
                children: [
                  {
                    detail: 0,
                    format: 1,
                    mode: 'normal',
                    style: '',
                    text: 'Book Details:',
                    type: 'text',
                    version: 1
                  },
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: ' When selecting a book from the results list, users can view comprehensive details about the book, including cover, author, synopsis, and other relevant information.',
                    type: 'text',
                    version: 1
                  }
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'listitem',
                version: 1,
                value: 2
              },
              {
                children: [
                  {
                    detail: 0,
                    format: 1,
                    mode: 'normal',
                    style: '',
                    text: 'Favorites:',
                    type: 'text',
                    version: 1
                  },
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: " Users have the ability to add books to the favorites list. These favorites are stored locally in the user's browser using LocalStorage, ensuring a personalized and persistent experience.",
                    type: 'text',
                    version: 1
                  }
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'listitem',
                version: 1,
                value: 3
              },
              {
                children: [
                  {
                    detail: 0,
                    format: 1,
                    mode: 'normal',
                    style: '',
                    text: 'Attractive Interface:',
                    type: 'text',
                    version: 1
                  },
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: ' The frontend is developed with Styled Components to ensure an attractive and responsive interface. Navigation is streamlined and user-friendly to provide an intuitive user experience.',
                    type: 'text',
                    version: 1
                  }
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'listitem',
                version: 1,
                value: 4
              }
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            type: 'list',
            version: 1,
            listType: 'number',
            start: 1,
            tag: 'ol'
          },
          {
            children: [],
            direction: null,
            format: '',
            indent: 0,
            type: 'paragraph',
            version: 1,
            textFormat: 0
          },
          {
            children: [
              {
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'The application is hosted on the Vercel platform, ensuring fast and reliable delivery. This allows users to access the book library from anywhere and at any time.',
                type: 'text',
                version: 1
              }
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            type: 'paragraph',
            version: 1,
            textFormat: 0
          }
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        type: 'root',
        version: 1
      }
    }
  }
};
