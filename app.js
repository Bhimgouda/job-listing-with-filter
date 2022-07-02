 let jobData = `[
    {
      "id": 1,
      "company": "Photosnap",
      "logo": "./images/photosnap.svg",
      "new": true,
      "featured": true,
      "position": "Senior Frontend Developer",
      "role": "Frontend",
      "level": "Senior",
      "postedAt": "1d ago",
      "contract": "Full Time",
      "location": "USA Only",
      "languages": ["HTML", "CSS", "JavaScript"],
      "tools": []
    },
    {
      "id": 2,
      "company": "Manage",
      "logo": "./images/manage.svg",
      "new": false,
      "featured": true,
      "position": "Fullstack Developer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "1d ago",
      "contract": "Part Time",
      "location": "Remote",
      "languages": ["Python"],
      "tools": ["React"]
    },
    {
      "id": 3,
      "company": "Account",
      "logo": "./images/account.svg",
      "new": true,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2d ago",
      "contract": "Part Time",
      "location": "USA Only",
      "languages": ["JavaScript"],
      "tools": ["React", "Sass"]
    },
    {
      "id": 4,
      "company": "MyHome",
      "logo": "./images/myhome.svg",
      "new": true,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "5d ago",
      "contract": "Contract",
      "location": "USA Only",
      "languages": ["CSS", "JavaScript"],
      "tools": []
    },
    {
      "id": 5,
      "company": "Loop Studios",
      "logo": "./images/loop-studios.svg",
      "new": false,
      "featured": false,
      "position": "Software Engineer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "1w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["JavaScript"],
      "tools": ["Ruby", "Sass"]
    },
    {
      "id": 6,
      "company": "FaceIt",
      "logo": "./images/faceit.svg",
      "new": true,
      "featured": true,
      "position": "Junior Backend Developer",
      "role": "Backend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "UK Only",
      "languages": ["Ruby"],
      "tools": ["RoR"]
    },
    {
      "id": 7,
      "company": "Shortly",
      "logo": "./images/shortly.svg",
      "new": true,
      "featured": false,
      "position": "Junior Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["HTML", "JavaScript"],
      "tools": ["Sass"]
    },
    {
      "id": 8,
      "company": "Insure",
      "logo": "./images/insure.svg",
      "new": false,
      "featured": true,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "USA Only",
      "languages": ["JavaScript"],
      "tools": ["Vue", "Sass"]
    },
    {
      "id": 9,
      "company": "Eyecam Co.",
      "logo": "./images/eyecam-co.svg",
      "new": false,
      "featured": false,
      "position": "Full Stack Engineer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "3w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["JavaScript", "Python"],
      "tools": ["Django"]
    },
    {
      "id": 10,
      "company": "The Air Filter Company",
      "logo": "./images/the-air-filter-company.svg",
      "new": false,
      "featured": true,
      "position": "Front-end Dev",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "1mo ago",
      "contract": "Part Time",
      "location": "Worldwide",
      "languages": ["JavaScript"],
      "tools": ["React", "Sass"]
    }
  ]`;

jobData = JSON.parse(jobData);


const jobBadges = document.querySelectorAll('.job-badge');
const selectedArea = document.querySelector('.selected-badges');
const jobSearch = document.querySelector('.job-search');
const jobListing = document.querySelector('.job-listing');
const clearFilterButton = document.querySelector('#clear-filters');


/* Selecting Dummy job items */

const dummyJob = document.querySelector('.job')
let companyLogo = document.querySelector('.job__company-logo img');
let company = document.querySelector('.job__company-name');
let position = document.querySelector('.job__role');
let postedAt = document.querySelector('.was-listed');
let contract = document.querySelector('.job__duration'); 
let jobLocation = document.querySelector('.job__location');
let newJobBadge = document.querySelector('.new-badge');
let featuredJobBadge = document.querySelector('.featured-badge');
let dummyJobBadges = document.querySelector('.job__badges');

let searchFilterList = []; /* This will always hold the selected filters

/* Onload with Given job Data */

