function createCaption(text, className) {
    const caption = document.createElement("p");
    caption.className = className;
    caption.textContent = text;
    return caption;
}

function createImage(group, columnIndex, groupIndex, imageIndex) {
    const imageSource = group.images[imageIndex];
    const caption = group.captions.length === 1
        ? group.captions[0]
        : group.captions[imageIndex];
    const overlayId = `illustration-${columnIndex}-${groupIndex}-${imageIndex}`;

    const overlay = document.createElement("div");
    overlay.id = overlayId;
    overlay.className = "overlay";
    overlay.addEventListener("click", event => {
        if (event.target === overlay) {
            overlay.style.display = "none";
        }
    });

    const overlayContent = document.createElement("div");
    overlayContent.className = "overlay-content";

    const enlargedImage = document.createElement("img");
    enlargedImage.src = imageSource;
    enlargedImage.alt = caption;

    overlayContent.append(enlargedImage, createCaption(caption, "overlay-caption"));
    overlay.appendChild(overlayContent);

    const thumbnail = document.createElement("img");
    thumbnail.src = imageSource;
    thumbnail.alt = caption;

    const thumbnailContainer = document.createElement("div");
    thumbnailContainer.className = "thumbnail-container";
    thumbnailContainer.tabIndex = 0;
    thumbnailContainer.setAttribute("role", "button");
    thumbnailContainer.setAttribute("aria-label", `View larger image: ${caption}`);
    thumbnailContainer.addEventListener("click", () => {
        overlay.style.display = "block";
    });
    thumbnailContainer.addEventListener("keydown", event => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            overlay.style.display = "block";
        }
    });
    thumbnailContainer.append(
        thumbnail,
        createCaption(caption, "thumbnail-caption")
    );

    return { overlay, thumbnailContainer };
}

function renderIllustrations(columns) {
    const gallery = document.getElementById("illustration-gallery");

    columns.forEach((groups, columnIndex) => {
        const column = document.createElement("div");
        column.className = "illustration-column";

        groups.forEach((group, groupIndex) => {
            const card = document.createElement("article");
            card.className = "ill";

            group.images.forEach((imageSource, imageIndex) => {
                const { overlay, thumbnailContainer } = createImage(
                    group,
                    columnIndex,
                    groupIndex,
                    imageIndex
                );
                card.append(overlay, thumbnailContainer);

                // if (group.captions.length > 1) {
                //     card.appendChild(createCaption(group.captions[imageIndex], "illustration-caption"));
                // }
            });

            // if (group.captions.length === 1) {
            //     card.appendChild(createCaption(group.captions[0], "illustration-caption"));
            // }

            column.appendChild(card);
        });

        gallery.appendChild(column);
    });
}

renderIllustrations(window.ILLUSTRATION_COLUMNS);
