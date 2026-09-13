export function page_hero(data) {
  return `
<div class="hero-header ${data.contact_hero || ""}">
      <div class="hero-image-container d-block">
        <img
          src="${data.image}"
          alt="${data.image_name}"
          class="home-image"
          draggable="false"
        />
      </div>
      <div class="container hero-text">
        <h1 class="head-text text-capitalize my-2" id="hero-title">
        ${data.title}
        </h1>
       <!-- <p class="text-capitalize text-white pt-1 sub-hero-text">
          Explore cambodia
        </p> -->
        <p class="text-white sub1-hero-text">
          ${data.description}
        </p>
        <div
          class="d-flex justify-content-between gap-5 m-5 align-items-center hero-buttons"
        >
          <a href="${data.about_link}" class="btn-about">About us</a>
          <a href="${data.contact_link}" class="btn-book text-capitalize"
            >Book now</a
          >
        </div>
      </div>
    </div>
`;
}
