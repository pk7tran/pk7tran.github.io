# pk7tran.github.io

This website contains some of my scientific illustrations.

To add an image to your columns:
Upload your image as a jpg or png under the ``img`` directory. Rename to something without spaces in name.  Remember name
Go to index.html
Within the ``div class="ills"`` block, there are two ``div`` blocks on the same block branch.  Each of those ``div`` block represents a column.  Pick which column you want to add the new image to.

Insert the following code block and fill in the blanks within the ``div`` column you've decided.  Make sure to **not** insert between a ``div class="ill"`` block.  Also make sure what you choose for **imgidname** is unique from the other ids in other ``ill`` blocks and replace everywhere below.

```
<div id="ill">
    <div id="imgidname" class="overlay">
        <a href="javascript:void(0)" class="closebtn" onclick="closeImg('imgidname')">&times;</a>
        <div class="overlay-content">
            <img src="/img/<filename of image>" style="width:100%; height:auto; position:center;">
        </div>
    </div>
    <img src="/img/<filename of image>" onclick="openImg('imgidname')">
    <p>Caption</p>
</div>
```

Follow the hosting locally instructions to see your changes.  If satisfied, add, commit, and push your changes.

Hosting locally: run ``python -m SimpleHTTPServer`` in terminal and visit localhost:8000 in browser