import{f as n,g as l,c as o}from"./main-C7K6WTKf.js";async function p(){try{const e=s();e||i();const{courses:t}=await n(),a=d(t,e);a||i(),c(a)}catch(e){console.error("Error loading course data:",e),i()}}function s(){return new URLSearchParams(window.location.search).get("courseId")}function i(){window.location.href="../index.html"}function d(e,t){return e.find(a=>a.id===parseInt(t))}function c(e){r(e),_(e),u(e.instructor)}function r(e){const t=document.getElementById("detailedHeroContent");t&&(t.innerHTML=`
    <div class="detailed-hero__image-container">
      <img src="${e.image}" alt="${e.title}" class="detailed-hero__image">
    </div>
    <div class="detailed-hero__text-content">
      <h2 class="section__title detailed-hero__title">${e.title}</h2>
      <p class="section__subtitle detailed-hero__subtitle">${e.description}</p>
      <div class="detailed-hero__meta">
        <span class="detailed-hero__meta-item"><i class="fas fa-clock"></i> ${e.duration}</span>
        <span class="detailed-hero__meta-item"><i class="fas fa-signal"></i> ${e.difficulty}</span>
        <span class="detailed-hero__meta-item"><i class="fas fa-tag"></i> ${e.topic}</span>
      </div>
    </div>
  `)}function _(e){const t=document.getElementById("detailedMainContent");if(!t)return;t.innerHTML=`
    <div class="detailed-content__block">
      <h2 class="detailed-content__block-title detailed-content__block-title--main" >Course Description</h2>
      <p class="detailed-content__block-text">${e.promotionalMessage}</p>
    </div>

    <div class="detailed-content__block">
      <h3 class="detailed-content__block-title">What You'll Learn</h3>
      <ul class="detailed-content__block-list">
        <li class="detailed-content__block-item">Master the fundamentals of ${e.topic.toLowerCase()}</li>
        <li class="detailed-content__block-item">Develop practical skills you can apply immediately</li>
        <li class="detailed-content__block-item">Learn from ${e.instructor.name}'s extensive experience</li>
        <li class="detailed-content__block-item">Join a community of like-minded wellness enthusiasts</li>
      </ul>
    </div>

    <div class="detailed-content__block">
      <h3 class="detailed-content__block-title">Course Structure</h3>
      <div class="detailed-content__features">
        <div class="detailed-content__feature">
          <i class="fas fa-video detailed-content__feature-icon"></i>
          <h4 class="detailed-content__feature-title">Video Lessons</h4>
          <p class="detailed-content__feature-text">High-quality instructional videos for each module</p>
        </div>
        <div class="detailed-content__feature">
          <i class="fas fa-book detailed-content__feature-icon"></i>
          <h4 class="detailed-content__feature-title">Reading Materials</h4>
          <p class="detailed-content__feature-text">Curated resources to deepen your understanding</p>
        </div>
        <div class="detailed-content__feature">
          <i class="fas fa-tasks detailed-content__feature-icon"></i>
          <h4 class="detailed-content__feature-title">Practical Exercises</h4>
          <p class="detailed-content__feature-text">Hands-on activities to apply what you've learned</p>
        </div>
      </div>
    </div>

    <div class="detailed__enrollment">
      <div class="detailed__enrollment-price">${e.price} ${e.currency}</div>
      <div class="detailed__enrollment-rating">
        ${l(e.rating)}
        <span class="detailed__enrollment-rating-value">${e.rating}/5</span>
      </div>
      <button class="btn detailed__enrollment-button">Enroll Now</button>
    </div>
  `;const a=t.querySelector(".detailed__enrollment-button");a&&a.addEventListener("click",()=>{o(`
        <h2>Enroll Now</h2>
        <p>Please visit our contact form and fill it out – our manager will contact you shortly.</p>
        <a href="contacts.html#contactForm" class="popup-link">Go to Contact Form</a>
      `)})}function u(e){const t=document.getElementById("detailedInstructorCard");t&&(t.innerHTML=`
      <img src="${e.image}" alt="${e.name}" class="detailed-instructor__card-image">
      <div class="detailed-instructor__card-details">
        <h3 class="detailed-instructor__card-name">${e.name}</h3>
        <p class="detailed-instructor__card-role">${e.role}</p>
        <p class="detailed-instructor__card-bio">${e.bio}</p>
      </div>
  `)}export{p as loadCourseData};
