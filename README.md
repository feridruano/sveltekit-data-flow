# SvelteKit Data Flow

Hooks
- hooks.server.ts, hooks.client.ts
- Always ran when a SvelteKit request is made.

Server Load Functions
- +layout.server.ts, +page.server.ts
- Only run serverside.
- Credentialed or sensitive info requests.

Universal Load Functions
- +layout.ts, +page.ts
- Use SSR on first load, then are run in the browser.

Note: Server and Universal Load functions are run concurrently. However, incorrect usage of await parent() can cause dependencies and waterfall loading.

# Unorganized Knowledge
1. Data from `+layout.server.ts` is superseded by data from `+layout.ts`.
2. Data from `+page.server.ts` is superseded by data from `+page.ts`.
4. Data is merged from the top down, meaning any data returned from `routes/+layout.ts` will be available on the child routes, unless overwritten by a child route's `+page.server.ts` or `page.server.ts` load function.
5. Due to concurrent execution, merged load function's data is based on "last wins". Therefore, the last load function determines the values of data and overrides any previous assignment of variable with same name.
6. Load functions can access data from parent load functions using `await parent()`.
   1. Answers: How do you access data from `+layout.server.ts` or `+layout.ts` inside a load function?
   2. Why Question: We can't access layout data from page load functions as the data has not been merged yet. Therefore, our solution to resolve this is by using `await parent()`.
   3. You cannot await data from a parent `+page.server.ts` or `+page.ts`, only parent `+layout.server.ts` and `+layout.ts` files. Clarification, this does not mean you can't use `await parent()` in `+page.server.ts` or `page.ts`, you most certainly can but the parent it's awaiting is always a `+layout.server.ts` or `+layout.ts` file.
7. $page.data allows parent layouts to access child data properties.
   1. Answers: How do we retrieve or assign a variable from an inner route? The implementation logic becomes too large, so instead we use a page store to access child data which is the Svelte way of doing things.