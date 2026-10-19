# Assignment 5: Simple Product Dashboard

## File Organization
- `src/main.jsx`: The entry point of the application.
- `src/App.jsx`: The root component managing the state (`showProducts` and `name`) and rendering the layout.
- `src/components/ProductList.jsx`: Renders a static list of products using the `.map()` function.
- `src/components/Product.jsx`: A reusable component that takes `title` and `price` as props and renders a single product.
- `src/components/Card.jsx`: A layout wrapper component that uses the `children` prop for composition.

## Challenges Faced
- Managing the conditional rendering of the `ProductList` component strictly through the `App` component's state.
- Ensuring the `Card` component remains generic and only handles layout responsibilities using the `children` prop without knowing what it renders.
- Implementing controlled inputs for the name field so the React state remains the single source of truth.

