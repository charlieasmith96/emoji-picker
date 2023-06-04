Here, I have implemented a basic emoji search system according to the specification demanded. The implementation that I have coded is basic in that it searches for only the first regex match, and thus cannot handle multiple regex matches in the same string.

The files have been separated out between React components (in the `/component` directory), utils (in the `/utils` and `emoji-utils` directory), typescript interfaces and also the emoji JSON file. This JSON file is imported locally each time. Optimizations could be performed to cache the parsed Javascript object, rather than having to import and parse the file each time.

Testing has been performed with Jest for unit testing and React Testing Library for component/integration testing. Higher level testing could be performed with Cypress if needed. Testing isn't as thorough as I would have liked, and I overshot the time by 15 minutes to make sure I had an acceptable level of testing.

I have also converted the codebase to Typescript as I believe the benefits are so great that it wouldn't make sense to use plain Javascript.

I have initialised Git tracking so you can read commit by commit if you prefer.

My biggest regrets, which would be solved if I had more time:

- Ineffecient fetching and parsing of the JSON file
- Poor styling, some of which is inline (I didn't have time to make it look pretty or use the theme provided)
- Basic implementation means only first regex is matched
- Greater test coverage
