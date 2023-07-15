
const JOBLIST = document.getElementById("JobList");
let allJobs = [];
let currentFilteredJobs = [];

// Filter job objects by name
function filterObjectsByName(inputName) {
  if (inputName === "") {
    // Reset filter and display all jobs
    resetBtnHandle();
    return;
  }

  // Filter jobs based on input name
  currentFilteredJobs = allJobs.filter(
    (obj) => obj.name.toLowerCase().includes(inputName.toLowerCase())
  );

  // Render filtered jobs
  renderJobs();
}

// Filter data based on id
function filterdata(id) {
  if (id == 0) {
    // Reset filter and display all jobs
    resetBtnHandle();
    return;
  }
  // Fill the page with jobs based on filter
  FillThePage(String.fromCharCode(+id + 64));
}

// Reset button handling
function resetBtnHandle() {
  // Reset current filtered jobs to all jobs
  currentFilteredJobs = allJobs;
  // Render all jobs
  renderJobs();
}

// Fill the page with jobs based on filter
function FillThePage(filter) {
  currentFilteredJobs = jobList[`${filter}`];
  // Render filtered jobs
  renderJobs();
}

// Render jobs to the JOBLIST container
function renderJobs() {
  JOBLIST.innerHTML = currentFilteredJobs
    .map((job, index) => createJobItemHTML(job, index))
    .join("");
}

// Create HTML for a job item
function createJobItemHTML(job, index) {
  return `
    <div class="listItemBox">
      <div class="companyDetail">
          <div class="logo">
              <img src=${job.image} style="width: 100%; height: 120px;">
          </div>
          <div class="detail">
              <h2 class="companyname">${job.name}</h2>
              <p>company: <span style="color: #2c70ce"> India</span></p>
              <p>Location: <span style="color: #2c70ce">${job.location}</span></p>
          </div>
      </div>
      <div class="viewsLike ${index}">
          <div>
              <i class="fa fa-eye"></i>
              <span class="count">${job.views}</span>
              &nbsp &nbsp &nbsp
              <span class="likeBtn ${index}">
                <i class="fa fa-thumbs-up" onClick="likeHandling(${index})"></i>
                ${job.like}
              </span>
          </div>
          <div>
              <i class="fa fa-star ${index}" onClick="starHandling(${index})"></i>
              &nbsp
              <i class="fa fa-share ${index}" onclick="shareBtn(${index})"></i>
          </div>
      </div>
      <div class="shareContainer ${index}">
          <a style='margin-right:10px;' href="https://www.facebook.com/">
              <img style="height: 20px;width: 20px;background-size: contain;"
                  src="https://cdn-icons-png.flaticon.com/128/733/733547.png" alt="">
          </a>
          <a style='margin-right:10px;' href="https://twitter.com/">
              <img style="height: 20px;width: 20px;background-size: contain;"
                  src="https://cdn-icons-png.flaticon.com/128/733/733579.png" alt="">
          </a>
          <a style='margin-right:10px;' href="https://www.instagram.com/">
              <img style="height: 20px;width: 20px;background-size: contain;"
                  src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png" alt="">
          </a>
          <a style='margin-right:10px;' href="https://www.whatsapp.com/">
              <img style="height: 20px;width: 20px;background-size: contain;"
                  src="https://cdn-icons-png.flaticon.com/128/3670/3670051.png" alt="">
          </a>
          <span onClick="handleCloseBtn(${index})">
              <img style="height: 20px;width: 20px;background-size: contain;"
                  src="https://cdn-icons-png.flaticon.com/128/1828/1828843.png" alt="">
          </span>
      </div>
    </div>`;
}




















  