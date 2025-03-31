---
to: app/(my-app)/components/<%= h.changeCase.pascal(componentType) %>/<%= h.changeCase.pascal(name) %>/index.ts
---
export * from './<%= h.changeCase.pascal(name) %>';
