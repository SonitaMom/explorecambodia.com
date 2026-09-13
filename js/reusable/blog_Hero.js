export function blog_hero(data) {
  return `
     <div class="siemreap-header">
      <img
        src="${data.image}"
        alt="${data.image_desc}"
        class="siemreap-image"
      />
    </div>
    <div class="container siemreap-hero-title d-block">
      <div class="d-flex justify-content-between align-items-center">
        <span class="text-white siemreap-header-text text-uppercase">
          ${data.blog_head}
        </span>
        <a
          href="./contact.html"
          class="siemreap-header-text-btn text-white text-uppercase"
          >book this tour</a
        >
      </div>
      <p class="text-warning text-uppercase siemreap-header-sub-text mt-3">
        ${data.blog_sub_head}
      </p>
      <h3 class="text-white text-uppercase siemreap-header-title">
        ${data.blog_title}
      </h3>
      <p class="text-white siemreap-header-description mt-4">
        ${data.blog_text}
      </p>
      <p class="text-white siemreap-header-description">See the day-by-day</p>
    </div>
    <div class="siemreap-header-bottom">
      <div class="row">
        <div class="col-3">
          <p
            class="text-warning text-uppercase text-center pt-3 siemreap-btm-title"
          >
            durations
          </p>
          <p class="text-white text-uppercase siemreap-btm-text text-center">
           ${data.duration}
          </p>
        </div>
        <div class="col-2">
          <p
            class="text-warning text-uppercase text-center pt-3 siemreap-btm-title"
          >
            location
          </p>
          <p class="text-white text-uppercase siemreap-btm-text text-center">
            ${data.location}
          </p>
        </div>
        <div class="col-2">
          <p
            class="text-warning text-uppercase text-center pt-3 siemreap-btm-title"
          >
            transport
          </p>
          <p class="text-white text-uppercase siemreap-btm-text text-center">
            ${data.transportation}
          </p>
        </div>
        <div class="col-2">
          <p
            class="text-warning text-uppercase text-center pt-3 siemreap-btm-title"
          >
            stay
          </p>
          <p class="text-white text-uppercase siemreap-btm-text text-center">
            ${data.stayHotel}
          </p>
        </div>
        <div class="col-3">
          <p
            class="text-warning text-uppercase text-center pt-3 siemreap-btm-title"
          >
            best time
          </p>
          <p class="text-white text-uppercase siemreap-btm-text text-center">
            ${data.bestTime}
          </p>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="d-block siemreap-visit-exper">
        <p class="text-white text-uppercase visit-experience">
          what you'll experience
        </p>
        <h2 class="text-white text-uppercase visit-exper-title">
          ${data.visitExper}
        </h2>
        <p class="text-white visit-exper-sub-text ps-5">
          ${data.visitDesc}
        </p>
        <div
          class="mt-4 d-flex flex-wrap justify-content-start align-items-center gap-3 px-5"
        >
          ${data.visitExperience
            .map(
              (experience, index) =>
                `<div class="visit-exper-card">

                            <p class="text-warning visit-card-num ps-5">
                                ${String(index + 1).padStart(2, "0")}
                            </p>

                            <p class="text-white visit-card-title text-capitalize ps-5">
                                ${experience.visit_title}
                            </p>

                            <p class="text-white px-5 visit-card-desription">
                                ${experience.visit_description}
                            </p>

                        </div>`,
            )
            .join("")}
        </div>
      </div>
    </div> 
     <div class="container">
      <div class="d-block siemreap-journey">
        <p class="journey-header text-white text-uppercase">your journey</p>
        <h2 class="text-white text-uppercase journey-title">
          ${data.journey_title}
        </h2>
        <p class="text-white journey-sub-text pt-3">
          Read left to right, top to bottom — exactly how each day unfolds, stop
          by stop.
        </p>
        <div
          class="d-flex justify-content-center align-items-center days-buttons"
        >
        ${data.days
          .map(
            (day) =>
              `
          <button class="day-btn ${day.day === 1 ? "active" : ""} " data-day="${day.day}">
            <p class="text-warning day-btn-title text-center px-4">Day ${String(day.day).padStart(2, "0")}</p>
            <p
              class="text-white text-center text-uppercase day-btn-sub-text px-4 pb-3"
            >
              ${day.btn_title}
            </p>
          </button>`,
          )
          .join("")}
        </div>
        ${data.days
          .map(
            (day, dayIndex) =>
              `<div class="day-panel ${dayIndex === 0 ? "active" : ""}" data-day="${day.day}">
          <div class="tablet">
            <div class="tablet-side">
              <h3
                class="text-white tablet-text-title text-uppercase text-start"
              >
                ${day.day_title}
              </h3>
              <p class="text-white tablet-sub-text">
               ${day.day_description}
              </p>
            </div>
            <div class="relief">
            ${day.stops
              .map(
                (stop) => `
               <div class="stop">
                <div class="time text-warning text-uppercase">${stop.time}</div>
                <h4 class="text-white time-title">${stop.title}</h4>
                <p class="text-white time-text">
                  ${stop.description}
                </p>
              </div>
              `,
              )
              .join("")}
              </div>
              </div>
              </div>
        `,
          )
          .join("")}
    </div>
    </div>
        <div class="container">
      <div class="d-block">
        <p class="text-white place-header text-uppercase">Place You'll Visit</p>
        <h4 class="text-white place-visit-title text-uppercase">
          ${data.placeVisitTitle}
        </h4>
        <div
          class="d-flex justify-content-start align-items-center flex-wrap gap-4 my-5 py-5 px-2"
        >
        ${data.placeVisitCard
          .map(
            (VisitCard) =>
              `
          <div class="card place-cards">
            <img
              src="${VisitCard.image}"
              alt="${VisitCard.img_desc}"
              class="card-img-top place-image"
            />
            <h3
              class="card-title place-title-card text-white text-capitalize px-4 pt-2"
            >
              ${VisitCard.image_title}
            </h3>
            <p class="card-text text-white px-4 place-text-card">
              ${VisitCard.image_description}
            </p>
          </div>
        `,
          )
          .join("")}
         
      </div>
    </div>
    <div class="container">
      <div class="d-block my-5 py-5">
        <p class="text-white text-uppercase food-header">local food</p>
        <h4 class="text-white text-uppercase food-title mb-5">
          ${data.foods_title}
        </h4>
        <div class="row">
          <div class="col-6">
            <div class="d-block">
            ${data.localFood
              .map(
                (food) =>
                  `
            <div
                class="d-flex align-items-center justify-content-between mx-5 pt-3 food-info"
              >
                <p class="text-white food-name">${food.foodName}</p>
                <p class="text-white food-desc text-uppercase">${food.foodDesc}</p>
            </div>
            `,
              )
              .join("")}
              
             
            </div>
          </div>
          <div class="col-6">
            <div
              class="d-flex align-items-center justify-content-start mx-5 gap-3 flex-wrap food-images"
            >
            ${data.FoodImage.map(
              (foodImages) =>
                `
             <img
                src="${foodImages.image}"
                alt="${foodImages.food_desc}"
                class="food-image object-fit-cover"
              />
            `,
            ).join("")}
             
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container my-5 py-5">
      <div class="row">
        <div class="col-6">
          <img
            src="${data.hotelImage}"
            alt="${data.hotelDesc}"
            class="object-fit-cover hotel-image"
          />
        </div>
        <div class="col-6">
          <h4 class="text-white hotel-title text-capitalize">
            ${data.hotelName}
          </h4>
          <p class="text-white hotel-desc">
            ${data.hotelDescription}
          </p>
        </div>
      </div>
    </div>
    <div class="container my-5 py-5">
      <p class="text-white text-uppercase include-text">before you book</p>
      <h4 class="text-white text-uppercase include-title mb-5">
        what's include
      </h4>
      <div class="row include-card">
        <div class="col-6">
          <div class="ps-5 pb-5">
            <p class="text-warning text-uppercase include-head my-5">include</p>
            <div class="d-block text-center">
            ${data.includeList
              .map(
                (list) =>
                  `
            <div
                class="d-flex align-items-center justify-content-start gap-5 py-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.8em"
                  height="1.8em"
                  viewBox="0 0 24 24"
                  class="text-warning"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20 4L9 15m12 4H3m6-4l-5-5"
                  />
                </svg>
                <span class="text-white include-list">${list.list_items}</span>
              </div>
            `,
              )
              .join("")}
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="">
            <p class="text-warning text-uppercase include-head my-5">
              Not include
            </p>
            ${data.notInclude
              .map(
                (notIncludeList) =>
                  `
             <div
              class="d-flex align-items-center justify-content-start gap-5 py-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.8em"
                height="1.8em"
                viewBox="0 0 16 16"
                class="text-warning"
              >
                <path d="M0 0h16v16H0z" fill="none" />
                <path
                  fill="currentColor"
                  d="M12.293 2.293a1 1 0 0 1 1.414 1.414L9.414 8l4.293 4.293a1 1 0 1 1-1.414 1.414L8 9.414l-4.293 4.293a1 1 0 1 1-1.414-1.414L6.586 8L2.293 3.707a1 1 0 1 1 1.414-1.414L8 6.586z"
                />
              </svg>
              <span class="text-white include-list">${notIncludeList.not_include}</span>
            </div>
            `,
              )
              .join("")}
          </div>
        </div>
      </div>
    </div>
     <div class="container my-5 py-5">
      <div class="d-block">
        <p class="text-white feedback text-uppercase">traveller feedback</p>
        <h3 class="text-white feedback-text my-5">
          ${data.feedback}
        </h3>
      </div>
    </div>
      <div class="container my-5 py-5">
      <div class="d-block">
        <p class="book-text text-uppercase text-warning text-center">
          ready when you are
        </p>
        <h3 class="text-white book-title text-center text-uppercase py-4">
         ${data.bookingTitle}
        </h3>
        <p class="text-white book-desc text-center">
          ${data.bookingDesc}
        </p>
        <a href="../Pages/contact.html" class="book-btn text-uppercase my-5"
          ><span class="text-white btn-text">${data.booking_btn}</span></a
        >
      </div>
    </div>
    `;
}
export function JourneyTab() {
  const tabs = document.querySelectorAll(".day-btn");
  const panels = document.querySelectorAll(".day-panel");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const day = tab.getAttribute("data-day");
      tabs.forEach((t) => t.classList.remove("active"));
      panels.forEach((p) => p.classList.remove("active"));
      tab.classList.add("active");
      document
        .querySelector('.day-panel[data-day="' + day + '"]')
        .classList.add("active");
    });
  });
}
