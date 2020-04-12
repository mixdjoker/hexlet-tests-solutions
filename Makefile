install:
	npm install

lint:
	npx eslint .

publish:
	npm publish --dry-run

test:
	@node --no-warnings test/test-index.js

run:
	@node --no-warnings src/index.js

.PHONY: test