window.addEventListener('load',()=>{
  dummyJob.style.display = 'none';
  jobSearch.classList.add('job-search--hidden');
  jobData.forEach((job,index)=>{
    newJob = document.createElement('div');
    newJob.classList.add('job');
    newJob.id = `job${job.id}`


    /* Making changes to dummy job according to job data */
    companyLogo.src = `${job.logo}`;
    company.textContent = `${job.company}`;
    position.textContent = `${job.position}`;
    postedAt.textContent = `${job.postedAt}`;
    contract.textContent = `${job.contract}`;
    jobLocation.textContent = `${job.location}`;
    


    /* Checking Featured and New Jobs */

    if(!job.featured){
      featuredJobBadge.style.display = 'none'
    }
    else{
      featuredJobBadge.style.display = 'inline-block'
    }
    
    if(!job.new){
      newJobBadge.style.display = 'none'
    }
    else{
      newJobBadge.style.display = 'inline-block'
    }


    /* Adding Job Badges */

    dummyJobBadges.innerHTML = ``;
    dummyJobBadges.id = `job-badges${job.id}`
    dummyJobBadges.innerHTML += `<span class="job-badge">${job.role}</span>`
    if (job.tools){
      job.tools.forEach(tool=>{
        dummyJobBadges.innerHTML += `<span class="job-badge">${tool}</span>`
      })
    }
    if(job.languages){
      job.languages.forEach(language=>{
        dummyJobBadges.innerHTML += `<span class="job-badge">${language}</span>`
      })
    }


    /* Copying its html to newJob */
    newJob.innerHTML = dummyJob.innerHTML


  jobListing.appendChild(newJob);
  
  })
})



/* Adding a filter from page */

  jobListing.addEventListener('click', (e)=>{
    if (e.target.classList.contains('job-badge')){
      jobSearch.classList.remove('job-search--hidden');
      let badgeText = e.target.textContent;
      if(!selectedArea.innerHTML.includes(badgeText)){
        searchFilterList.push(badgeText);
        let newBadge = document.createElement('span');
        newBadge.classList.add('selected-badge');
        newBadge.innerHTML = `${badgeText}
        <span class="remove-icon remove1">
          <svg class="remove2" xmlns="http://www.w3.org/2000/svg" width="14" height="14">
            <path class = 'remove3'
              fill="#FFF"
              fill-rule="evenodd"
              d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"
            />
          </svg>
        </span>`
        selectedArea.appendChild(newBadge);
      }
    }
    searchFilter(searchFilterList);
  })



/* Remove all filters button */

clearFilterButton.addEventListener('click',()=>{
    selectedArea.innerHTML = ``;
    jobSearch.classList.add('job-search--hidden');
    searchFilterList = [];
    
    /* for clearing all the filter and showing all the job listings available */
    const allListedJobs = document.querySelectorAll('.job');
    allListedJobs.forEach(listedJob=>{
      listedJob.classList.remove('job--hidden');
    })
})



/* Remove One filter at a time */

selectedArea.addEventListener('click',(e)=>{
  let removingBadge;
  if(e.target.classList.contains('remove1')) removingBadge = e.target.parentElement;
  if(e.target.classList.contains('remove2')) removingBadge = e.target.parentElement.parentElement;
  if(e.target.classList.contains('remove3')) removingBadge = e.target.parentElement.parentElement.parentElement;
  if(removingBadge.parentNode){
    removingBadge.parentNode.removeChild(removingBadge);
  }
  searchFilterList = [];
  selectedArea.childNodes.forEach(badge=>{
    searchFilterList.push(badge.textContent.trim());
  });
  const allListedJobs = document.querySelectorAll('.job');
    allListedJobs.forEach(listedJob=>{
      listedJob.classList.remove('job--hidden');
    })
    searchFilter(searchFilterList);
    if (searchFilterList.length<1) {
      jobSearch.classList.add('job-search--hidden');
    }
})





/* THE SEARCH FILTERING PART */





function searchFilter(filterBadges){
  const allListedjobBadges = document.querySelectorAll('.job__badges');
  const allListedJobs = document.querySelectorAll('.job');
  allListedjobBadges.forEach(listedJobBadge=>{
    let badges = [];
    listedJobBadge.childNodes.forEach(badge=>{
      badges.push(badge.textContent);
    })
    filterBadges.forEach(filterBadge=>{
      if (!badges.includes(filterBadge)){
        badgeId = listedJobBadge.id.match(/\d+/)[0];
        console.log(badgeId)
        allListedJobs.forEach(listedJob=>{
          if (listedJob.id.includes(badgeId)) listedJob.classList.add('job--hidden');
        })
      }
    })
  })
}















