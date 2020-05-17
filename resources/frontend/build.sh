npm run build && \
  rm -f public/*.js; \
  rm -f public/*.ico; \
  rm -f views/index.html; \
  cp dist/frontend/*.js /public; \
  cp dist/frontend/*.ico /public; \
  cp dist/frontend/index.html /views/index.html
