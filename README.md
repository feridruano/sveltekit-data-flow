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
5. Due to concurrent execution, merged load function data is based on "last wins". So last load function determines the values of data and overrides any previous assignment when necessary.
6. Load functions can access data from parent load functions using `await parent()`.
   1. Answers: How do you access data from `+layout.server.ts` or `+layout.ts` inside a load function? We can't access layout data from page load functions as the data has not been merged yet. This is resolved by using `await parent()`.
   2. You cannot await data from parent `+page.server.ts` or `+page.ts`.
7. $page.data allows parent layouts to access child data properties. Without this how do we retrieve or assign a variable from an inner route? The logic just becomes to larger and instead we use a page store to access child data.