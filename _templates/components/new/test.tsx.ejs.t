---
to: app/(my-app)/components/<%= h.changeCase.pascal(componentType) %>/<%= h.changeCase.pascal(name) %>/<%= h.changeCase.pascal(name) %>.test.tsx
---
import { render, screen } from '@testing-library/react';
import { <%= h.changeCase.pascal(name) %> } from './<%= h.changeCase.pascal(name) %>';

describe('<%= h.changeCase.pascal(name) %>', () => {
  it('renders correctly', () => {
    render(<%= h.changeCase.pascal(name) %> {});
    expect(screen.getByText('<%= h.changeCase.pascal(name) %> component')).toBeInTheDocument();
  });
});
