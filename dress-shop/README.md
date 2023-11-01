# APPOINTMENT TABLE (REACT - PRACTICE)

### Author

- Ha Nguyen (ha.nguyenthanh@asnet.com.vn)

### Overview

- This document providers a detailed estimate of the React practice.

### Timeline

- 15 Days
  - Start day: 27th October
  - End day: 15th November

### Team size

- 1 Dev

### Technical stack

- [Vite](https://vitejs.dev/) (v4.4.5)

  - Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects.

- React latest version [(v18.2.0)](https://github.com/facebook/react/blob/main/CHANGELOG.md#1820-june-14-2022)

  - React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.

- [TypeScript](https://www.typescriptlang.org/) (5.0.2)

  - TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.

- [Chakra UI](https://chakra-ui.com/) (v2.8.1)

  - Chakra UI is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications.

- [React Router](https://reactrouter.com/en/main)(v6.18.0)

  - React Router is a JavaScript framework that lets us handle client and server-side routing in React applications. It enables the creation of single-page web or mobile apps that allow navigating without refreshing the page. It also allows us to use browser history features while preserving the right application view.

- [Storybook](https://storybook.js.org/) (v7.5.2)

  - Storybook is a frontend workshop for building UI components and pages in isolation. Thousands of teams use it for UI development, testing, and documentation. It’s open source and free.

- [Unit Test](https://testing-library.com/docs/react-testing-library/intro/) (v13.4.0)

  - The Testing Library family of libraries is a very light-weight solution for testing without all the implementation details. The main utilities it provides involve querying for nodes similarly to how users would find them. In this way, testing-library helps ensure your tests give you confidence in your UI code.

- [React Query](https://tanstack.com/query/v3/docs/react/overview)

  - React Query is often described as the missing data-fetching library for React, but in more technical terms, it makes fetching, caching, synchronizing and updating server state in your React applications a breeze.

- [Mockapi](http://mockapi.io/)

  - MockAPI is a simple tool that lets you easily mock up APIs, generate custom data, and preform operations on it using RESTful interface. MockAPI is meant to be used as a prototyping/testing/learning tool.

- [Husky](https://www.npmjs.com/package/husky) (v8.0.2)

  - Husky is a tool that allows us to easily wrangle Git hooks and run the scripts we want at those stages.
  - Husky improves your commits and more

### Target

- Apply all React knowledge leaned
- Apply Jest and React Testing Library for unit testing
- Apply React Query for fetching data
- Apply Storybook
- Apply useReducer + useContext for state management
- Unit test coverage should greater than 80%
- Deploy to Vercel
- PageSpeed score at minimum 98 points

### Requirement

- Implement UI with [design](https://dress-shop.vercel.app/)
- View product list
- View product detail
- Sort by price
  - Low to high
  - High to low
- Filter by category
- Search by product name
- Add product to cart
- Update quantity of product in product detail and cart pages
- Remove product out of cart

### Environment

- MacOS
- Visual Studio Code
- GitLab
- Node v18.8.1

### Design

- Implement UI with : [Design](https://dress-shop.vercel.app/)

### Installation

| Command                                                                   | Action                                                           |
| :------------------------------------------------------------------------ | :--------------------------------------------------------------- |
| `git clone git@gitlab.asoft-python.com:ha.nguyenthanh/react-training.git` | Create a copy of the target repository                           |
| `cd dress-shop`                                                           | Change directory to appointment-app                              |
| `pnpm install`                                                            | Installs dependencies                                            |
| `pnpm run dev`                                                            | Start local dev server at localhost:3000                         |
| `pnpm run lint`                                                           | Check warning & error following ESLint                           |
| `pnpm run storybook`                                                      | Run the storybook to review all the components at localhost:6006 |
| `pnpm run test`                                                           | Run unit test                                                    |
