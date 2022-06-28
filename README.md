# pk7tran.github.io

This website contains some of my scientific illustrations.

To add an image to your columns:
Upload your image as a jpg or png under the ``img`` directory.
Go to index.html
Within the ``div class="ills"`` block, there are two ``div`` blocks on the same block branch.  Each of those ``div`` block represents a column.  Pick which column you want to add the new image to.
Insert the following code block and fill in the blanks within the ``div`` column you've decided.  Make sure to **not** insert between a ``div class="ill"`` block.
```
<div id="ill">
    <img src="/img/<name of new image>">
    <p>Caption</p>
</div>
```

Follow the hosting locally instructions to see your changes.  If satisfied, add, commit, and push your changes.

Hosting locally: run ``python -m SimpleHTTPServer`` in terminal and visit localhost:8000 in browser