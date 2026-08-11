# pk7tran.github.io

This website contains some of my scientific illustrations.

To add an image, upload a jpg or png to the ``img`` directory and add an object to one of the two columns in ``illustrations-config.js``:

```js
{
    images: ["/img/filename.png"],
    captions: ["Caption"]
}
```

An object represents one illustration card. To group related images in one card with a shared caption, list multiple image sources and one caption:

```js
{
    images: ["/img/first.png", "/img/second.png"],
    captions: ["Shared caption"]
}
```

To give each grouped image its own caption, provide captions in the same order as the image sources:

```js
{
    images: ["/img/first.png", "/img/second.png"],
    captions: ["First caption", "Second caption"]
}
```

Follow the hosting locally instructions to see your changes.  If satisfied, add, commit, and push your changes.

Hosting locally: run ``python -m http.server`` in terminal and visit localhost:8000 in browser.
