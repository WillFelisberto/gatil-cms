---
to: app/(my-app)/components/<%= h.changeCase.pascal(componentType) %>/<%= h.changeCase.pascal(name) %>/<%= h.changeCase.pascal(name) %>.tsx
---

type <%= h.changeCase.pascal(name) %>Props = {
  // define props here
};

export const <%= h.changeCase.pascal(name) %> = ({props}: <%= h.changeCase.pascal(name) %>Props) => {
  return (
    <div>
      <h1><%= h.changeCase.pascal(name) %> component</h1>
    </div>
  );
};
