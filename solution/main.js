let cursor = 0

const galleryItems = [
  {
    src: "/images/totem.jpg",
    comments: [
      {
        user: "blackmann",
        comment: "This picture is so dope boyy!",
      }
    ],
    caption: "This is totem. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    closed: false,
  },
  {
    src: "/images/trendy.jpg",
    comments: [
      {
        user: "blackmann",
        comment: "How about we make a challenge about this",
      }
    ],
    caption: "It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    closed: false,
  }
]

function addComment(index, comment) {
  const imageData = galleryItems[index]
  imageData.comments.push(comment)

  updateCommentView(imageData.comments)
}

function parseAndAddComment() {
  const commentEl = document.getElementById("comment-input")
  const comment = commentEl.value.trim()

  if (comment.length > 0) {
    addComment(cursor, { user: "notgr", comment: comment });
    commentEl.value = "";
  }
}

function updateCommentView(comments) {
  const commentsEl = document.getElementById("comments")

  // TODO: implement
  const commentsHtml = comments.map((cm) => {
    return `
      <div class="d-flex mb-3">
        <div>
        <img src="https://www.gravatar.com/avatar/853a4092fdf3d8d3ed0ebd6b16aeff9f" alt="" width="60" class="rounded mr-3">
        </div>

        <div class="flex-grow-1">
          <p class="h6 font-weight-bold">${cm.user}</p>
          <p>${cm.comment}</p>
        </div>
      </div>
          `
  })

  commentsEl.innerHTML = commentsHtml.join("")
}

function updateCaptionView(caption) {
  const captionEl = document.getElementById("caption")
  captionEl.innerHTML = caption
}

function showImage(image) {
  const imageEl = document.getElementById("image-view")

  imageEl.src = image.src

  updateCommentView(image.comments)
  updateCaptionView(image.caption)
}


function moveToNext() {
  cursor = Math.abs((cursor + 1) % galleryItems.length)

  showImage(galleryItems[cursor])
}

function moveToPrevious() {
  cursor = Math.abs((cursor - 1) % galleryItems.length)

  showImage(galleryItems[cursor])
}

document.getElementById("next").onclick = moveToNext

document.getElementById("prev").onclick = moveToPrevious

document.getElementById("add-comment").onclick = parseAndAddComment


showImage(galleryItems[cursor]);